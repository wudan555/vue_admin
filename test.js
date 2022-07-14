const obj = {
  name: '465465',
  pwd: 'asdfasdf'
};
let str = JSON.stringify(obj);
console.log(typeof str);
str = str.replace(/"/g, "'");
console.log(str);

const date = new Date();
console.log(date);
