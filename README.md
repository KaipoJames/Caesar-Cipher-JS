# Caesar-Cipher-Js
 - A JavaScript Library that allows you to encrypt and/or decrypt your messages, passwords, and other texts. Securely send your data using the algorithms of caeser-cipher-js.

![npm](https://img.shields.io/npm/v/caeser-cipher-js?style=for-the-badge)

Learn more about what is a [Caesar Cipher](https://www.sciencedirect.com/topics/computer-science/caesar-cipher).
  
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
    const message = Cipher.encrypt("This message will be encrypted.", 4);

    //OUTPUT: XLMW QIWWEKI AMPP FI IRGVCTXIH.
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

 - You can also pass a multi-shift key for a more secure encryption.
 - NOTE: numbers in a multi-shift key must be separated by commas to work.
   ```js
   console.log(encrypt("Don't Forget To Make Sure The Passwords are encrypted!", '3,8,9'));

   // OUTPUT: GWW'W NXUONW BX PITH ADUM CKM YDABZWAGA JUM NQKABXCHL!

   // Knowing the multi-shift key, pass in the opposite sign used in the encryption.
   console.log(decrypt("GWW'W NXUONW BX PITH ADUM CKM YDABZWAGA JUM NQKABXCHL!", '-3,-8,-9'));

   // OUTPUT: Don't Forget To Make Sure The Passwords are encrypted!
   ```

  - For single shifts, you can use a 'brute-force' attack if you don't know the shift number
    ```js
      console.log(decrypt("RD XJHZWJ RJXXFLJ", 'BRUTE FORCE'));

      // This will output all possible combinations from shift 0-25.
    ```

## What's Included
 - v1.1.1: Added Support for Mult-Shift Key.
 - v1.1.2: Added Functionality to perform 'Brute Force' while decrypting.
 - v1.1.3: Refactored codebase and optimized performance.

## Documentation
 - All Documentation for this Package currently lives in this file alone. See the 'Getting Started' section. That should be all you need to get going with this package since it is a fairly new package.

## Contributing
 - coming soon...

## Author
 - Kaipo Wilmeth(KaipoJames)

## Copyright and License
 - [MIT License](LICENSE.txt)

