import "../../../chunks/index-2dc61825.js";
var s = "stop";
var m2;
var Z = "not yet";
var x = [[0, 0, 0, 0], [], [], [], 0];
var aaa = M([[6, 7], [2, 3], ["add"], [3], 0])("stop");
function calc(aa, bb, c) {
  var a = parseInt(aa, 10);
  var b = parseInt(bb, 10);
  if (c === "+")
    return a + b;
  else if (c === "*")
    return a * b;
  else if (c === "-")
    return a - b;
  else if (c === "/")
    return a / b;
  else if (c === "concat")
    return parseInt("" + a + b, 10);
  else
    return "fubar";
}
console.log("intersection(aaa[1], aaa[3])", intersection(aaa[1], aaa[3]));
var teddy;
console.log("teddy is", teddy);
function M(x2) {
  return function go(func) {
    if (typeof func === "function") {
      x2 = func(x2);
      return go;
    } else if (func === "stop")
      return x2;
  };
}
m2 = M(x);
function runRoll() {
  m2 = M([[Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], [], [], 0]);
  updateRoll();
}
const updateRoll = () => {
  m2(s)[0][0];
  m2(s)[0][1];
  m2(s)[0][2];
  m2(s)[0][3];
  m2(s)[1][0];
  m2(s)[1][1];
  m2(s)[1][2];
  m2(s)[1][3];
  m2(s)[2];
  m2(s)[3];
};
var update = () => {
  m2(s)[0][0];
  m2(s)[0][1];
  m2(s)[0][2];
  m2(s)[0][3];
  m2(s)[2];
  m2(s)[3];
  m2(s)[1][0];
  m2(s)[1][1];
  m2(s)[1][2];
  m2(s)[1][3];
};
Z = Z;
var t1 = [[7, 15], [2, 3], ["+"], [], 4];
var t2 = fu2(t1);
console.log(t2);
var t3 = [[7], [5, 15], ["+"], [5], 4];
var t4 = fu2(t3);
console.log(t4);
console.log("Z is", Z);
console.log("Z is", Z);
console.log("intersection (t1[1], t1[3]", intersection(t1[1], t1[3]));
console.log("intersection [1,2,3,4], [3,4,5,6]", intersection([1, 2, 3, 4], [3, 4, 5, 6]));
function intersection(a, b) {
  return a.filter((x2) => b.includes(x2));
}
var p7 = [1, 2, 3, 4];
var p8 = [3, 4, 5, 6];
console.log(intersection(p7, p8).length);
function fu2(a) {
  var result;
  var a1;
  if (a[1].length === 2 && a[2].length === 1) {
    a1 = a[1];
    result = calc(a[1][0], a[1][1], a[2][0]);
    a[0].push(result);
    a[3].push(result);
    a[1] = [];
  }
  if (a[1].length === 3) {
    a[0].push(a[1].pop());
  }
  if (result == 20 && intersection(a1, a[3]).length > 0) {
    if (a[3] = 5) {
      a[3] = 0;
      Z = "You win! ";
    } else {
      Z = "Congratulations! You did it. Your score is ar[3]";
      a[3] += 1;
    }
    setTimeout(() => Z = "", 3e3);
    console.log("Z is", Z);
    runRoll();
  }
  update();
  return a;
}
console.log("Cow dung", fu2([[7], [5, 15], ["+"], [5], 5]));
