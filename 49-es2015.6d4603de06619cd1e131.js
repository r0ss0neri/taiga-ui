(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{G957:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiInputCardModule",(function(){return pe}));var o,r=n("2kYt"),a=n("nIj0"),i=n("sEIs"),d=n("T8fS"),l=n("SVIu"),u=n("Qq0t"),c=n("dvRg"),s=n("Piem"),p=n("EM62"),m=n("WupT"),C=n("K/iL"),f=n("OZlg"),b=n("e0eB"),g=n("iyc4"),h=n("Kw97"),E=n("Ui/K"),x=n("kbry"),T=n("i8xT");o=$localize`:␟239f0dcf126a15492c229cfe83752965a8b3aeca␟6380145577325433673:${"\ufffd#2\ufffd"}:START_TAG_CODE:form${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: tag is used for better autocomplete`;let v=(()=>{class e{constructor(){this.form=new a.FormGroup({card:new a.FormControl(""),expire:new a.FormControl(""),cvc:new a.FormControl("")})}get card(){const e=this.form.get("card").value;if(e.length<7)return null;switch(e.charAt(0)){case"0":case"1":case"2":return"https://ng-web-apis.github.io/dist/assets/images/common.svg";case"3":case"4":case"5":return"https://ng-web-apis.github.io/dist/assets/images/geolocation.svg";case"6":case"7":return"https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg";case"8":case"9":default:return"https://ng-web-apis.github.io/dist/assets/images/payment-request.svg"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-card-example-1"]],decls:10,vars:5,consts:[["tuiGroup","",3,"formGroup"],["formControlName","card",3,"autocompleteEnabled","cardSrc"],["formControlName","expire",3,"autocompleteEnabled"],["formControlName","cvc",3,"autocompleteEnabled"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"p"),p["\u0275\u0275i18nStart"](1,o),p["\u0275\u0275element"](2,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"form",0),p["\u0275\u0275elementStart"](4,"tui-input-card",1),p["\u0275\u0275text"](5," Card number "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"tui-input-expire",2),p["\u0275\u0275text"](7," Expire date "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](8,"tui-input-cvc",3),p["\u0275\u0275text"](9," CVC/CVV "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("formGroup",t.form),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("autocompleteEnabled",!0)("cardSrc",t.card),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("autocompleteEnabled",!0),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("autocompleteEnabled",!0))},directives:[a["\u0275angular_packages_forms_forms_y"],a.NgControlStatusGroup,h.a,a.FormGroupDirective,E.a,a.NgControlStatus,a.FormControlName,x.a,T.a],encapsulation:2,changeDetection:0}),e})();var y,V,S,w,_,O,P,D,I,M,G,A,$,F=n("EPR0"),z=n("KJKW"),N=n("WecH"),H=n("Wqyg"),L=n("2wTY"),R=n("eB8V"),k=n("gEyt"),j=n("RlDx"),B=n("kNZY"),q=n("yHor"),K=n("zGJC"),J=n("FSyC"),U=n("u8jZ");function W(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"p"),p["\u0275\u0275i18nStart"](1,y),p["\u0275\u0275element"](2,"code"),p["\u0275\u0275element"](3,"code"),p["\u0275\u0275element"](4,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](5,"tui-doc-example",2),p["\u0275\u0275element"](6,"tui-input-card-example-1"),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("content",e.example1)}}function Y(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"form",8),p["\u0275\u0275elementStart"](1,"tui-input-card",9),p["\u0275\u0275listener"]("binChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"](2).onBinChange(t)})),p["\u0275\u0275text"](2," Card number "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"tui-input-expire",10),p["\u0275\u0275text"](4," Expire date "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](5,"tui-input-cvc",11),p["\u0275\u0275text"](6," CVC/CVV "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](7,"tui-field-error",12),p["\u0275\u0275elementEnd"]()}if(2&e){const e=p["\u0275\u0275nextContext"](2);p["\u0275\u0275property"]("formGroup",e.control),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("autocompleteEnabled",e.autocompleteEnabledCard)("cardSrc",e.cardSrc)("focusable",e.focusable)("tuiTextfieldSize",e.sizeCard)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldLabelOutside",e.labelOutsideCard)("pseudoInvalid",e.pseudoInvalid)("pseudoHovered",e.pseudoHovered)("pseudoPressed",e.pseudoPressed)("pseudoFocused",e.pseudoFocused)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintMode",e.hintMode),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("autocompleteEnabled",e.autocompleteEnabledExpire)("focusable",e.focusable)("tuiTextfieldSize",e.sizeExpire)("tuiTextfieldLabelOutside",e.labelOutsideExpire)("pseudoInvalid",e.pseudoInvalid)("pseudoHovered",e.pseudoHovered)("pseudoPressed",e.pseudoPressed)("pseudoFocused",e.pseudoFocused),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("autocompleteEnabled",e.autocompleteEnabledCVC)("focusable",e.focusable)("length",e.length)("tuiTextfieldSize",e.sizeCVC)("tuiTextfieldLabelOutside",e.labelOutsideCVC)("pseudoInvalid",e.pseudoInvalid)("pseudoHovered",e.pseudoHovered)("pseudoPressed",e.pseudoPressed)("pseudoFocused",e.pseudoFocused)("tuiHintContent",e.hintContentCVC)("tuiHintDirection",e.hintDirectionCVC)("tuiHintMode",e.hintModeCVC)}}function Z(e,t){1&e&&(p["\u0275\u0275i18nStart"](0,S),p["\u0275\u0275element"](1,"code"),p["\u0275\u0275i18nEnd"]())}function Q(e,t){1&e&&p["\u0275\u0275i18n"](0,w)}function X(e,t){1&e&&p["\u0275\u0275i18n"](0,_)}function ee(e,t){1&e&&p["\u0275\u0275i18n"](0,O)}function te(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"tui-doc-documentation"),p["\u0275\u0275template"](1,Z,2,0,"ng-template",13),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"](2).disabledCard=t})),p["\u0275\u0275template"](2,Q,1,0,"ng-template",14),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"](2).autocompleteEnabledCard=t})),p["\u0275\u0275template"](3,X,1,0,"ng-template",15),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"](2).cardSrcSelected=t})),p["\u0275\u0275template"](4,ee,1,0,"ng-template",16),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](5,"inherited-documentation")}if(2&e){const e=p["\u0275\u0275nextContext"](2);p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValue",e.disabledCard),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValue",e.autocompleteEnabledCard),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.cardSrcVariants)("documentationPropertyValue",e.cardSrcSelected)}}function ne(e,t){1&e&&(p["\u0275\u0275i18nStart"](0,P),p["\u0275\u0275element"](1,"code"),p["\u0275\u0275i18nEnd"]())}function oe(e,t){1&e&&p["\u0275\u0275i18n"](0,D)}function re(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"tui-doc-documentation"),p["\u0275\u0275template"](1,ne,2,0,"ng-template",13),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"](2).disabledExpire=t})),p["\u0275\u0275template"](2,oe,1,0,"ng-template",14),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"](2).autocompleteEnabledExpire=t})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](3,"inherited-documentation")}if(2&e){const e=p["\u0275\u0275nextContext"](2);p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValue",e.disabledExpire),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValue",e.autocompleteEnabledExpire)}}function ae(e,t){1&e&&(p["\u0275\u0275i18nStart"](0,I),p["\u0275\u0275element"](1,"code"),p["\u0275\u0275i18nEnd"]())}function ie(e,t){1&e&&p["\u0275\u0275i18n"](0,M)}function de(e,t){1&e&&p["\u0275\u0275i18n"](0,G)}function le(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"tui-doc-documentation"),p["\u0275\u0275template"](1,ae,2,0,"ng-template",13),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"](2).disabledCVC=t})),p["\u0275\u0275template"](2,ie,1,0,"ng-template",14),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"](2).autocompleteEnabledCVC=t})),p["\u0275\u0275template"](3,de,1,0,"ng-template",17),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"](2).length=t})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](4,"inherited-documentation")}if(2&e){const e=p["\u0275\u0275nextContext"](2);p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValue",e.disabledCVC),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValue",e.autocompleteEnabledCVC),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.lengthVariants)("documentationPropertyValue",e.length)}}function ue(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-demo",3),p["\u0275\u0275template"](1,Y,8,34,"ng-template"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](2,"div",4),p["\u0275\u0275elementStart"](3,"p"),p["\u0275\u0275i18nStart"](4,V),p["\u0275\u0275element"](5,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"tui-accordion",5),p["\u0275\u0275elementStart"](7,"tui-accordion-item",6),p["\u0275\u0275text"](8," TuiInputCardComponent "),p["\u0275\u0275template"](9,te,6,4,"ng-template",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](10,"tui-accordion-item",6),p["\u0275\u0275text"](11," TuiInputExpireComponent "),p["\u0275\u0275template"](12,re,4,2,"ng-template",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](13,"tui-accordion-item",6),p["\u0275\u0275text"](14," TuiInputCVCComponent "),p["\u0275\u0275template"](15,le,5,4,"ng-template",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("control",e.control),p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("closeOthers",!1),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("open",!0),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("open",!1),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("open",!1)}}function ce(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",18),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275i18nStart"](2,A),p["\u0275\u0275element"](3,"code"),p["\u0275\u0275element"](4,"code"),p["\u0275\u0275element"](5,"code"),p["\u0275\u0275element"](6,"tui-doc-code",19),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"li"),p["\u0275\u0275elementStart"](8,"p"),p["\u0275\u0275i18n"](9,$),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](10,"tui-doc-code",20),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("code",e.exampleImportModule),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}y=$localize`:␟c9ac81bdc13fedc0faecc9901c9dad3970802b96␟7331476792198131844:${"[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:InputCard${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE: can be used with ${"[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:InputExpire${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE: and ${"[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:InputCVC${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE: to input a card `,y=p["\u0275\u0275i18nPostprocess"](y),V=$localize`:␟af399160ce687f2b638d3c19892948d18a7ecd7a␟4281817233970958464: Add ${"\ufffd#5\ufffd"}:START_TAG_CODE:tuiCreateLuhnValidator(customMessage?)${"\ufffd/#5\ufffd"}:CLOSE_TAG_CODE: to control validators to validate it with Luhn algorithm `,S=$localize`:␟5cbe1e1a698534368529610790cf11304a1415f3␟8741787945321813870: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE:) `,w=$localize`:␟d5d2227345f3c4b746809be2d872f34f819f8090␟3717227958474842046: Browser autocomplete of card `,_=$localize`:␟dcc7e3b746f7cded22fc2e353f17e985980623f7␟485699365067563704: SVG card icon `,O=$localize`:␟fb5491175d895b16c29c18e6ee0deaac92726d60␟3654424801956026296: BIN value (card first 6 symbols) `,P=$localize`:␟5cbe1e1a698534368529610790cf11304a1415f3␟8741787945321813870: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE:) `,D=$localize`:␟d5d2227345f3c4b746809be2d872f34f819f8090␟3717227958474842046: Browser autocomplete of card `,I=$localize`:␟5cbe1e1a698534368529610790cf11304a1415f3␟8741787945321813870: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE:) `,M=$localize`:␟d5d2227345f3c4b746809be2d872f34f819f8090␟3717227958474842046: Browser autocomplete of card `,G=$localize`:␟f9633c5a291f65405f5a5ebdb40846783f6d65a1␟8094181198746722162: Code length `,A=$localize`:␟48dffedf6094210d858fdcdc91a2382270da06c5␟7177877498095848896: Import ${"[\ufffd#3\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:TuiInputCardModule${"[\ufffd/#3\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE:, ${"[\ufffd#3\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:TuiInputCVCModule${"[\ufffd/#3\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE:, ${"[\ufffd#3\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:TuiInputExpireModule${"[\ufffd/#3\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: modules into the module where you want to use them: ${"\ufffd#6\ufffd"}:START_TAG_TUI_DOC_CODE:${"\ufffd/#6\ufffd"}:CLOSE_TAG_TUI_DOC_CODE:`,A=p["\u0275\u0275i18nPostprocess"](A),$=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let se=(()=>{class e extends m.a{constructor(e){super(),this.notifications=e,this.exampleImportModule="import {TuiInputCardModule, TuiInputCVCModule, TuiInputExpireModule} from '@taiga-ui/addon-commerce';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiInputCardModule,\n        TuiInputCVCModule,\n        TuiInputExpireModule,\n    ],\n...\n",this.exampleInsertTemplate='<form [formGroup]="form">\n    <tui-input-card formControlName="card">\n        Card number\n    </tui-input-card>\n    <tui-input-expire formControlName="expire">\n        Expire date\n    </tui-input-expire>\n    <tui-input-cvc formControlName="cvc">\n        CVC/CVV\n    </tui-input-cvc>\n</form>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-input-card-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputCardExample1 {\n    readonly form = new FormGroup({\n        card: new FormControl(''),\n        expire: new FormControl(''),\n        cvc: new FormControl(''),\n    });\n\n    get card(): string | null {\n        const value: string = this.form.get('card')!.value;\n\n        if (value.length < 7) {\n            return null;\n        }\n\n        switch (value.charAt(0)) {\n            case '0':\n            case '1':\n            case '2':\n                return 'https://ng-web-apis.github.io/dist/assets/images/common.svg';\n            case '3':\n            case '4':\n            case '5':\n                return 'https://ng-web-apis.github.io/dist/assets/images/geolocation.svg';\n            case '6':\n            case '7':\n                return 'https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg';\n            case '8':\n            case '9':\n            default:\n                return 'https://ng-web-apis.github.io/dist/assets/images/payment-request.svg';\n        }\n    }\n}\n",HTML:'<p i18n><code>form</code> tag is used for better autocomplete</p>\n<form tuiGroup [formGroup]="form">\n    <tui-input-card\n        formControlName="card"\n        [autocompleteEnabled]="true"\n        [cardSrc]="card"\n    >\n        Card number\n    </tui-input-card>\n    <tui-input-expire formControlName="expire" [autocompleteEnabled]="true">\n        Expire date\n    </tui-input-expire>\n    <tui-input-cvc formControlName="cvc" [autocompleteEnabled]="true">\n        CVC/CVV\n    </tui-input-cvc>\n</form>\n'},this.card="",this.sizeVariantsCustom=["m","l"],this.sizeCard=this.sizeVariantsCustom[1],this.sizeExpire=this.sizeVariantsCustom[1],this.sizeCVC=this.sizeVariantsCustom[1],this.lengthVariants=[3,4],this.length=this.lengthVariants[0],this.cleaner=!1,this.exampleText="0000 0000 0000 0000",this.labelOutsideCard=!1,this.labelOutsideExpire=!1,this.labelOutsideCVC=!1,this.hintContentCVC=null,this.hintDirectionCVC="bottom-left",this.hintModeCVC=null,this.cards={common:"https://ng-web-apis.github.io/dist/assets/images/common.svg",universal:"https://ng-web-apis.github.io/dist/assets/images/universal.svg",intersection:"https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg",mutation:"https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg"},this.cardSrcVariants=Object.keys(this.cards),this.cardSrcSelected=null,this.autocompleteEnabledCard=!1,this.autocompleteEnabledCVC=!1,this.autocompleteEnabledExpire=!1,this.control=new a.FormGroup({card:new a.FormControl("",[a.Validators.required,Object(d.tuiCreateLuhnValidator)("Invalid card number")]),expire:new a.FormControl("",a.Validators.required),cvc:new a.FormControl("",a.Validators.required)})}get cardSrc(){return null===this.cardSrcSelected?null:this.cards[this.cardSrcSelected]}get disabledCard(){return this.isDisabled("card")}set disabledCard(e){this.toggleDisabled(e,"card")}get disabledExpire(){return this.isDisabled("expire")}set disabledExpire(e){this.toggleDisabled(e,"expire")}get disabledCVC(){return this.isDisabled("cvc")}set disabledCVC(e){this.toggleDisabled(e,"cvc")}isDisabled(e){return this.control.get(e).disabled}toggleDisabled(e,t){e?this.control.get(t).disable():this.control.get(t).enable()}onBinChange(e){this.notifications.show("bin: "+e).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(p["\u0275\u0275directiveInject"](u.TuiNotificationsService))},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["example-input-card"]],features:[p["\u0275\u0275ProvidersFeature"]([{provide:C.a,useExisting:Object(p.forwardRef)(()=>e)}]),p["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","InputCard","package","ADDON-COMMERCE"],["pageTab",""],["id","group","heading","tui-group",3,"content"],[3,"control"],[1,"b-full-width","tui-space_bottom-6"],[1,"b-full-width",3,"closeOthers"],[3,"open"],["tuiAccordionItemContent",""],[1,"form",3,"formGroup"],["formControlName","card",1,"control",3,"autocompleteEnabled","cardSrc","focusable","tuiTextfieldSize","tuiTextfieldCleaner","tuiTextfieldLabelOutside","pseudoInvalid","pseudoHovered","pseudoPressed","pseudoFocused","tuiHintContent","tuiHintDirection","tuiHintMode","binChange"],["formControlName","expire",1,"control",3,"autocompleteEnabled","focusable","tuiTextfieldSize","tuiTextfieldLabelOutside","pseudoInvalid","pseudoHovered","pseudoPressed","pseudoFocused"],["formControlName","cvc",1,"control",3,"autocompleteEnabled","focusable","length","tuiTextfieldSize","tuiTextfieldLabelOutside","pseudoInvalid","pseudoHovered","pseudoPressed","pseudoFocused","tuiHintContent","tuiHintDirection","tuiHintMode"],["formControlName","card",1,"error"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","autocompleteEnabled","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","cardSrc","documentationPropertyMode","input","documentationPropertyType","string | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","binChange","documentationPropertyMode","output","documentationPropertyType","string | null"],["documentationPropertyName","length","documentationPropertyMode","input","documentationPropertyType","3 | 4",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275template"](1,W,7,1,"ng-template",1),p["\u0275\u0275template"](2,ue,16,5,"ng-template",1),p["\u0275\u0275template"](3,ce,11,2,"ng-template",1),p["\u0275\u0275elementEnd"]())},directives:[f.a,b.a,g.a,v,F.a,z.a,N.a,H.a,a["\u0275angular_packages_forms_forms_y"],a.NgControlStatusGroup,a.FormGroupDirective,E.a,a.NgControlStatus,a.FormControlName,L.b,R.b,k.b,j.a,x.a,T.a,B.a,q.a,K.a,J.a,U.a],styles:[".form[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.control[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-bottom:4px}.control[_ngcontent-%COMP%]:not(:last-child){margin-right:20px}.error[_ngcontent-%COMP%]{min-width:100%}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5)}"],changeDetection:0}),e})(),pe=(()=>{class e{}return e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[d.TuiInputCardModule,d.TuiInputCVCModule,d.TuiInputExpireModule,u.TuiGroupModule,u.TuiLinkModule,c.TuiFieldErrorModule,c.TuiAccordionModule,r.c,u.TuiHintControllerModule,u.TuiTextfieldControllerModule,a.ReactiveFormsModule,...l.e,s.a,i.f.forChild(Object(l.n)(se))]]}),e})()}}]);