const reverseString = (data) => {
  const arr = data.split('')
  arr.reverse();
  return arr.join('');
}
module.exports = reverseString;