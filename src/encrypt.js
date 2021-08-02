import { Util } from './cipher.js';

export const encrypt = (text, shift) => {
    if (!shift || shift === 0) { return text }
    if (!Number.isInteger(shift)) { shift = shift.toUpperCase(); }
    if (shift === 'RANDOM') {
        shift = Util.randomShift(shift);
    } 

    let letters = text.toUpperCase().split("");
    let encrypted = [];

    letters.map(l => {
        if (!Util.isLetter(l)) { 
            encrypted.push(l); 
        } else if (l.trim() === '') { 
            encrypted.push(l) ;
        } else {
            const newData = Util.shiftLetter(l, shift);
            encrypted.push(newData.newLetter);
        }
    });

    return encrypted.join("");
}


//console.log(encrypt("How Many", 5));
//console.log(encrypt("Where Did You Go Last Night?", -7));
//console.log(encrypt("Hello There", 'rAnDOM'));