import { encrypt } from './modules/encrypt.js';
import { decrypt } from './modules/decrypt.js';

export { encrypt } from './modules/encrypt.js';
export { decrypt } from './modules/decrypt.js';

export const Cipher = { 
    encrypt: encrypt, 
    decrypt: decrypt
};
