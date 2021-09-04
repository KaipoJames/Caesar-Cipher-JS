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

export const encryptMany = (texts, shifts) => {
    if (!texts || texts.length < 1 || !shifts || shifts.length < 1) { return texts }
    if (!Array.isArray(shifts) && Number.isInteger(shifts)) {
        let tmp = shifts;
        shifts = [];
        for (let i = 0; i < texts.length; i++) {
            shifts.push(tmp);
        }
    }
    const results = [];
    for (let i = 0; i < texts.length; i++) {
        const result = encrypt(texts[i], shifts[i]);
        result.msgID = i + 1;
        results.push(result);
    }
    return results;
}