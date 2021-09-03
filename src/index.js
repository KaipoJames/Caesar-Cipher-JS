// Import all functions Individually
import { encrypt } from './modules/encrypt.js';
import { decrypt } from './modules/decrypt.js';
import { getRandomShift } from './modules/cipher.js';
import { checkForEmptyShift } from './modules/cipher.js';
import { shiftLetter } from './modules/cipher.js';
import { isLetter } from './modules/cipher.js';
import { isNegative } from './modules/cipher.js';

// Export All Functions Individually
export { encrypt } from './modules/encrypt.js';
export { decrypt } from './modules/decrypt.js';
export { getRandomShift } from './modules/cipher.js';
export { checkForEmptyShift } from './modules/cipher.js';
export { shiftLetter } from './modules/cipher.js';
export { isLetter } from './modules/cipher.js';
export { isNegative } from './modules/cipher.js';

// Bundle all functions into 'Cipher' - Global Export
export const Cipher = { 
    encrypt: encrypt, 
    decrypt: decrypt,
    getRandomShift: getRandomShift,
    checkForEmptyShift: checkForEmptyShift,
    shiftLetter: shiftLetter,
    isLetter: isLetter,
    isNegative: isNegative
};
