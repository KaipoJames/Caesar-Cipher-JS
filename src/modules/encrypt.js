import { Caesar } from './cipher.js';

export const encrypt = (text, shift) => {
    const shifts = [];
    let multishift = false;

    let letters = text.toUpperCase().split("");
    let result = [];
    let startingShiftPos = -1;

    Caesar.checkForEmptyShift(shift, text);
    Caesar.checkIfShiftIsNotNumber(shift);

    if (shift === 'RANDOM') {
        shift = Caesar.getRandomShift();
    } 
    if (shift.toString().includes(",")) {
        multishift = true;
        const nums = shift.split(",");
        for (let i = 0; i < nums.length; i++) {
            shifts.push(parseInt(nums[i]));
        }
        return Caesar.getResult(letters, result, startingShiftPos, multishift, shift, shifts, "encryption", [""]);
    }

    return Caesar.getResult(letters, result, startingShiftPos, multishift, shift, shifts, "encryption", [""]);
}

export const encryptRandom = (text) => {
    const shift = Caesar.getRandomShift();
    return encrypt(text, shift);
}

export const encryptRandomMultiShift = (text, length) => {
    const shift = Caesar.getRandomMultiShift(length);
    return encrypt(text, shift);
}