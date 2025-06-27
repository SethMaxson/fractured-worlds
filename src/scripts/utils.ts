export namespace Utils {
    export namespace String {
        export function capitalize(text: string) {
            return text.charAt(0).toUpperCase() + text.slice(1);
        }
    }
}