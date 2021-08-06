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
        shift = Util.randomShift(shift);
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


// console.log(encrypt("My Secure Message", 5));
// console.log(encrypt("California Trip 112 Hello", '2, 4, 3'));