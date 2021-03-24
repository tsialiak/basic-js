const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
    this.direct = (type === undefined || type) ? true : false;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Pass all arguments!');
    
    let countNotLatin = 0;
    let outStr = "";
    const arr = message.toUpperCase().split("");
    const keyUp = key.toUpperCase();
    arr.map((elem, index) => {
      const char = elem.charCodeAt(0);

      if (char >= 65 && char <= 90) {
        const sumChar = char + keyUp.charCodeAt((index - countNotLatin) % key.length);
        const encryptChar = (sumChar % 26) + 65;
        outStr += String.fromCharCode(encryptChar);
      } else {
        countNotLatin++;
        outStr += elem;
      }
    });

    return this.direct ? outStr : outStr.split("").reverse().join("");
  }  

  decrypt(message, key) {
    if (!message || !key) throw new Error('Pass all arguments!');
    
    let countNotLatin = 0;
    let outStr = "";
    const arr = message.toUpperCase().split("");
    const keyUp = key.toUpperCase();
    arr.map((elem, index) => {
      const char = elem.charCodeAt(0);

      if (char >= 65 && char <= 90) {
        const res = char - keyUp.charCodeAt((index - countNotLatin) % key.length);
        const decryptChar = ((res + 26) % 26) + 65;
        outStr += String.fromCharCode(decryptChar);
      } else {
        countNotLatin++;
        outStr += elem;
      }
    });

    return this.direct ? outStr : outStr.split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
