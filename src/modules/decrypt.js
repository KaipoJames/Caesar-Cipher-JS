import { Util } from './cipher.js';

export const decrypt = (text, shift) => {
    if (!shift || shift === 0) { return text } 

    let letters = text.toUpperCase().split("");
    let decrypted = [];

    letters.map(l => {
        if (!Util.isLetter(l)) { 
            decrypted.push(l); 
        } else if (l.trim() === '') { 
            decrypted.push(l) ;
        } else {
            //shift = (Util.isNegative(shift) ? Math.abs(shift) : shift);
            //console.log(shift);
            const newData = Util.shiftLetter(l, shift);
            decrypted.push(newData.newLetter);
        }
    });

    return decrypted.join("");
}


//console.log(decrypt("MTB RFSD?", -5));
// console.log(decrypt("PAXKX WBW RHN ZH ETLM GBZAM?", 7));
//console.log(decrypt("NKRRU ZNKXK", -6));