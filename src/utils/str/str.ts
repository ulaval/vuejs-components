/**
 * Obtains the string value from different source types.
 * @param text The value from witch the string must be extracted.
 */
export function getString(text?: string | (() => string)): string {
    if (!text) {
        return '';
    }
    return typeof text === 'string' ? text : text();
}

export function startsWith(text: string | undefined, startsWith: string | undefined): boolean {
    let undef: string | undefined = undefined;
    return (text === undef && startsWith === undef) // both undef
        || (text !== undef && startsWith !== undef && !text && !startsWith) // both empty
        || (!!text && startsWith !== undef && !startsWith) // startsWith empty
        || (!!text && !!startsWith && text.slice(0, startsWith.length) === startsWith);
}

let diacriticsMap: Object = {};
diacriticsMap[0x0061] = 'a';
diacriticsMap[0x24D0] = 'a';
diacriticsMap[0xFF41] = 'a';
diacriticsMap[0x1E9A] = 'a';
diacriticsMap[0x00E0] = 'a';
diacriticsMap[0x00E1] = 'a';
diacriticsMap[0x00E2] = 'a';
diacriticsMap[0x1EA7] = 'a';
diacriticsMap[0x1EA5] = 'a';
diacriticsMap[0x1EAB] = 'a';
diacriticsMap[0x1EA9] = 'a';
diacriticsMap[0x00E3] = 'a';
diacriticsMap[0x0101] = 'a';
diacriticsMap[0x0103] = 'a';
diacriticsMap[0x1EB1] = 'a';
diacriticsMap[0x1EAF] = 'a';
diacriticsMap[0x1EB5] = 'a';
diacriticsMap[0x1EB3] = 'a';
diacriticsMap[0x0227] = 'a';
diacriticsMap[0x01E1] = 'a';
diacriticsMap[0x00E4] = 'a';
diacriticsMap[0x01DF] = 'a';
diacriticsMap[0x1EA3] = 'a';
diacriticsMap[0x00E5] = 'a';
diacriticsMap[0x01FB] = 'a';
diacriticsMap[0x01CE] = 'a';
diacriticsMap[0x0201] = 'a';
diacriticsMap[0x0203] = 'a';
diacriticsMap[0x1EA1] = 'a';
diacriticsMap[0x1EAD] = 'a';
diacriticsMap[0x1EB7] = 'a';
diacriticsMap[0x1E01] = 'a';
diacriticsMap[0x0105] = 'a';
diacriticsMap[0x2C65] = 'a';
diacriticsMap[0x0250] = 'a';
diacriticsMap[0xA733] = 'aa';
diacriticsMap[0x00E6] = 'ae';
diacriticsMap[0x01FD] = 'ae';
diacriticsMap[0x01E3] = 'ae';
diacriticsMap[0xA735] = 'ao';
diacriticsMap[0xA737] = 'au';
diacriticsMap[0xA739] = 'av';
diacriticsMap[0xA73B] = 'av';
diacriticsMap[0xA73D] = 'ay';
diacriticsMap[0x0062] = 'b';
diacriticsMap[0x24D1] = 'b';
diacriticsMap[0xFF42] = 'b';
diacriticsMap[0x1E03] = 'b';
diacriticsMap[0x1E05] = 'b';
diacriticsMap[0x1E07] = 'b';
diacriticsMap[0x0180] = 'b';
diacriticsMap[0x0183] = 'b';
diacriticsMap[0x0253] = 'b';
diacriticsMap[0x0063] = 'c';
diacriticsMap[0x24D2] = 'c';
diacriticsMap[0xFF43] = 'c';
diacriticsMap[0x0107] = 'c';
diacriticsMap[0x0109] = 'c';
diacriticsMap[0x010B] = 'c';
diacriticsMap[0x010D] = 'c';
diacriticsMap[0x00E7] = 'c';
diacriticsMap[0x1E09] = 'c';
diacriticsMap[0x0188] = 'c';
diacriticsMap[0x023C] = 'c';
diacriticsMap[0xA73F] = 'c';
diacriticsMap[0x2184] = 'c';
diacriticsMap[0x0064] = 'd';
diacriticsMap[0x24D3] = 'd';
diacriticsMap[0xFF44] = 'd';
diacriticsMap[0x1E0B] = 'd';
diacriticsMap[0x010F] = 'd';
diacriticsMap[0x1E0D] = 'd';
diacriticsMap[0x1E11] = 'd';
diacriticsMap[0x1E13] = 'd';
diacriticsMap[0x1E0F] = 'd';
diacriticsMap[0x0111] = 'd';
diacriticsMap[0x018C] = 'd';
diacriticsMap[0x0256] = 'd';
diacriticsMap[0x0257] = 'd';
diacriticsMap[0xA77A] = 'd';
diacriticsMap[0x01F3] = 'dz';
diacriticsMap[0x01C6] = 'dz';
diacriticsMap[0x0065] = 'e';
diacriticsMap[0x24D4] = 'e';
diacriticsMap[0xFF45] = 'e';
diacriticsMap[0x00E8] = 'e';
diacriticsMap[0x00E9] = 'e';
diacriticsMap[0x00EA] = 'e';
diacriticsMap[0x1EC1] = 'e';
diacriticsMap[0x1EBF] = 'e';
diacriticsMap[0x1EC5] = 'e';
diacriticsMap[0x1EC3] = 'e';
diacriticsMap[0x1EBD] = 'e';
diacriticsMap[0x0113] = 'e';
diacriticsMap[0x1E15] = 'e';
diacriticsMap[0x1E17] = 'e';
diacriticsMap[0x0115] = 'e';
diacriticsMap[0x0117] = 'e';
diacriticsMap[0x00EB] = 'e';
diacriticsMap[0x1EBB] = 'e';
diacriticsMap[0x011B] = 'e';
diacriticsMap[0x0205] = 'e';
diacriticsMap[0x0207] = 'e';
diacriticsMap[0x1EB9] = 'e';
diacriticsMap[0x1EC7] = 'e';
diacriticsMap[0x0229] = 'e';
diacriticsMap[0x1E1D] = 'e';
diacriticsMap[0x0119] = 'e';
diacriticsMap[0x1E19] = 'e';
diacriticsMap[0x1E1B] = 'e';
diacriticsMap[0x0247] = 'e';
diacriticsMap[0x025B] = 'e';
diacriticsMap[0x01DD] = 'e';
diacriticsMap[0x0066] = 'f';
diacriticsMap[0x24D5] = 'f';
diacriticsMap[0xFF46] = 'f';
diacriticsMap[0x1E1F] = 'f';
diacriticsMap[0x0192] = 'f';
diacriticsMap[0xA77C] = 'f';
diacriticsMap[0x0067] = 'g';
diacriticsMap[0x24D6] = 'g';
diacriticsMap[0xFF47] = 'g';
diacriticsMap[0x01F5] = 'g';
diacriticsMap[0x011D] = 'g';
diacriticsMap[0x1E21] = 'g';
diacriticsMap[0x011F] = 'g';
diacriticsMap[0x0121] = 'g';
diacriticsMap[0x01E7] = 'g';
diacriticsMap[0x0123] = 'g';
diacriticsMap[0x01E5] = 'g';
diacriticsMap[0x0260] = 'g';
diacriticsMap[0xA7A1] = 'g';
diacriticsMap[0x1D79] = 'g';
diacriticsMap[0xA77F] = 'g';
diacriticsMap[0x0068] = 'h';
diacriticsMap[0x24D7] = 'h';
diacriticsMap[0xFF48] = 'h';
diacriticsMap[0x0125] = 'h';
diacriticsMap[0x1E23] = 'h';
diacriticsMap[0x1E27] = 'h';
diacriticsMap[0x021F] = 'h';
diacriticsMap[0x1E25] = 'h';
diacriticsMap[0x1E29] = 'h';
diacriticsMap[0x1E2B] = 'h';
diacriticsMap[0x1E96] = 'h';
diacriticsMap[0x0127] = 'h';
diacriticsMap[0x2C68] = 'h';
diacriticsMap[0x2C76] = 'h';
diacriticsMap[0x0265] = 'h';
diacriticsMap[0x0195] = 'hv';
diacriticsMap[0x0069] = 'i';
diacriticsMap[0x24D8] = 'i';
diacriticsMap[0xFF49] = 'i';
diacriticsMap[0x00EC] = 'i';
diacriticsMap[0x00ED] = 'i';
diacriticsMap[0x00EE] = 'i';
diacriticsMap[0x0129] = 'i';
diacriticsMap[0x012B] = 'i';
diacriticsMap[0x012D] = 'i';
diacriticsMap[0x00EF] = 'i';
diacriticsMap[0x1E2F] = 'i';
diacriticsMap[0x1EC9] = 'i';
diacriticsMap[0x01D0] = 'i';
diacriticsMap[0x0209] = 'i';
diacriticsMap[0x020B] = 'i';
diacriticsMap[0x1ECB] = 'i';
diacriticsMap[0x012F] = 'i';
diacriticsMap[0x1E2D] = 'i';
diacriticsMap[0x0268] = 'i';
diacriticsMap[0x0131] = 'i';
diacriticsMap[0x006A] = 'j';
diacriticsMap[0x24D9] = 'j';
diacriticsMap[0xFF4A] = 'j';
diacriticsMap[0x0135] = 'j';
diacriticsMap[0x01F0] = 'j';
diacriticsMap[0x0249] = 'j';
diacriticsMap[0x006B] = 'k';
diacriticsMap[0x24DA] = 'k';
diacriticsMap[0xFF4B] = 'k';
diacriticsMap[0x1E31] = 'k';
diacriticsMap[0x01E9] = 'k';
diacriticsMap[0x1E33] = 'k';
diacriticsMap[0x0137] = 'k';
diacriticsMap[0x1E35] = 'k';
diacriticsMap[0x0199] = 'k';
diacriticsMap[0x2C6A] = 'k';
diacriticsMap[0xA741] = 'k';
diacriticsMap[0xA743] = 'k';
diacriticsMap[0xA745] = 'k';
diacriticsMap[0xA7A3] = 'k';
diacriticsMap[0x006C] = 'l';
diacriticsMap[0x24DB] = 'l';
diacriticsMap[0xFF4C] = 'l';
diacriticsMap[0x0140] = 'l';
diacriticsMap[0x013A] = 'l';
diacriticsMap[0x013E] = 'l';
diacriticsMap[0x1E37] = 'l';
diacriticsMap[0x1E39] = 'l';
diacriticsMap[0x013C] = 'l';
diacriticsMap[0x1E3D] = 'l';
diacriticsMap[0x1E3B] = 'l';
diacriticsMap[0x017F] = 'l';
diacriticsMap[0x0142] = 'l';
diacriticsMap[0x019A] = 'l';
diacriticsMap[0x026B] = 'l';
diacriticsMap[0x2C61] = 'l';
diacriticsMap[0xA749] = 'l';
diacriticsMap[0xA781] = 'l';
diacriticsMap[0xA747] = 'l';
diacriticsMap[0x01C9] = 'lj';
diacriticsMap[0x006D] = 'm';
diacriticsMap[0x24DC] = 'm';
diacriticsMap[0xFF4D] = 'm';
diacriticsMap[0x1E3F] = 'm';
diacriticsMap[0x1E41] = 'm';
diacriticsMap[0x1E43] = 'm';
diacriticsMap[0x0271] = 'm';
diacriticsMap[0x026F] = 'm';
diacriticsMap[0x006E] = 'n';
diacriticsMap[0x24DD] = 'n';
diacriticsMap[0xFF4E] = 'n';
diacriticsMap[0x01F9] = 'n';
diacriticsMap[0x0144] = 'n';
diacriticsMap[0x00F1] = 'n';
diacriticsMap[0x1E45] = 'n';
diacriticsMap[0x0148] = 'n';
diacriticsMap[0x1E47] = 'n';
diacriticsMap[0x0146] = 'n';
diacriticsMap[0x1E4B] = 'n';
diacriticsMap[0x1E49] = 'n';
diacriticsMap[0x019E] = 'n';
diacriticsMap[0x0272] = 'n';
diacriticsMap[0x0149] = 'n';
diacriticsMap[0xA791] = 'n';
diacriticsMap[0xA7A5] = 'n';
diacriticsMap[0x01CC] = 'nj';
diacriticsMap[0x006F] = 'o';
diacriticsMap[0x24DE] = 'o';
diacriticsMap[0xFF4F] = 'o';
diacriticsMap[0x00F2] = 'o';
diacriticsMap[0x00F3] = 'o';
diacriticsMap[0x00F4] = 'o';
diacriticsMap[0x1ED3] = 'o';
diacriticsMap[0x1ED1] = 'o';
diacriticsMap[0x1ED7] = 'o';
diacriticsMap[0x1ED5] = 'o';
diacriticsMap[0x00F5] = 'o';
diacriticsMap[0x1E4D] = 'o';
diacriticsMap[0x022D] = 'o';
diacriticsMap[0x1E4F] = 'o';
diacriticsMap[0x014D] = 'o';
diacriticsMap[0x1E51] = 'o';
diacriticsMap[0x1E53] = 'o';
diacriticsMap[0x014F] = 'o';
diacriticsMap[0x022F] = 'o';
diacriticsMap[0x0231] = 'o';
diacriticsMap[0x00F6] = 'o';
diacriticsMap[0x022B] = 'o';
diacriticsMap[0x1ECF] = 'o';
diacriticsMap[0x0151] = 'o';
diacriticsMap[0x01D2] = 'o';
diacriticsMap[0x020D] = 'o';
diacriticsMap[0x020F] = 'o';
diacriticsMap[0x01A1] = 'o';
diacriticsMap[0x1EDD] = 'o';
diacriticsMap[0x1EDB] = 'o';
diacriticsMap[0x1EE1] = 'o';
diacriticsMap[0x1EDF] = 'o';
diacriticsMap[0x1EE3] = 'o';
diacriticsMap[0x1ECD] = 'o';
diacriticsMap[0x1ED9] = 'o';
diacriticsMap[0x01EB] = 'o';
diacriticsMap[0x01ED] = 'o';
diacriticsMap[0x00F8] = 'o';
diacriticsMap[0x01FF] = 'o';
diacriticsMap[0x0254] = 'o';
diacriticsMap[0xA74B] = 'o';
diacriticsMap[0xA74D] = 'o';
diacriticsMap[0x0275] = 'o';
diacriticsMap[0x01A3] = 'oi';
diacriticsMap[0x0223] = 'ou';
diacriticsMap[0xA74F] = 'oo';
diacriticsMap[0x0070] = 'p';
diacriticsMap[0x24DF] = 'p';
diacriticsMap[0xFF50] = 'p';
diacriticsMap[0x1E55] = 'p';
diacriticsMap[0x1E57] = 'p';
diacriticsMap[0x01A5] = 'p';
diacriticsMap[0x1D7D] = 'p';
diacriticsMap[0xA751] = 'p';
diacriticsMap[0xA753] = 'p';
diacriticsMap[0xA755] = 'p';
diacriticsMap[0x0071] = 'q';
diacriticsMap[0x24E0] = 'q';
diacriticsMap[0xFF51] = 'q';
diacriticsMap[0x024B] = 'q';
diacriticsMap[0xA757] = 'q';
diacriticsMap[0xA759] = 'q';
diacriticsMap[0x0072] = 'r';
diacriticsMap[0x24E1] = 'r';
diacriticsMap[0xFF52] = 'r';
diacriticsMap[0x0155] = 'r';
diacriticsMap[0x1E59] = 'r';
diacriticsMap[0x0159] = 'r';
diacriticsMap[0x0211] = 'r';
diacriticsMap[0x0213] = 'r';
diacriticsMap[0x1E5B] = 'r';
diacriticsMap[0x1E5D] = 'r';
diacriticsMap[0x0157] = 'r';
diacriticsMap[0x1E5F] = 'r';
diacriticsMap[0x024D] = 'r';
diacriticsMap[0x027D] = 'r';
diacriticsMap[0xA75B] = 'r';
diacriticsMap[0xA7A7] = 'r';
diacriticsMap[0xA783] = 'r';
diacriticsMap[0x0073] = 's';
diacriticsMap[0x24E2] = 's';
diacriticsMap[0xFF53] = 's';
diacriticsMap[0x015B] = 's';
diacriticsMap[0x1E65] = 's';
diacriticsMap[0x015D] = 's';
diacriticsMap[0x1E61] = 's';
diacriticsMap[0x0161] = 's';
diacriticsMap[0x1E67] = 's';
diacriticsMap[0x1E63] = 's';
diacriticsMap[0x1E69] = 's';
diacriticsMap[0x0219] = 's';
diacriticsMap[0x015F] = 's';
diacriticsMap[0x023F] = 's';
diacriticsMap[0xA7A9] = 's';
diacriticsMap[0xA785] = 's';
diacriticsMap[0x1E9B] = 's';
diacriticsMap[0x00DF] = 'ss';
diacriticsMap[0x0074] = 't';
diacriticsMap[0x24E3] = 't';
diacriticsMap[0xFF54] = 't';
diacriticsMap[0x1E6B] = 't';
diacriticsMap[0x1E97] = 't';
diacriticsMap[0x0165] = 't';
diacriticsMap[0x1E6D] = 't';
diacriticsMap[0x021B] = 't';
diacriticsMap[0x0163] = 't';
diacriticsMap[0x1E71] = 't';
diacriticsMap[0x1E6F] = 't';
diacriticsMap[0x0167] = 't';
diacriticsMap[0x01AD] = 't';
diacriticsMap[0x0288] = 't';
diacriticsMap[0x2C66] = 't';
diacriticsMap[0xA787] = 't';
diacriticsMap[0xA729] = 'tz';
diacriticsMap[0x0075] = 'u';
diacriticsMap[0x24E4] = 'u';
diacriticsMap[0xFF55] = 'u';
diacriticsMap[0x00F9] = 'u';
diacriticsMap[0x00FA] = 'u';
diacriticsMap[0x00FB] = 'u';
diacriticsMap[0x0169] = 'u';
diacriticsMap[0x1E79] = 'u';
diacriticsMap[0x016B] = 'u';
diacriticsMap[0x1E7B] = 'u';
diacriticsMap[0x016D] = 'u';
diacriticsMap[0x00FC] = 'u';
diacriticsMap[0x01DC] = 'u';
diacriticsMap[0x01D8] = 'u';
diacriticsMap[0x01D6] = 'u';
diacriticsMap[0x01DA] = 'u';
diacriticsMap[0x1EE7] = 'u';
diacriticsMap[0x016F] = 'u';
diacriticsMap[0x0171] = 'u';
diacriticsMap[0x01D4] = 'u';
diacriticsMap[0x0215] = 'u';
diacriticsMap[0x0217] = 'u';
diacriticsMap[0x01B0] = 'u';
diacriticsMap[0x1EEB] = 'u';
diacriticsMap[0x1EE9] = 'u';
diacriticsMap[0x1EEF] = 'u';
diacriticsMap[0x1EED] = 'u';
diacriticsMap[0x1EF1] = 'u';
diacriticsMap[0x1EE5] = 'u';
diacriticsMap[0x1E73] = 'u';
diacriticsMap[0x0173] = 'u';
diacriticsMap[0x1E77] = 'u';
diacriticsMap[0x1E75] = 'u';
diacriticsMap[0x0289] = 'u';
diacriticsMap[0x0076] = 'v';
diacriticsMap[0x24E5] = 'v';
diacriticsMap[0xFF56] = 'v';
diacriticsMap[0x1E7D] = 'v';
diacriticsMap[0x1E7F] = 'v';
diacriticsMap[0x028B] = 'v';
diacriticsMap[0xA75F] = 'v';
diacriticsMap[0x028C] = 'v';
diacriticsMap[0xA761] = 'vy';
diacriticsMap[0x0077] = 'w';
diacriticsMap[0x24E6] = 'w';
diacriticsMap[0xFF57] = 'w';
diacriticsMap[0x1E81] = 'w';
diacriticsMap[0x1E83] = 'w';
diacriticsMap[0x0175] = 'w';
diacriticsMap[0x1E87] = 'w';
diacriticsMap[0x1E85] = 'w';
diacriticsMap[0x1E98] = 'w';
diacriticsMap[0x1E89] = 'w';
diacriticsMap[0x2C73] = 'w';
diacriticsMap[0x0078] = 'x';
diacriticsMap[0x24E7] = 'x';
diacriticsMap[0xFF58] = 'x';
diacriticsMap[0x1E8B] = 'x';
diacriticsMap[0x1E8D] = 'x';
diacriticsMap[0x0079] = 'y';
diacriticsMap[0x24E8] = 'y';
diacriticsMap[0xFF59] = 'y';
diacriticsMap[0x1EF3] = 'y';
diacriticsMap[0x00FD] = 'y';
diacriticsMap[0x0177] = 'y';
diacriticsMap[0x1EF9] = 'y';
diacriticsMap[0x0233] = 'y';
diacriticsMap[0x1E8F] = 'y';
diacriticsMap[0x00FF] = 'y';
diacriticsMap[0x1EF7] = 'y';
diacriticsMap[0x1E99] = 'y';
diacriticsMap[0x1EF5] = 'y';
diacriticsMap[0x01B4] = 'y';
diacriticsMap[0x024F] = 'y';
diacriticsMap[0x1EFF] = 'y';
diacriticsMap[0x007A] = 'z';
diacriticsMap[0x24E9] = 'z';
diacriticsMap[0xFF5A] = 'z';
diacriticsMap[0x017A] = 'z';
diacriticsMap[0x1E91] = 'z';
diacriticsMap[0x017C] = 'z';
diacriticsMap[0x017E] = 'z';
diacriticsMap[0x1E93] = 'z';
diacriticsMap[0x1E95] = 'z';
diacriticsMap[0x01B6] = 'z';
diacriticsMap[0x0225] = 'z';
diacriticsMap[0x0240] = 'z';
diacriticsMap[0x2C6C] = 'z';
diacriticsMap[0xA763] = 'z';

/**
 * Normalize a string to remove accents. Then, the normalize version will be used to make the comparison.
 * function convert to lowercase. *
 * @param {string} texte The string to normalize
 * @return {string} The string in lowercase with accent characters replace by non-accent one.
 */
export function normalizeString(str: string): string {
    let result: string = '';
    let val: string = str.toString(); // In case 'str' is a numeric value
    for (let i: number = 0; i < val.length; ++i) {
        // Passer chaque cles et remplacer dans la chaine
        let converted: string = diacriticsMap[val.charAt(i).toLowerCase().charCodeAt(0)];
        result += converted ? converted : val.charAt(i);
    }

    return result;
}

export const NBSP: string = '\xa0';

export { sprintf, vsprintf } from 'sprintf-js';

