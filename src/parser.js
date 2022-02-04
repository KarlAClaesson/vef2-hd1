import parser from 'number-parsing'

export function stringToNumber(str) {
    if (str === null || str === undefined || str === '') return NaN;
    const trimmed = str.toString().trim();
    if (trimmed === '') return NaN;
    // Ef talan er með scientific notation þá eru ekki kommur í stað punkta
    if(trimmed.includes('e') && !Number.isNaN(Number(trimmed))) return Number(trimmed);
    const cleanedString = trimmed.replace(/\./g, '').replace(/,/g, '.');
  
    return Number(cleanedString);
  }

export function parse(input) {
    const rawList = input.split('\n');
    const out = [];
  
    for (const s of rawList) {
      const numberOfString = stringToNumber(s);
      if (!Number.isNaN(numberOfString)) out.push(stringToNumber(numberOfString));
    }

    return out;

}