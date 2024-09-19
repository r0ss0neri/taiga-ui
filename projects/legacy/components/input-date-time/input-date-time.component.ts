import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {MaskitoOptions} from '@maskito/core';
import {maskitoDateTimeOptionsGenerator} from '@maskito/kit';
import type {TuiValueTransformer} from '@taiga-ui/cdk/classes';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import type {TuiDateMode, TuiTimeMode} from '@taiga-ui/cdk/date-time';
import {
    DATE_FILLER_LENGTH,
    tuiDateClamp,
    TuiDay,
    TuiMonth,
    TuiTime,
} from '@taiga-ui/cdk/date-time';
import type {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {tuiWatch} from '@taiga-ui/cdk/observables';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import type {TuiBooleanHandler, TuiContext} from '@taiga-ui/cdk/types';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {
    changeDateSeparator,
    tuiNullableSame,
    tuiPure,
} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_DATE_FORMAT, TUI_DEFAULT_DATE_FORMAT} from '@taiga-ui/core/tokens';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import type {TuiInputDateOptions} from '@taiga-ui/kit/tokens';
import {
    TUI_DATE_TEXTS,
    TUI_DATE_TIME_VALUE_TRANSFORMER,
    TUI_INPUT_DATE_OPTIONS,
    TUI_TIME_TEXTS,
    tuiDateStreamWithTransformer,
} from '@taiga-ui/kit/tokens';
import {AbstractTuiControl, tuiAsControl} from '@taiga-ui/legacy/classes';
import {TuiPrimitiveTextfieldComponent} from '@taiga-ui/legacy/components/primitive-textfield';
import {TUI_TEXTFIELD_SIZE} from '@taiga-ui/legacy/directives';
import type {TuiFocusableElementAccessor} from '@taiga-ui/legacy/tokens';
import {tuiAsFocusableItemAccessor} from '@taiga-ui/legacy/tokens';
import {TUI_DATE_MODE_MASKITO_ADAPTER} from '@taiga-ui/legacy/utils';
import type {Observable} from 'rxjs';
import {BehaviorSubject, combineLatest, map, timer} from 'rxjs';

const DATE_TIME_SEPARATOR = ', ';

@Component({
    standalone: false,
    selector: 'tui-input-date-time',
    templateUrl: './input-date-time.template.html',
    styleUrls: ['./input-date-time.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputDateTimeComponent),
        tuiAsControl(TuiInputDateTimeComponent),
        tuiDateStreamWithTransformer(TUI_DATE_TIME_VALUE_TRANSFORMER),
    ],
    host: {
        ngSkipHydration: 'true',
        '[attr.data-size]': 'size',
        '(click)': 'onClick()',
    },
})
export class TuiInputDateTimeComponent
    extends AbstractTuiControl<[TuiDay | null, TuiTime | null]>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private readonly options = inject(TUI_INPUT_DATE_OPTIONS);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    private month: TuiMonth | null = null;
    private readonly timeMode$ = new BehaviorSubject<TuiTimeMode>('HH:MM');

    protected readonly timeTexts$ = inject(TUI_TIME_TEXTS);
    protected readonly dateTexts$ = inject(TUI_DATE_TEXTS);
    protected override readonly valueTransformer: TuiValueTransformer<
        [TuiDay | null, TuiTime | null]
    > | null = inject(TUI_DATE_TIME_VALUE_TRANSFORMER, {optional: true});

    protected readonly type!: TuiContext<TuiActiveZone>;

    protected readonly filler$: Observable<string> = combineLatest([
        this.dateTexts$.pipe(
            map((dateTexts) =>
                changeDateSeparator(
                    dateTexts[this.dateFormat.mode],
                    this.dateFormat.separator,
                ),
            ),
        ),
        this.timeTexts$,
        this.timeMode$,
    ]).pipe(
        map(([dateFiller, timeTexts, timeMode]) =>
            this.getDateTimeString(dateFiller, timeTexts[timeMode]),
        ),
    );

    protected dateFormat = TUI_DEFAULT_DATE_FORMAT;
    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly dateFormat$ = inject(TUI_DATE_FORMAT)
        .pipe(tuiWatch(this.cdr), takeUntilDestroyed())
        .subscribe((format) => {
            this.dateFormat = format;
        });

    @Input()
    public min: TuiDay | [TuiDay | null, TuiTime | null] | null = this.options.min;

    @Input()
    public max: TuiDay | [TuiDay | null, TuiTime | null] | null = this.options.max;

    @Input()
    public disabledItemHandler: TuiBooleanHandler<TuiDay> = TUI_FALSE_HANDLER;

    @Input()
    public defaultActiveYearMonth = TuiMonth.currentLocal();

    public open = false;

    @Input()
    public set timeMode(value: TuiTimeMode) {
        this.timeMode$.next(value);
    }

    public get timeMode(): TuiTimeMode {
        return this.timeMode$.value;
    }

    public get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield?.nativeFocusableElement ?? null;
    }

    public get focused(): boolean {
        return !!this.textfield?.focused;
    }

    public get computedValue(): string {
        const {value, nativeValue, timeMode} = this;
        const [date, time] = value;
        const hasTimeInputChars = nativeValue.length > DATE_FILLER_LENGTH;

        if (!date || (!time && hasTimeInputChars)) {
            return nativeValue;
        }

        return this.getDateTimeString(date, time, timeMode);
    }

    public override setDisabledState(): void {
        super.setDisabledState();
        this.open = false;
    }

    public override writeValue(value: [TuiDay | null, TuiTime | null] | null): void {
        super.writeValue(value);

        this.nativeValue =
            this.value && (this.value[0] || this.value[1]) ? this.computedValue : '';
    }

    public onValueChange(value: string): void {
        if (!value) {
            this.onOpenChange(true);
        }

        if (value.length < DATE_FILLER_LENGTH) {
            this.value = [null, null];

            return;
        }

        const [date = '', time] = value.split(DATE_TIME_SEPARATOR);
        const parsedDate = TuiDay.normalizeParse(date, this.dateFormat.mode);
        const parsedTime =
            time && time.length === this.timeMode.length
                ? TuiTime.fromString(time)
                : null;

        this.open = false;
        this.value = [parsedDate, parsedTime];
    }

    protected get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    protected get computedMin(): TuiDay | [TuiDay, TuiTime] {
        return this.toTuiDay(this.min, this.options.min);
    }

    protected get computedMax(): TuiDay | [TuiDay, TuiTime] {
        return this.toTuiDay(this.max, this.options.max);
    }

    protected get fillerLength(): number {
        return DATE_FILLER_LENGTH + DATE_TIME_SEPARATOR.length + this.timeMode.length;
    }

    protected get maskOptions(): MaskitoOptions {
        return this.calculateMask(
            this.computedMin,
            this.computedMax,
            this.timeMode,
            this.dateFormat.mode,
            this.dateFormat.separator,
        );
    }

    protected get calendarIcon(): TuiInputDateOptions['icon'] {
        return this.options.icon;
    }

    protected get showNativePicker(): boolean {
        return this.nativePicker && this.timeMode === 'HH:MM';
    }

    protected get calendarValue(): TuiDay | null {
        return this.value[0];
    }

    protected get calendarMinDay(): TuiDay {
        const min = this.computedMin;

        return Array.isArray(min) ? min[0] : min;
    }

    protected get calendarMaxDay(): TuiDay {
        const max = this.computedMax;

        return Array.isArray(max) ? max[0] : max;
    }

    protected get computedActiveYearMonth(): TuiMonth {
        const {computedMin, computedMax} = this;

        return (
            this.month ||
            this.value[0] ||
            tuiDateClamp(
                this.defaultActiveYearMonth,
                Array.isArray(computedMin) ? computedMin[0] : computedMin,
                Array.isArray(computedMax) ? computedMax[0] : computedMax,
            )
        );
    }

    protected get nativeValue(): string {
        return this.nativeFocusableElement?.value || '';
    }

    protected set nativeValue(value: string) {
        if (!this.nativeFocusableElement) {
            return;
        }

        this.nativeFocusableElement.value = value;
    }

    protected onClick(): void {
        this.open = !this.open;
    }

    protected onDayClick(day: TuiDay): void {
        const modifiedTime = this.value[1] && this.clampTime(this.value[1], day);
        const newCaretIndex = DATE_FILLER_LENGTH + DATE_TIME_SEPARATOR.length;

        this.value = [day, modifiedTime];
        this.updateNativeValue(day);
        this.nativeFocusableElement?.setSelectionRange(newCaretIndex, newCaretIndex);
        this.open = false;
    }

    protected onMonthChange(month: TuiMonth): void {
        this.month = month;
    }

    protected onOpenChange(open: boolean): void {
        this.open = open;
    }

    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);

        if (focused) {
            return;
        }

        timer(0)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
                this.nativeValue = this.trimTrailingSeparator(this.nativeValue);
            });

        if (
            this.value[0] === null ||
            this.value[1] !== null ||
            this.nativeValue.length === this.fillerLength ||
            this.timeMode === 'HH:MM'
        ) {
            return;
        }

        const [, time] = this.nativeValue.split(DATE_TIME_SEPARATOR);

        if (!time) {
            return;
        }

        const parsedTime = TuiTime.fromString(time);

        this.value = [this.value[0], parsedTime];
    }

    protected getFallbackValue(): [TuiDay | null, TuiTime | null] {
        return [null, null];
    }

    protected override valueIdenticalComparator(
        oldValue: [TuiDay | null, TuiTime | null],
        newValue: [TuiDay | null, TuiTime | null],
    ): boolean {
        return (
            tuiNullableSame(oldValue[0], newValue[0], (a, b) => a.daySame(b)) &&
            tuiNullableSame(oldValue[1], newValue[1], (a, b) => String(a) === String(b))
        );
    }

    private get nativePicker(): boolean {
        return this.options.nativePicker && this.isMobile;
    }

    @tuiPure
    private calculateMask(
        min: TuiDay | [TuiDay, TuiTime],
        max: TuiDay | [TuiDay, TuiTime],
        timeMode: TuiTimeMode,
        dateFormat: TuiDateMode,
        dateSeparator: string,
    ): MaskitoOptions {
        return maskitoDateTimeOptionsGenerator({
            timeMode,
            dateSeparator,
            dateMode: TUI_DATE_MODE_MASKITO_ADAPTER[dateFormat],
            min: this.toNativeDate(min),
            max: this.toNativeDate(max),
        });
    }

    @tuiPure
    private getDateTimeString(
        date: TuiDay | string,
        time: TuiTime | string | null,
        timeMode: TuiTimeMode = 'HH:MM',
    ): string {
        const dateString =
            date instanceof TuiDay
                ? date.toString(this.dateFormat.mode, this.dateFormat.separator)
                : date;
        const timeString = time instanceof TuiTime ? time.toString(timeMode) : time || '';

        return timeString
            ? `${dateString}${DATE_TIME_SEPARATOR}${timeString}`
            : dateString;
    }

    private updateNativeValue(day: TuiDay): void {
        const time = this.nativeValue.split(DATE_TIME_SEPARATOR)[1] || '';

        this.nativeValue = this.getDateTimeString(day, time);
    }

    private clampTime(time: TuiTime, day: TuiDay): TuiTime {
        const {computedMin, computedMax} = this;

        const ms = time.toAbsoluteMilliseconds();
        const min =
            Array.isArray(computedMin) && day.daySame(this.calendarMinDay)
                ? computedMin[1].toAbsoluteMilliseconds()
                : -Infinity;
        const max =
            Array.isArray(computedMax) && day.daySame(this.calendarMaxDay)
                ? computedMax[1].toAbsoluteMilliseconds()
                : Infinity;

        return TuiTime.fromAbsoluteMilliseconds(tuiClamp(ms, min, max));
    }

    private trimTrailingSeparator(value: string): string {
        return value.replace(
            new RegExp(`(\\${this.dateFormat.separator}|${DATE_TIME_SEPARATOR}|\\.)$`),
            '',
        );
    }

    private toNativeDate(value: TuiDay | [TuiDay, TuiTime]): Date {
        if (!Array.isArray(value)) {
            return value.toLocalNativeDate();
        }

        const [{year, month, day}, {hours, minutes, seconds, ms}] = value;

        return new Date(year, month, day, hours, minutes, seconds, ms);
    }

    private toTuiDay(
        value: TuiDay | [TuiDay | null, TuiTime | null] | null,
        fallback: TuiDay,
    ): TuiDay | [TuiDay, TuiTime] {
        if (!value) {
            return fallback;
        }

        if (!Array.isArray(value)) {
            return value;
        }

        const [tuiDay, tuiTime] = value;

        if (!tuiDay) {
            return fallback;
        }

        if (!tuiTime) {
            return tuiDay;
        }

        return value as [TuiDay, TuiTime];
    }
}
