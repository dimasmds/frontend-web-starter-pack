const removeUnnecessaryLitAdditionalString = (string) => string.replace(/<!---->|<\/?style>|cssText/g, '').trim();
const removeAllWhiteSpace = (string) => string.replace(/ /g, '').trim();

export { removeUnnecessaryLitAdditionalString, removeAllWhiteSpace };
