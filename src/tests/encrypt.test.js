import { encrypt, encryptRandom, encryptRandomMultiShift } from '../modules/encrypt.js';
import { encryption_tests as en } from '../test_cases/test_cases.js'

const { test1, test2, test3, random } = en;
const { singleShift, multiShift } = random;

// <-- TESTS -->
test('encrypts ' + test1.text, () => {
    expect(encrypt(test1.text, test1.shift)).toStrictEqual(test1.result);
});
test('encrypts ' + test2.text, () => {
    expect(encrypt(test2.text, test2.shift)).toStrictEqual(test2.result);
});
test('encrypts ' + test3.text, () => {
    encryptRandom(singleShift.text);
});
test('encrypts ' + test3.text, () => {
    encryptRandomMultiShift(multiShift.text, multiShift.length);
});