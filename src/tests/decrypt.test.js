import { decrypt } from '../modules/decrypt.js'
import { decryption_tests as de } from '../test_cases/test_cases.js';

const { test1, test2, test3 } = de;

// <-- TESTS -->
test('decrypts ' + test1.text, () => {
    expect(decrypt(test1.text, test1.shift, test1.indexes)).toStrictEqual(test1.result);
});
test('decrypts ' + test2.text, () => {
    expect(decrypt(test2.text, test2.shift, test2.indexes)).toStrictEqual(test2.result);
});
test('decrypts ' + test3.text, () => {
    expect(decrypt(test3.text, test3.shift)).toStrictEqual(test3.result);
});