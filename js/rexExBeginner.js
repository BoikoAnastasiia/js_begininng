function lettersOnly(str) {
  const regex = /[a-zA-Z]/gm;
  const match = str.match(regex);
  return match.join('');
}
console.log(lettersOnly('R!=:~0o0./c&}9k`60=y'));
console.log(lettersOnly('^,]%4B|@56a![0{2m>b1&4i4'));
