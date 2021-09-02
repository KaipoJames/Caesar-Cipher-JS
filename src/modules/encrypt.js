import { Util } from './cipher.js';

/* <-- ABOUT ENCRYPT PARAMETERS -->
    text: The Message You Want To Encrypt(String)
    shift: The number of spaces you want to 'shift' each character(Integer, string of numbers, RANDOM)
*/
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
        return Util.getResult(letters, result, startingShiftPos, multishift, shift, shifts, "encryption", [""]);
    }

    return Util.getResult(letters, result, startingShiftPos, multishift, shift, shifts, "encryption", [""]);
}

//console.log(encrypt("I Live At 341 Oak Street", 3));
//console.log(encrypt("I Live At Oak Street", "-2, -4, -8"));
//console.log(encrypt("I Live At Oak Street", "RANDOM"));
//console.log(encrypt("My Address Number Changed from 432 to 434", -3));