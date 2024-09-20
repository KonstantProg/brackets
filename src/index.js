module.exports = function check(str, bracketsConfig) {

  const newBrackets = bracketsConfig.map(el => el.join(''));
  return changeBrackets(str, newBrackets);

}

const changeBrackets = (strBase, newBrackets) => {
  let strCopy = strBase;

  for (let item of newBrackets) {
    strCopy = strCopy.replace(item, '');
  }

  if (strCopy.length === 0) {
    return true;
  } else if (strBase === strCopy) {
    return false;
  } else {
    return changeBrackets(strCopy, newBrackets);
  }
}