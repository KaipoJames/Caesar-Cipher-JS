# Caesar-Cipher-Js
 - A JavaScript Library that allows you to encrypt and/or decrypt your messages, passwords, and other texts. Securely send your data using the algorithms of caeser-cipher-js.

![npm](https://img.shields.io/npm/v/caeser-cipher-js?style=for-the-badge)

Learn more about [Caesar Ciphers](https://www.sciencedirect.com/topics/computer-science/caesar-cipher).
  
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

## Encrypting Numbers
 - Caesar-Cipher-JS is smart enough to recognize and encrypt numbers automatically.
    ```js
      console.log(encrypt("My Address Number Changed from 432 to 434", -3));
      // OUTPUT: {msg: "JV XAAOBPP KRJYBO ZEXKDBA COLJ EDC QL EDE", numIndexes: [31, 32, 33, 38, 39, 40], shift: -3}
    ```
 - numIndexes is an array of indexes keeping track of the positions of all the numbers in the message.
 - To decrypt the numbers, pass in the array of indexes as the third parameter, and the reverse-shift as normal.
    ```js
      console.log(decrypt("JV XAAOBPP KRJYBO ZEXKDBA COLJ EDC QL EDE", 3, [31, 32, 33, 38, 39, 40]))
      // OUTPUT: {msg: "MY ADDRESS NUMBER CHANGED FROM 432 TO 434", shift: 3}
    ```

## Other Available Methods
 - In version 1.2.1, various other methods are now accesible for you to import into yoru project.
 - They are small methods which might be useful incase you are implementing your own methods.
 -  New methods added:
    - getRandomShift() returns a random shift.
    - checkForEmptyShift(shift, text) returns text if there is no shift.
    - shiftLetter(letter, shift) returns the next letter and the next position of the letter
    - isLetter(input) returns true if input is a letter, otherwise returns false.
    - isNegative(input) returns true if input is a negative number, else: false.

## Running Tests
 - run ``` npm install ``` to install project dependencies.
 - run ``` npm run test ``` to execute all tests.

## Version History
 - v1.1.1: Added Support for Multi-Shift Key.
 - v1.1.2: Added Functionality to perform 'Brute Force' while decrypting.
 - v1.1.3: Refactored codebase and optimized performance.
 - v1.1.4: 
   - Removed unused functions that were being exported from cipher.js
   - Updated README 'Version History' and 'Contributing' sections
   - Shortened various functions in modules folder.
 - v1.1.5:
   - Added Unit Testing(JEST) for encrypt() and decrypt() methods
   - Command to Start Tests: npm run test
 - v1.1.51:
   - Adds an updated README when you use this version.
 - v1.2.0:
   - Major Update. (Number Encryption)
   - All encryptions/decryptions now return an object with 2 - 3 properties. The shift used is always returned.
   - Added support for encrypting numbers
     - If numbers are in an encryption string, an array of number index position is created and returned in the result
     - Numbers are encrypted into letters for better security as the position of the numbers is unrecognizable to an outside eye.
     - In decryption, the array of indexes is needed to find the position of the numbers to turn them back into numbers.
   - Updated All Unit Tests to match new format.
   - Added 1 Unit test for 'BRUTE FORCE' decryption.
   - Added 'Encrypting Numbers' section to README.
   - Added 'Future Works' Section to README.
   - Edited the 'Contributing' section of README.
 - v1.2.1:
   - Exported various functions from cipher.js to index.js
   - These functions can now be imported individually or altogether using the global Cipher module.
   - Documentation is not updated for this version. See nect patch version for docs.
 - v1.2.2:
   - Updated README with info about the new methods you can use with Caesar-Cipher-JS.

## Documentation
 - All Documentation for this Package currently lives in this file alone. See the 'Getting Started' section. That should be all you need to get going with this package since it is a fairly new package.

## Future Works
  - Provide users with the option to have the shift and/or number indexes returned with the encoded/decoded message.
  - Add support for other encryption algorithms besides the current substitution ones.
  - Move the 'Version History' section to its own file called 'CHANGELOG.md'.
  - Move All Documentation about features into its own file. 
  - Create Documentation explaining technical features, code architecture of the project, and other code-based information.

## Contributing
 - I would love if you would like to contribute to the project! Feel free to fork this repo and propose your changes!
 - Any great ideas about adding new encryption algorithms are greatly encouraged! 
 - See the 'Future Works' section above for some ideas.

## Author
 - Kaipo Wilmeth

## Copyright and License
 - [MIT License](LICENSE.txt)

