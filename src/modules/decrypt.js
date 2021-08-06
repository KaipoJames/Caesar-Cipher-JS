import { Util } from './cipher.js';

export const decrypt = (text, shift) => {
    const shifts = [];
    let multishift = false;

    let letters = text.toUpperCase().split("");
    let result = [];
    let startingShiftPos = -1;

    if (!shift || shift === 0) { return text } 

    if (!Number.isInteger(shift)) { 
        shift = shift.toUpperCase(); 
    }

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
// console.log(decrypt("RD XJHZWJ RJXXFLJ", 'brute force'));
// console.log(decrypt("EEOKJRTRLC XUKT", '-2, -4, -3'));