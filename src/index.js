// Import all functions Individually
import { encrypt } from './modules/encrypt.js';
import { encryptRandom } from './modules/encrypt.js';
import { encryptRandomMultiShift } from './modules/encrypt.js';

import { decrypt } from './modules/decrypt.js';
import { getRandomShift } from './modules/cipher.js';
import { getRandomMultiShift } from './modules/cipher.js';
import { checkForEmptyShift } from './modules/cipher.js';
import { shiftLetter } from './modules/cipher.js';
import { isLetter } from './modules/cipher.js';
import { isNegative } from './modules/cipher.js';

// Export All Functions Individually
export { encrypt } from './modules/encrypt.js';
export { decrypt } from './modules/decrypt.js';
export { getRandomShift } from './modules/cipher.js';
export { getRandomMultiShift } from './modules/cipher.js';
export { checkForEmptyShift } from './modules/cipher.js';
export { isLetter } from './modules/cipher.js';
export { isNegative } from './modules/cipher.js';

// Bundle all functions into 'Cipher' - Global Export
export const Cipher = { 
    Encryption: Encryption,
    encrypt: encrypt, 
    decrypt: decrypt,
    getRandomShift: getRandomShift,
    getRandomMultiShift: getRandomMultiShift,
    checkForEmptyShift: checkForEmptyShift,
    shiftLetter: shiftLetter,
    isLetter: isLetter,
    isNegative: isNegative
};

// Encryption Package
export const Encryption = {
    encrypt: encrypt,
    encryptRandom: encryptRandom, // depends on encrypt
    encryptRandomMultiShift: encryptRandomMultiShift // depends on encrypt
}
