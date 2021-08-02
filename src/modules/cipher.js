const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// let letts = alphabet.split("");
// letts.map(l => console.log(letts.indexOf(l)));

const shiftLetter = (letter, shift) => {
    const alphabetPos = alphabet.indexOf(letter);
    const newPos = isNegative(shift) ? decrement(alphabetPos, shift) : increment(alphabetPos, shift);
    const newLetter = alphabet[newPos];
    return { newPos: newPos, newLetter: newLetter };
}

const randomShift = (shift) => {
    shift = Math.floor(Math.random() * 100);
    console.log("Random Shift Chosen: " + shift);
    return shift;
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
    //console.log("pos: " + pos);
    return pos;
}

const decrement = (pos, shift) => {
    //console.log("before change, POS: " + pos + ", SHIFT: " + shift);
    for (let i = 0; i < Math.abs(shift); i++) {
        pos--;
        if (pos < 0) { pos = 25; }
    }
    //console.log("pos: " + pos);
    return pos;
}

export const Util = {
    alphabet: alphabet,
    shiftLetter: shiftLetter,
    randomShift: randomShift,
    isLetter: isLetter,
    isNegative: isNegative,
    increment, increment,
    decrement, decrement
}
