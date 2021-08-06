import { Util } from './cipher.js';

export const encrypt = (text, shift) => {
    const shifts = [];
    let multishift = false;
    if (!shift || shift === 0) { return text } 

    if (!Number.isInteger(shift)) { 
        shift = shift.toUpperCase(); 
    }
    if (shift === 'RANDOM') {
        shift = Util.randomShift(shift);
    } 

    if (shift.toString().includes(",")) {
        multishift = true;
        const nums = shift.split(",");
        for (let i = 0; i < nums.length; i++) {
            shifts.push(parseInt(nums[i]));
        }
    }

    let letters = text.toUpperCase().split("");
    let encrypted = [];
    let startingShiftPos = -1;

    letters.map(l => {
        if (!Util.isLetter(l)) { 
            encrypted.push(l); 
        } else if (l.trim() === '') { 
            encrypted.push(l) ;
        } else {
            let newData = ""
            if (!multishift) {
                newData = Util.shiftLetter(l, shift);
            } else {
                newData = Util.shiftLetter(l, Util.getNextShift(shifts, startingShiftPos));
                startingShiftPos++;
                if (startingShiftPos > (shifts.length - 1)) { startingShiftPos = 0 }
            }
            encrypted.push(newData.newLetter);
        }
    });

    return encrypted.join("");
}


//console.log(encrypt("California Trip", 5));
console.log(encrypt("California Trip", '2, 4, 3'));