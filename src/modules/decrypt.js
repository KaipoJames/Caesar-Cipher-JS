import { Util } from './cipher.js';

export const decrypt = (text, shift) => {
    const shifts = [];
    let multishift = false;

    let letters = text.toUpperCase().split("");
    let decrypted = [];
    let startingShiftPos = -1;

    if (!shift || shift === 0) { return text } 

    if (shift.toString().includes(",")) {
        multishift = true;
        const nums = shift.split(",");
        for (let i = 0; i < nums.length; i++) {
            shifts.push(parseInt(nums[i]));
        }
        return getDecrypted(letters, decrypted, startingShiftPos, multishift, shift, shifts);
    }

    if (shift.toString() === 'BRUTE FORCE') {
        let possibilities = [];
        for (let i = -25; i < 25; i++) {
            const p = { shift: i, string: getDecrypted(letters, decrypted, startingShiftPos, multishift, i) };
            possibilities.push(p);
        }
        return possibilities;
    }

    return getDecrypted(letters, decrypted, startingShiftPos, multishift, shift);
}

const getDecrypted = (letters, decrypted, startingShiftPos, multishift, shift, shifts) => {
    decrypted = [];
    letters.map(l => {
        if (!Util.isLetter(l)) { 
            decrypted.push(l); 
        } else if (l.trim() === '') { 
            decrypted.push(l) ;
        } else {
            let newData = "";
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

console.log(decrypt("HFQNKTWSNF YWNU", -5));
console.log(decrypt("HFQNKTWSNF YWNU", 'BRUTE FORCE'));
console.log(decrypt("EEOKJRTRLC XUKT", '-2, -4, -3'));