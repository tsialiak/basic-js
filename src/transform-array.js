const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("Not array!");

  const tempArr = [...arr];
  for (let index = 0; index < tempArr.length; index++) {
    const elem = tempArr[index];

    if (isControl(elem)) {
      const indexAlter = getIndexAlterableElem(index, tempArr);
      if (indexAlter) {
        if (isDiscard(elem)) {
          tempArr.splice(indexAlter, 1);
          if (!isNext(elem)) index--;
        } else {
          tempArr.splice(indexAlter, 0, tempArr[indexAlter]);
          if (!isNext(elem)) index++;
        }
      }

    }
  };

  return tempArr.filter(elem => !isControl(elem));
  
};

const getIndexAlterableElem = (index, arr) => {
  if (isNext(arr[index])) {
    if (index !== arr.length - 1) {
      return index + 1;
    }
  } else {
    if (index !== 0) {
      return index - 1;
    }
  }
}

const isControl = (elem) => {
  const regex = new RegExp("^--(discard|double)-(next|prev)$");
  return regex.test(elem);
}

const isNext = (control) => {
  const regex = new RegExp("next");
  return regex.test(control);
}

const isDiscard = (control) => {
  const regex = new RegExp("discard");
  return regex.test(control);
}
