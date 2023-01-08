/**
 * Converts string to kebab case. Function created by ABabin (https://stackoverflow.com/a/67243723).
 * @param str String we want to convert.
 * @returns String in kebab case.
 */
export const kebabize = (str: string) => {
  return str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? '-' : '') + $.toLowerCase(),
  );
};
