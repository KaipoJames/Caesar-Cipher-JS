// Import all functions Individually
import Encrypter, { encrypt } from './modules/encrypt.js';
import Decrypter, { decrypt } from './modules/decrypt.js';
import { getRandomShift } from './modules/cipher.js';
import { getRandomMultiShift } from './modules/cipher.js';
import { checkForEmptyShift } from './modules/cipher.js';
import { shiftLetter } from './modules/cipher.js';
import { isLetter } from './modules/cipher.js';
import { isNegative } from './modules/cipher.js';

// Bundle all functions into 'Cipher' - Global Export Object
export const Cipher = { 
    Encrypter: Encrypter,
    Decrypter: Decrypter,
    encrypt: encrypt,
    decrypt: decrypt,
    getRandomShift: getRandomShift,
    getRandomMultiShift: getRandomMultiShift,
    checkForEmptyShift: checkForEmptyShift,
    shiftLetter: shiftLetter,
    isLetter: isLetter,
    isNegative: isNegative
};

// Export All Functions Individually
export { encrypt } from './modules/encrypt.js';
export { decrypt } from './modules/decrypt.js';
export { getRandomShift } from './modules/cipher.js';
export { getRandomMultiShift } from './modules/cipher.js';
export { checkForEmptyShift } from './modules/cipher.js';
export { isLetter } from './modules/cipher.js';
export { isNegative } from './modules/cipher.js';