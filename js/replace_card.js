// function card_hide(card) {
//   const result = ['************'];
//   result.push(card.slice(12, 16));
//   return result.join('  ');
// }
// console.log(card_hide('1234123456785678'));

const card_hide = card => {
  const x = [];
  for (let i = 0; i < card.length - 4; i++) {
    x.push('*');
  }
  x.push(card.slice(-4));
  return x.join('');
};

console.log(card_hide('12354151515135653554123456785678'));
