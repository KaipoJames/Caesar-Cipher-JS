import { decrypt } from '../modules/decrypt.js'

// <-- OBJECTS -->
const msg1 = {
    msg: "KQTBJWX FWJ UWJYYD",
    key: -5
};
const msg2 = {
    msg: "JV XAAOBPP KRJYBO ZEXKDBA COLJ EDC QL EDE",
    key: 3,
    indexes: [31, 32, 33, 38, 39, 40]
};
const msg3 = {
    msg: "OKHV SH YNHTK WJK VWT VGZV",
    key: '-2, -6, -3'
};
const msg4 = {
    msg: "RD XJHZWJ RJXXFLJ",
    key: 'BRUTE FORCE'
};

// <-- TESTS -->
test('decrypts ' + msg1.msg, () => {
    expect(decrypt(msg1.msg, msg1.key)).toStrictEqual({msg: "FLOWERS ARE PRETTY", shift: -5});
});
test('decrypts ' + msg2.msg, () => {
    expect(decrypt(msg2.msg, msg2.key, msg2.indexes)).toStrictEqual({msg: "MY ADDRESS NUMBER CHANGED FROM 432 TO 434", shift: 3});
});
test('decrypts ' + msg3.msg, () => {
    expect(decrypt(msg3.msg, msg3.key)).toStrictEqual({msg: "MEET ME WHERE THE SUN SETS", shifts: [-2, -6, -3]});
});

test('decrypts ' + msg4.msg, () => {
    expect(decrypt(msg4.msg, msg4.key)).toStrictEqual([
        { msg: 'RD XJHZWJ RJXXFLJ', shift: 0 },
        { msg: 'SE YKIAXK SKYYGMK', shift: 1 },
        { msg: 'TF ZLJBYL TLZZHNL', shift: 2 },
        { msg: 'UG AMKCZM UMAAIOM', shift: 3 },
        { msg: 'VH BNLDAN VNBBJPN', shift: 4 },
        { msg: 'WI COMEBO WOCCKQO', shift: 5 },
        { msg: 'XJ DPNFCP XPDDLRP', shift: 6 },
        { msg: 'YK EQOGDQ YQEEMSQ', shift: 7 },
        { msg: 'ZL FRPHER ZRFFNTR', shift: 8 },
        { msg: 'AM GSQIFS ASGGOUS', shift: 9 },
        { msg: 'BN HTRJGT BTHHPVT', shift: 10 },
        { msg: 'CO IUSKHU CUIIQWU', shift: 11 },
        { msg: 'DP JVTLIV DVJJRXV', shift: 12 },
        { msg: 'EQ KWUMJW EWKKSYW', shift: 13 },
        { msg: 'FR LXVNKX FXLLTZX', shift: 14 },
        { msg: 'GS MYWOLY GYMMUAY', shift: 15 },
        { msg: 'HT NZXPMZ HZNNVBZ', shift: 16 },
        { msg: 'IU OAYQNA IAOOWCA', shift: 17 },
        { msg: 'JV PBZROB JBPPXDB', shift: 18 },
        { msg: 'KW QCASPC KCQQYEC', shift: 19 },
        { msg: 'LX RDBTQD LDRRZFD', shift: 20 },
        { msg: 'MY SECURE MESSAGE', shift: 21 },
        { msg: 'NZ TFDVSF NFTTBHF', shift: 22 },
        { msg: 'OA UGEWTG OGUUCIG', shift: 23 },
        { msg: 'PB VHFXUH PHVVDJH', shift: 24 },
        { msg: 'QC WIGYVI QIWWEKI', shift: 25 }
      ]);
});