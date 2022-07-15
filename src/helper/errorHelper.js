export const cutFilename = (str) => str?.slice(0, str.match(/, filename/).index);
