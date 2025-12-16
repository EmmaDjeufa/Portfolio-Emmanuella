export const normalizeText = (text: string): string => {
  return text
    .replace(/[\u00A0\u202F\u2009\u200B]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};
