function findDifference(a, b) {
  const cubeA = a[0] * a[1] * a[2];
  const cubeB = b[0] * b[1] * b[2];
  console.log(cubeA);
  if (cubeA > cubeB) {
    return cubeA - cubeB;
  }
  return cubeB - cubeA;
}
console.log(findDifference([3, 2, 5], [1, 4, 4]));

// function find_difference(a, b) {
//   return Math.abs(
//     a.reduce((previous, current) => previous * current) -
//       b.reduce((previous, current) => previous * current),
//   );
// }
