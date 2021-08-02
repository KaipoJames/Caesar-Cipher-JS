import { encrypt } from './src/encrypt.js';
import { decrypt } from './src/decrypt.js';

export { default as encrypt } from './src/encrypt.js';
export { default as decrypt } from './src/decrypt.js';

export const Caesar = { 
    encrypt: encrypt, 
    decrypt: decrypt
};
