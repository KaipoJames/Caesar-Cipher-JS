// EXPORTED FUNCTIONS
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const checkForEmptyShift = (shift, text) => {
    if (!shift || shift === 0) { return text } 
}

export const getRandomShift = () => {
    return Math.floor(Math.random() * 25);
}

const checkIfShiftIsNotNumber = (shift) => {
    if (!Number.isInteger(shift)) { 
        shift = shift.toUpperCase(); 
    }
}

const getResult = (letters, result, startingShiftPos, multishift, shift, shifts, type, numIndexes) => {
    result = [];
    let numberIndexes = [];
    let pos = -1;
    letters.map(l => {
        pos++;
        if (!isLetter(l) || l.trim() === '' || numIndexes.includes(pos))  { 
            if (type === "encryption") {
                if (Number.isInteger(parseInt(l))) {
                    result.push(alphabet[l]);
                    numberIndexes.push(pos);
                } else {
                    result.push(l); 
                }   
            } else {
                result.push(l); 
            }
        } else {
            let newData = "";
            if (!multishift) {
                newData = shiftLetter(l, shift);
            } else {
                newData = shiftLetter(l, getNextShift(shifts, startingShiftPos));
                startingShiftPos++;
                if (startingShiftPos > (shifts.length - 1)) { startingShiftPos = 0 }
            }
            result.push(newData.newLetter);
        }
    });
    lookForNumbersIfAny(type, result, numIndexes, numberIndexes);
    return getFinalResult(result.join(""), shift, multishift, shifts, numberIndexes);
    
}

// Cipher helper functions (Not Exported)
const lookForNumbersIfAny = (type, result, numIndexes) => {
    if (type === "decryption") {
        for (let i = 0; i < numIndexes.length; i++) {
            result[numIndexes[i]] = alphabet.indexOf(result[numIndexes[i]]);
        }
    }
}

const getFinalResult = (msg, shift, multishift, shifts, numberIndexes) => {
    const toReturn = {};
    toReturn.msg = msg;
    if (numberIndexes.length > 0) {
        toReturn.numIndexes = numberIndexes;
    }
    multishift ? toReturn.shifts = shifts : toReturn.shift = shift;
    return toReturn;
}

export const shiftLetter = (letter, shift) => {
    const alphabetPos = alphabet.indexOf(letter);
    const newPos = isNegative(shift) ? decrement(alphabetPos, shift) : increment(alphabetPos, shift);
    const newLetter = alphabet[newPos];
    return { newPos: newPos, newLetter: newLetter };
}

export const isLetter = (str) => {
    return str.length === 1 && str.match(/[a-z]/i);
}
export const isNegative = (num) => {
    return num < 0 ? true : false;
}

const increment = (pos, shift) => {
    for (let i = 0; i < shift; i++) {
        pos++;
        if (pos > 25) { pos = 0; }
    }
    return pos;
}

const decrement = (pos, shift) => {
    for (let i = 0; i < Math.abs(shift); i++) {
        pos--;
        if (pos < 0) { pos = 25; }
    }
    return pos;
}

// For MultiShift
const getNextShift = (shifts, pos) => {
    const nextPos = pos + 1;
    const lastIndex = shifts.length - 1;
    const firstIndex = 0;
    if (nextPos > lastIndex) {
        return shifts[0];
    }
    if (nextPos < firstIndex) {
        return shifts[lastIndex];
    }
    return shifts[nextPos];
}


export const Caesar = {
    alphabet: alphabet,
    checkForEmptyShift: checkForEmptyShift,
    getRandomShift: getRandomShift,
    checkIfShiftIsNotNumber: checkIfShiftIsNotNumber,
    getResult: getResult
}
