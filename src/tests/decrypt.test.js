import { decrypt } from '../modules/decrypt.js'

// <-- OBJECTS -->
const msg1 = {
    msg: "KQTBJWX FWJ UWJYYD",
    key: -5
};
const msg2 = {
    msg: "JV XAAOBPP KRJYBO ZEXKDBA COLJ 432 QL 434",
    key: 3
};
const msg3 = {
    msg: "OKHV SH YNHTK WJK VWT VGZV",
    key: '-2, -6, -3'
};

// <-- TESTS -->
test('encrypts ' + msg1.msg, () => {
    expect(decrypt(msg1.msg, msg1.key)).toBe("FLOWERS ARE PRETTY");
});
test('encrypts ' + msg2.msg, () => {
    expect(decrypt(msg2.msg, msg2.key)).toBe("MY ADDRESS NUMBER CHANGED FROM 432 TO 434");
});
test('encrypts ' + msg3.msg, () => {
    expect(decrypt(msg3.msg, msg3.key)).toBe("MEET ME WHERE THE SUN SETS");
});