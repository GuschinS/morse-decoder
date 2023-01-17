const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let start = expr.split("");
  let end = [];
  while (start.length != 0) {
    let indexOne = start.indexOf("1");
    let letter = start.slice(indexOne, 10).join("");
    start = start.splice(10, start.length);
    let morseCode;
    let bi;
    let arr = [];
    for (let i = 0; i <= letter.length + 2; i++) {
      bi = letter.slice(0, 2);
      if (bi === "10") {
        arr.push(".");
      }
      if (bi === "11") {
        arr.push("-");
      }
      letter = letter.slice(2, letter.length);
      morseCode = arr.join("");
    }
    let map = new Map(Object.entries(MORSE_TABLE));
    let result = map.get(morseCode);
    end.push(result);
    if (start[1] === "*") {
      end.push(" ");
    }
  }
  return end.join("").trim();
}

module.exports = {
  decode,
};
