function reverseCase(str) {
  return [...str]
    .map(c => (c.toLowerCase() == c ? c.toUpperCase() : c.toLowerCase()))
    .join('');
}

console.log(reverseCase('sPoNtAnEoUs'));

// const reverseCase = s =>
//   s.replace(/./g, c => c[`to${c > {} ? 'Upp' : 'Low'}erCase`]());

// function reverseCase(str) {
//   let newString = '';
//   for (let i = 0; i < str.length; i++) {
//     let letter = str.charAt(i);
//     if (letter == letter.toUpperCase()) {
//       letter = letter.toLowerCase();
//     } else {
//       letter = letter.toUpperCase();
//     }
//     newString += letter;
//   }
//   return newString;
// }
