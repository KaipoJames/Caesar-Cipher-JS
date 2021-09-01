import { Util } from './cipher.js';

export const encrypt = (text, shift) => {
    const shifts = [];
    let multishift = false;

    let letters = text.toUpperCase().split("");
    let result = [];
    let startingShiftPos = -1;

    Util.checkForEmptyShift(shift, text);
    Util.checkIfShiftIsNotNumber(shift);

    if (shift === 'RANDOM') {
        shift = Util.randomShift();
    } 

    if (shift.toString().includes(",")) {
        multishift = true;
        const nums = shift.split(",");
        for (let i = 0; i < nums.length; i++) {
            shifts.push(parseInt(nums[i]));
        }
        return Util.getResult(letters, result, startingShiftPos, multishift, shift, shifts);
    }

    return Util.getResult(letters, result, startingShiftPos, multishift, shift);
}