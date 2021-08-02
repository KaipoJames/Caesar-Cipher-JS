# Caesar-Cipher-Js
 - A JavaScript Library that allows you to encrypt and/or decrypt your messages, passwords, and other texts. Securely send your data using the algorithms of caeser-cipher-js.

![npm](https://img.shields.io/npm/v/caeser-cipher-js?style=for-the-badge)
  
## Installation
 - Install with [npm](https://www.npmjs.com/): ``` npm install caeser-cipher-js ```
 - Clone the repo: ``` git clone git@github.com:KaipoJames/Caesar-Cipher-Encrypt-And-Decrypt.git ```

## Getting Started

 - Once you have installed Caesar-Cipher-Js, import it using the following command:
  ```js
  import { Caesar } from "caeser-cipher-js/index.js"; 
  ```
 - To use the Cipher functions you can call 'encrypt' or 'decrypt'.
    ``` js
    const message = Caesar.encrypt("This message will be encrypted.", 4);

    //OUTPUT: XLMW QIWWEKI AMPP FI IRGVCTXIH.
    ```
   - The value of the message variable is encrypted with a shift 4 key.
  
 - To decrypt, pass in the decrypted message and the reverse-shift.
    ``` js
    const message = Caesar.decrypt("XLMW QIWWEKI AMPP FI IRGVCTXIH.", -4); 

    // OUTPUT: THIS MESSAGE WILL BE ENCRYPTED
    ```

 - Alternatively, you can install only the modules that you need.

   ```js
   import { encrypt } from 'caeser-cipher-js/src/encrypt.js'
   
   const password = encrypt('myPasswordHere', -6);
   ```

## What's Included
    Currently, libraries for encrypting and decrypting and supported using a single key encryption.

## Documentation
 - All Documentation for this Package currently lives in this file alone. See the 'Getting Started' section. That should be all you need to get going with this package since it is a fairly new package.

## Contributing
 - coming soon...

## Author
 - Kaipo Wilmeth(KaipoJames)

## Copyright and License
 - [MIT License](LICENSE.txt)

