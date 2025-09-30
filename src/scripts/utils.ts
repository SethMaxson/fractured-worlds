export namespace Utils {
    export namespace Dice {
        /** Roll a die with the specified number of faces */
        export function rollDie(faces: number): number {
			return Math.ceil(Math.random() * faces);
		}
    }
    export namespace String {
        export function capitalize(text: string) {
            return text.charAt(0).toUpperCase() + text.slice(1);
        }
        export function replaceComponentsInString(text: string) {
            let newText = text.replace(/\<(Character|c)\>/gi, '<span class="fw-bold character">')
                .replace(/\<(Location|l)\>/gi, '<span class="fw-bold location">')
                .replace(/\<(Important|im)\>/gi, '<span class="fw-bold important">');

            newText = newText.replace(/\<\/(Character|c|Location|l|Important|im)\>/gi, '</span>');
            return newText;
        }
        export function sanitizeUrl(path: string): string {
            let newPath = path.replace(/\//gi, '%2F'); // replace slashes
            return newPath;
        }
    }
}