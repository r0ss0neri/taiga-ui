import {readdirSync, readFileSync, statSync, writeFileSync} from 'fs';
import {basename, join} from 'path';

(function main(): void {
    const rootDirectory = process.env.ROOT_FOLDER || `./projects`;
    const excludedFolders = [
        `demo`,
        `demo-integrations`,
        `eslint-plugin`,
        `taiga-schematics`,
        `testing`,
        `test`,
        `i18n`,
        `icons`,
        `schematics`,
    ];

    generateUsedIcons(rootDirectory, excludedFolders);
})();

function generateUsedIcons(rootDirectory: string, excludedFolders: string[]): void {
    const tuiIconNames = findTuiIconNames(rootDirectory, excludedFolders);

    writeFileSync(
        `./projects/cdk/constants/used-icons.ts`,
        `/**
 * @description:
 * AUTOGENERATED
 *
 * Array of icons used in taiga-ui components
 */
 export const TUI_USED_ICONS = ${JSON.stringify(tuiIconNames)}`,
    );
}

function findTuiIconNames(rootDir: string, excludedFolders: string[]): string[] {
    const tuiIconNames = new Set<string>();

    function traverseDirectory(directory: string): void {
        const files = readdirSync(directory);

        for (const file of files) {
            const filePath = join(directory, file);
            const stat = statSync(filePath);

            if (stat.isDirectory()) {
                const folderName = basename(filePath);

                if (!excludedFolders.includes(folderName)) {
                    traverseDirectory(filePath);
                }
            } else if (stat.isFile()) {
                const fileContents = readFileSync(filePath, `utf-8`);
                const tuiIconMatches = fileContents.match(/\btuiIcon\w+(?=\s|'|")/g);

                if (tuiIconMatches) {
                    tuiIconMatches.forEach(match => {
                        tuiIconNames.add(match);
                    });
                }
            }
        }
    }

    traverseDirectory(rootDir);

    return Array.from(tuiIconNames);
}
