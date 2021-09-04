import { Caesar } from './cipher.js';

export const decrypt = (text, shift, numberIndexes) => {
    const shifts = [];
    let multishift = false;

    let letters = text.toUpperCase().split("");
    let result = [];
    let startingShiftPos = -1;

    if (!numberIndexes) { numberIndexes = [""]; }

    Caesar.checkForEmptyShift(shift, text);
    Caesar.checkIfShiftIsNotNumber(shift);

    if (shift.toString().includes(",")) {
        multishift = true;
        const nums = shift.split(",");
        for (let i = 0; i < nums.length; i++) {
            shifts.push(parseInt(nums[i]));
        }
        return Caesar.getResult(letters, result, startingShiftPos, multishift, shift, shifts, "decryption", numberIndexes);
    }

    if (shift.toString() === 'BRUTE FORCE') {
        let possibilities = [];
        for (let i = 0; i < Caesar.alphabet.length; i++) {
            const p = Caesar.getResult(letters, result, startingShiftPos, multishift, i, null, "decryption", numberIndexes);
            possibilities.push(p);
        }
        return possibilities;
    }

    return Caesar.getResult(letters, result, startingShiftPos, multishift, shift, shifts, "decryption", numberIndexes);
}