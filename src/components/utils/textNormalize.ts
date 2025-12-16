export const normalizeText = (text: string): string => {
  return text
    .replace(/[\u00A0\u202F\u2009\u200B]/g, " ") // espaces insécables / zéro width
    .replace(/\s+/g, " ")                        // espaces multiples
    .replace(/[^\S\r\n]+/g, " ")                 // tout autre espace invisible
    .trim();
};
