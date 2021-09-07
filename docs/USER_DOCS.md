# CAESER_CIPHER_JS USER Documentation

This Document contains all relevant information for anyone interested for the sole purpose of using this package. 
(HOW-TO's)

If you have not yet read the 'Getting Started' section of the [README](../README.md), please do so before continuing.

## Installation
 - Install with [npm](https://www.npmjs.com/): ``` npm install caeser-cipher-js ```
 - Clone the repo: ``` git clone git@github.com:KaipoJames/Caesar-Cipher-Encrypt-And-Decrypt.git ```
 - Download Project as [ZIP-FILE](https://github.com/KaipoJames/Caesar-Cipher-JS/archive/refs/heads/master.zip)

## Getting Started

 - Once you have installed Caesar-Cipher-Js, import it using the following command:
  ```js
  import { Cipher } from "caeser-cipher-js"; 
  ```
 - To use the Cipher functions you can call 'encrypt' or 'decrypt'.
    ``` js
    const textToEncrypt = "This message will be encrypted.";
    const shift = 4;
    const message = Cipher.encrypt(textToEncrypt, shift);
    // OUTPUT: XLMW QIWWEKI AMPP FI IRGVCTXIH.
    ```
   - The value of the message variable is encrypted with a shift 4 key.
  
 - To decrypt, pass in the decrypted message and the reverse-shift.
    ``` js
    const message = Cipher.decrypt("XLMW QIWWEKI AMPP FI IRGVCTXIH.", -4); 
    // OUTPUT: THIS MESSAGE WILL BE ENCRYPTED
    ```

 - Alternatively, you can install only the modules that you need.
   ```js
   import { encrypt } from 'caeser-cipher-js'
   
   const password = encrypt('myPasswordHere', -6);
   ```

### Multi-Shift Keys
 - You can also pass a multi-shift key for a more secure encryption.
 - NOTE: numbers in a multi-shift key must be separated by commas to work.
   ```js
   console.log(encrypt("Don't Forget To Make Sure The Passwords are encrypted!", '3,8,9'));
   // OUTPUT: GWW'W NXUONW BX PITH ADUM CKM YDABZWAGA JUM NQKABXCHL!

   // Knowing the multi-shift key, pass in the opposite sign used in the encryption.
   console.log(decrypt("GWW'W NXUONW BX PITH ADUM CKM YDABZWAGA JUM NQKABXCHL!", '-3,-8,-9'));
   // OUTPUT: Don't Forget To Make Sure The Passwords are encrypted!
   ```

### Brute Force Attack(decryption)
  - For single shifts, you can use a 'brute-force' attack if you don't know the shift number
    ```js
      console.log(decrypt("RD XJHZWJ RJXXFLJ", 'BRUTE FORCE'));
      // This will output all possible combinations from shift 0-25.
    ```
    Learn more about what a [Brute Force Attack](https://www.kaspersky.com/resource-center/definitions/brute-force-attack) is.

## Emailing Data 
  - If interested in using the email functions, there are additional set-up instructions for you to follow.
  - If using GMAIL, Follow [This Article](https://dev.to/chandrapantachhetri/sending-emails-securely-using-node-js-nodemailer-smtp-gmail-and-oauth2-g3a) to set up an Gmail OAuth2 App.
  - 