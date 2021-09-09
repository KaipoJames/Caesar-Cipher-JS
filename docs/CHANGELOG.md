# Changelog

## 1.x

#### Releases

- 1.1.1:
  - Add Support for Multi-Shift-Key
- 1.2.1:
  - Add An option to perform 'Brute Force' while decrypting.
- 1.1.3: 
  - Refactor codebase and optimized performance.
- v1.1.4: 
  - Remove unused functions that were being exported from cipher.js
  - Update README 'Version History' and 'Contributing' sections
  - Shorten various functions in modules folder.
- v1.1.5:
   - Add Unit Testing(JEST) for encrypt() and decrypt() methods
   - Command to Start Tests: npm run test
- v1.2.0:
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
- v1.2.2:
   - Updated README with info about the new methods you can use with Caesar-Cipher-JS.

## 2.x

### Releases

- 2.0.0
  - Added getRandomMultiShift(length) - Length refers to the number of shifts you want.
    - ex. getRandomMultiShift(5) returns a string with 5 random numbers between 0 and 26 separated by a comma.
  - Added two new encrypt methods
    - encryptRandom(text) - encrypts text with a randomshift. // dependent on encrypt()
    - encryptRandomMultiShift(text, length) - encrypts text with random multi-shift // dependent on encrypt()
  - Added an Encryption Module which incluse encrypt, encryptRandom, and encryptRandomMultiShift. User can import the Encryption module and gain access to these three methods.
  - Put all test cases into their own file under src/test_cases.
  - Added encryptMany(texts, shifts).
      - Pass in an array of strings of all messages you want to encrypt.
      - Pass in one number for shifts if you want to use the same shift for each message or an array
          of integers to specify which shift you want to use for a specific message.
      - Works with multi-shifts. 
      - Added tests for encryptMany
  - Move test cases into the test folder since tests are not being used anywhere else except in tests scope.
  - Add encryptShowMessageOnly(text, shift) which only returns the message and leaves out the shift and number indexes.
  - Combine a few tests to reduce some complexity and improve test organization.
  - Add 'exports' property to package.json to allow for importing of separate modules(encrypt/decrypt/email).
    - import { Cipher } from 'caeser-cipher-js';
    - import Encrypter from 'caeser-cipher-js/encrypt';
    - import Decrypter from 'caeser-cipher-js/decrypt';
    - import Mailer from 'caeser-cipher-js/email';
  - Implement the decryptShowMessageOnly() method. Tests pass.
  - Implement Email Sending with Nodemailer! Only work with gmail if less-secure apps is enabled
    - To avoid this, next step is to set up email sending with Oauth2!
  - Able to send emails to gmail via nodemailer and gmail API with OAuth2. To use set up OAuth2, the user must perform these steps after running npm install.
         1) Go to https://dev.to/chandrapantachhetri/sending-emails-securely-using-node-js-nodemailer-smtp-gmail-and-oauth2-g3a. Follow steps 1-3 carefully. You will set up your OAuth Credentials using the Gmail API. Make sure sure save them in a safe place for later. You will need the CLIENT_ID, CLIENT_SECRET, and REFRESH_TOKEN.
         2) Do not do anything in step 4. All of the code work has been done for you. 
         3) create a .env file in the project's root directory
         4) Paste in this code and substitue in the values with your gmail and OAuth2 info:  
                     EMAIL=YOUR_GOOGLE_EMAIL_HERE
                     REFRESH_TOKEN=PASTE_REFRESH_TOKEN_HERE
                     CLIENT_SECRET=PASTE_CLIENT_SECRET_HERE
                     CLIENT_ID=PASTE_CLIENT_ID_HERE   
         5) Finished! You can now send messages to gmail accounts!
          - If you encounter something you can't solve, feel free to contact me. 