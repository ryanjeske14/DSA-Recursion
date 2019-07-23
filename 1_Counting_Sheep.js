const countSheep = function(num) {
  if (num === 0) {
    console.log("All sheep jumped over the fence");
  } else {
    console.log(`${num}: Another sheep jumped over the fence`);
    countSheep(num - 1);
  }
};

console.log(countSheep(3));
