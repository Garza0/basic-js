module.exports = function countCats(matrix) {
  let counter = 0
  matrix.flat().forEach(el => {
    if (el === '^^') counter += 1
  })
  return counter
};
