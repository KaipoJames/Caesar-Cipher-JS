import { 
    encrypt, 
    encryptRandom, 
    encryptRandomMultiShift ,
    encryptMany
} from '../modules/encrypt.js';
import { encryption_tests as en } from '../test_cases/test_cases.js'

const { test1, test2, random, manyTexts1, manyTexts2, manyTexts3 } = en;
const { singleShift, multiShift } = random;

// <-- TESTS -->

// <- Single-Case ->
test('encrypts ' + test1.text, () => {
    expect(encrypt(test1.text, test1.shift)).toStrictEqual(test1.result);
});
test('encrypts ' + test2.text, () => {
    expect(encrypt(test2.text, test2.shift)).toStrictEqual(test2.result);
});
test('Random Single Shift', () => {
    console.log("Random Single Shift: ");
    console.log(encryptRandom(singleShift.text));
});
test('Random Multi-Shift:', () => {
    console.log("Random Multi-Shift: ");
    console.log(encryptRandomMultiShift(multiShift.text, multiShift.length));
});

// <- Multi-Cases ->
test('encrypts all: ', () => {
    expect(encryptMany(manyTexts1.texts, manyTexts1.shifts)).toStrictEqual(manyTexts1.result);
});
test('encrypts all: ', () => {
    expect(encryptMany(manyTexts2.texts, manyTexts2.shifts)).toStrictEqual(manyTexts2.result);
});
test("Random Encrypt Many", () => {
    console.log("Random Encrypt Many: ");
    console.log(encryptMany(manyTexts3.texts, manyTexts3.shifts));
});