var str = "02/20/2020";

const stringSplitter = function(str, separator) {
  if (!str.includes(separator)) {
    return str;
  }
  let newStr = str.replace(separator, "");
  return stringSplitter(newStr, separator);
};

console.log(stringSplitter(str, "/"));
