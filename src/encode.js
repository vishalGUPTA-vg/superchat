
var str = 'Vishal ?gupta';

const getMap = (legend, shift) => {
   return legend.reduce((charsMap, currentChar, charIndex) => {
      const copy = { ...charsMap };
      let ind = (charIndex + shift) % legend.length;
      if (ind < 0) {
         ind += legend.length;
      };
      copy[currentChar] = legend[ind];
      return copy;
   }, {});
};
const encrypt = (str, shift = 0) => {
    const legend = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const map = getMap(legend, shift);
    return str
    .toLowerCase()
    .split('')
    .map(char => map[char] || char)
    .join('');
 };
const decodingmap = (legend, shift) => {
    return legend.reduce((charsMap, currentChar, charIndex) => {
       const copy = { ...charsMap };
       let ind = (charIndex - shift) % legend.length;
       if (ind < 0) {
          ind += legend.length;
       };
       copy[currentChar] = legend[ind];
       return copy;
    }, {});
 }

const decoding = (str, shift = 0) => {
    const legend = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const map = decodingmap(legend, shift);
    return str
    .toLowerCase()
    .split('')
    .map(char => map[char] || char)
    .join('');
 };
str=encrypt(str,4);
console.log("Encrypted message")
console.log(str);
console.log("\ndecrypted message")

console.log(decoding(str,4));