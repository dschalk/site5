var A;
var s = "stop";
var WW;
var XX;
var YY;
var ZZ;
var ZYXW;
var WXYZ;
var m2;
function clone(x) {
  return JSON.parse(JSON.stringify(x));
}
var clean = (a) => a.map((ar) => ar.filter((x) => x !== void 0));
var cleanB = (a) => a.filter((x) => x !== void 0);
function M(x) {
  return function go(func) {
    if (typeof func === "function") {
      x = func(x);
      return go;
    } else if (func === "stop")
      return x;
  };
}
m2 = M([[3, 6, 9, 12], [], []]);
function updateB(ar) {
  WW = ar[1][0];
  XX = ar[1][1];
  YY = ar[1][2];
  ZZ = ar[1][3];
  ZYXW = [WW, XX, YY, ZZ];
  WXYZ = cleanB(ZYXW);
  console.log("<><><><><><><><><><>>>>--> ZYXW and WXYZ are", ZYXW, WXYZ);
  return WXYZ;
}
m2 = M([[1, 2], [3, 4], []]);
console.log("m2(s) and WXYZ before updateB() is", WXYZ);
m2(updateB);
updateC(m2);
console.log("m2(s) and WXYZ after updateB() is", clone(m2(s)), WXYZ);
function updateC(monad) {
  console.log("In updateC. monad(s) is", monad(s));
  if (monad(s)[1][0])
    ;
  if (monad(s)[1][1])
    ;
  if (monad(s)[1][2])
    ;
  if (monad(s)[1][3])
    ;
}
m2 = M([[1, 3], [5, 17], []]);
console.log("m2(s) before updateC(m2(s)", clone(m2(s)));
updateC(m2);
console.log("m2(s) after updateC(m2)G", clone(m2(s)));
var roll = (ar) => [[Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], [], []];
function runRoll() {
  m2(roll);
  m2(s)[0][0];
  m2(s)[0][1];
  m2(s)[0][2];
  m2(s)[0][3];
}
runRoll();
function calc(aa, bb, c) {
  var a = parseInt(aa, 10);
  var b = parseInt(bb, 10);
  if (c === "+")
    return a + b;
  if (c === "*")
    return a * b;
  if (c === "-")
    return a - b;
  if (c === "/")
    return a / b;
  if (c === "concat")
    return parseInt("" + a + b, 10);
}
console.log("<><><><><><><><><><><><><><><><><><><>");
console.log("calc(3,4,'+')", calc(3, 4, "+"));
function sort(ar) {
  ar(s)[0][0] ? ar(s)[0][0] : "none";
  ar(s)[0][1] ? ar(s)[0][1] : "none";
  ar(s)[0][2] ? ar(s)[0][2] : "none";
  ar(s)[0][3] ? ar(s)[0][3] : "none";
  ar(s)[1][0] ? ar(s)[1][0] : "none";
  ar(s)[1][1] ? ar(s)[1][1] : "none";
  ar(s)[1][2] ? ar(s)[1][2] : "none";
  ar(s)[1][3] ? ar(s)[1][3] : "none";
}
var click3 = (ar) => {
  ar[1].push(ar[0].splice(3, 1)[0]);
  console.log("m2(s)[0]", m2(s)[0]);
  console.log("m2(s)[1]", m2(s)[1]);
  sort(m2);
  m2(updateB);
  ar = ar;
  return ar;
};
function clic3() {
  m2(click3);
  m2(clean);
  console.log("m2(s) is", m2(s));
}
var roll = (ar) => [[Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], [], []];
var fu = (a) => {
  var result;
  if (a[1].length === 3) {
    a[0].push(a[2].pop());
    if (a[2][0] && a[1].length === 2) {
      clone(a);
      result = calc(a[1][0], a[1][1], a[2][0]);
    }
    if (result == 20 && a[0].length < 2) {
      A(runRoll);
    }
    clone(a);
    a[0].push();
    a[1] = a[2] = [];
    return a;
  } else
    return a;
};
var m4 = M([[3, 4], [5, 6], ["concat"]]);
console.log("m4(s) before m4(fu)", clone(m4(s)));
m4(fu);
console.log("m4(s) after m4(fu)", m4(s));
m4 = M([[3, 4], [5, 6], []]);
console.log("m4(s) before m4(fu)", clone(m4(s)));
m4(fu);
console.log("m4(s) after m4(fu)", m4(s));
m2 = M([[0, 0, 0], [], []]);
clic3();
