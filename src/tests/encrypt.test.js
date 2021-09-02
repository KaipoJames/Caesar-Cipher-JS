import { encrypt } from '../modules/encrypt.js';

// <-- OBJECTS -->
const msg1 = {
    msg: "Flowers Are Pretty",
    key: 5
};
const msg2 = {
    msg: "My Address Number Changed from 432 to 434",
    key: -3
};
const msg3 = {
    msg: "Meet Me Where The Sun Sets",
    key: '2, 6, 3'
};

// <-- TESTS -->
test('encrypts ' + msg1.msg, () => {
    expect(encrypt(msg1.msg, msg1.key)).toStrictEqual({msg: "KQTBJWX FWJ UWJYYD", shift: 5});
});
test('encrypts ' + msg2.msg, () => {
    expect(encrypt(msg2.msg, msg2.key)).toStrictEqual({msg: "JV XAAOBPP KRJYBO ZEXKDBA COLJ EDC QL EDE", numIndexes: [31, 32, 33, 38, 39, 40], shift: -3});
});
test('encrypts ' + msg3.msg, () => {
    expect(encrypt(msg3.msg, msg3.key)).toStrictEqual({msg: "OKHV SH YNHTK WJK VWT VGZV", shifts: [2, 6, 3]});
});