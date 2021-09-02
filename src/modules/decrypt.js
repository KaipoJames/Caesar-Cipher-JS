import { Util } from './cipher.js';

export const decrypt = (text, shift, numberIndexes) => {
    const shifts = [];
    let multishift = false;

    let letters = text.toUpperCase().split("");
    let result = [];
    let startingShiftPos = -1;

    if (!numberIndexes) { numberIndexes = [""]; }

    Util.checkForEmptyShift(shift, text);
    Util.checkIfShiftIsNotNumber(shift);

    if (shift.toString().includes(",")) {
        multishift = true;
        const nums = shift.split(",");
        for (let i = 0; i < nums.length; i++) {
            shifts.push(parseInt(nums[i]));
        }
        return Util.getResult(letters, result, startingShiftPos, multishift, shift, shifts, "decryption", numberIndexes);
    }

    if (shift.toString() === 'BRUTE FORCE') {
        let possibilities = [];
        for (let i = 0; i < Util.alphabet.length; i++) {
            const p = Util.getResult(letters, result, startingShiftPos, multishift, i, null, "decryption", numberIndexes);
            possibilities.push(p);
        }
        return possibilities;
    }

    return Util.getResult(letters, result, startingShiftPos, multishift, shift, shifts, "decryption", numberIndexes);
}

//console.log(decrypt("L OLYH DW DEB RDN VWUHHW", -3, [10, 11, 12]));
//console.log(decrypt("RD XJHZWJ RJXXFLJ", 'BRUTE FORCE'));
//console.log(decrypt("JV XAAOBPP KRJYBO ZEXKDBA COLJ EDC QL EDE", 3, [31, 32, 33, 38, 39, 40]));