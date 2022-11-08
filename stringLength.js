const stringLength = (data) => {
  const len = data.length;
  if(len <1 || len >10){
    return "Error";
  }
  return len
}
module.exports = stringLength;