module.exports = function check(str, bracketsConfig) {
  var l;
  do {
    l = str.length;
    str = str.replace(/(\[\]|\{\}|\(\)|\|\|)/g, '');
  } while (str.length != l)

  return !str;
}
