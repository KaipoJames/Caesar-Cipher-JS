import { Util } from './cipher.js';

export const decrypt = (text, shift) => {
    const shifts = [];
    let multishift = false;
    if (!shift || shift === 0) { return text } 

    if (shift.toString().includes(",")) {
        multishift = true;
        const nums = shift.split(",");
        for (let i = 0; i < nums.length; i++) {
            shifts.push(parseInt(nums[i]));
        }
    }

    let letters = text.toUpperCase().split("");
    let decrypted = [];
    let startingShiftPos = -1;

    letters.map(l => {
        if (!Util.isLetter(l)) { 
            decrypted.push(l); 
        } else if (l.trim() === '') { 
            decrypted.push(l) ;
        } else {
            let newData = ""
            if (!multishift) {
                newData = Util.shiftLetter(l, shift);
            } else {
                newData = Util.shiftLetter(l, Util.getNextShift(shifts, startingShiftPos));
                startingShiftPos++;
                if (startingShiftPos > (shifts.length - 1)) { startingShiftPos = 0 }
            }
            decrypted.push(newData.newLetter);
        }
    });

    return decrypted.join("");
}