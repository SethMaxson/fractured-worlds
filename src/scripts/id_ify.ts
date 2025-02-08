export function id_ify(input: string) {
    var after = input.replace(/ +/g, '-').replace(/[\"\']+/g, '');
    return after;
}