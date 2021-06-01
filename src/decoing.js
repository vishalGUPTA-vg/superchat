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

const decoding = (str, shift = 4) => {
    const legend = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const map = decodingmap(legend, shift);
    return str
    .toLowerCase()
    .split('')
    .map(char => map[char] || char)
    .join('');
 };
 export default decoding;