const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const checkForEmptyShift = (shift, text) => {
    if (!shift || shift === 0) { return text } 
}

const shiftLetter = (letter, shift) => {
    const alphabetPos = alphabet.indexOf(letter);
    const newPos = isNegative(shift) ? decrement(alphabetPos, shift) : increment(alphabetPos, shift);
    const newLetter = alphabet[newPos];
    return { newPos: newPos, newLetter: newLetter };
}

const randomShift = (shift) => {
    shift = Math.floor(Math.random() * 100);
    return shift;
}

const checkIfShiftIsNotNumber = (shift) => {
    if (!Number.isInteger(shift)) { 
        shift = shift.toUpperCase(); 
    }
}

const isLetter = (str) => {
    return str.length === 1 && str.match(/[a-z]/i);
}
const isNegative = (num) => {
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

const getResult = (letters, result, startingShiftPos, multishift, shift, shifts) => {
    result = [];
    letters.map(l => {
        if (!Util.isLetter(l) || l.trim() === '')  { 
            result.push(l); 
        } else {
            let newData = "";
            if (!multishift) {
                newData = Util.shiftLetter(l, shift);
            } else {
                newData = Util.shiftLetter(l, Util.getNextShift(shifts, startingShiftPos));
                startingShiftPos++;
                if (startingShiftPos > (shifts.length - 1)) { startingShiftPos = 0 }
            }
            result.push(newData.newLetter);
        }
    });
    return result.join("");
}

export const Util = {
    alphabet: alphabet,
    checkForEmptyShift: checkForEmptyShift,
    shiftLetter: shiftLetter,
    randomShift: randomShift,
    checkIfShiftIsNotNumber: checkIfShiftIsNotNumber,
    isLetter: isLetter,
    isNegative: isNegative,
    increment: increment,
    decrement: decrement,
    getNextShift: getNextShift,
    getResult: getResult
}
