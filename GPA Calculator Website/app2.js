class NotArrayError extends TypeError {
  constructor(message) {
    super(message);
  }
}

//throw 丟錯誤訊息
function sumArray(arr) {
  //Array Class static method
  if (!Array.isArray(arr)) {
    throw new TypeError("參數並非array");
  }
  let result = 0;
  arr.forEach((element) => {
    result += element;
  });
  return result;
}
console.log(sumArray("hello"));

try {
  sumArray("hello");
} catch (e) {
  console.log(e);
}
