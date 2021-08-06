import { Util } from './cipher.js';

export const decrypt = (text, shift) => {
    const shifts = [];
    let multishift = false;

    let letters = text.toUpperCase().split("");
    let result = [];
    let startingShiftPos = -1;

    Util.checkForEmptyShift(shift, text);
    Util.checkIfShiftIsNotNumber(shift);

    if (shift.toString().includes(",")) {
        multishift = true;
        const nums = shift.split(",");
        for (let i = 0; i < nums.length; i++) {
            shifts.push(parseInt(nums[i]));
        }
        return Util.getResult(letters, result, startingShiftPos, multishift, shift, shifts);
    }

    if (shift.toString() === 'BRUTE FORCE') {
        let possibilities = [];
        for (let i = 0; i < Util.alphabet.length; i++) {
            const p = { shift: i, string: Util.getResult(letters, result, startingShiftPos, multishift, i) };
            possibilities.push(p);
        }
        return possibilities;
    }

    return Util.getResult(letters, result, startingShiftPos, multishift, shift);
}

// console.log(decrypt("HFQNKTWSNF YWNU", -5));
// console.log(decrypt("RD XJHZWJ RJXXFLJ", 'BRUTE FORCE'));
// console.log(decrypt("EEOKJRTRLC XUKT", '-2, -4, -3'));