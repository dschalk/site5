var AA, BB, CC, DD, EE, FF;
var l = console.log;
var s = "stop";
var AA;
var BB;
var CC;
var DD;
var FF;
var WW;
var XX;
var YY;
var ZZ;
var SCORE;
SCORE = [0];
var m2;
var runRoll;
runRoll = (b) => {
  var arr = [[Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], [], ["+"], [], [b], [], [0]];
  m2 = M(arr);
  m2 = m2(fuu);
  console.log("In runRoll. m2(s) is", m2(s));
  console.log("In runRoll. m2(s) is", m2(s));
  m2 = M(m2(s));
  updateRoll(m2);
  m2(fu);
  return m2;
};
runRoll(0);
console.log("At line 50. m2", m2);
function updateRoll(m) {
  console.log("In updateRoll. m(s) is", m(s));
  AA = m(s)[0][0];
  BB = m(s)[0][1];
  CC = m(s)[0][2];
  DD = m(s)[0][3];
  WW = m(s)[1][0];
  XX = m(s)[1][1];
  YY = m(s)[1][2];
  ZZ = m(s)[1][3];
  EE = m(s)[2];
  FF = m(s)[3];
  SCORE = m(s)[4];
}
function update() {
  AA = m2(s)[0][0];
  BB = m2(s)[0][1];
  CC = m2(s)[0][2];
  DD = m2(s)[0][3];
  EE = m2(s)[2];
  FF = m2(s)[3];
  SCORE = m2(s)[4];
  WW = m2(s)[1][0];
  XX = m2(s)[1][1];
  YY = m2(s)[1][2];
  ZZ = m2(s)[1][3];
  return [AA, BB, CC, DD, EE, FF, SCORE, WW, XX, YY, ZZ];
}
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
  else if (c === "@")
    return " " + a + b;
  else
    return "fubar";
}
function clone(x) {
  return JSON.parse(JSON.stringify(x));
}
function M(x) {
  return function(func) {
    if (typeof func === "function") {
      return M(func(x));
    } else if (func === "stop")
      return x;
  };
}
function fuu(a) {
  a[5].push(clone([a[0], a[1], a[2], a[3], a[4], [], a[6]]));
  l("In fu. a is", a);
  return a;
}
function fu(a) {
  a[5].push(clone([a[0], a[1], a[2], a[3], a[4], [], a[6]]));
  l("In fu. a is", a);
  var result;
  SCORE = a[4];
  var a1;
  console.log("At the top of fu. a[1].length === 2 && a[2].length === 1", a[1].length === 2 && a[2].length === 1);
  console.log("result == 20 && intersection(a1, a[3]).length > 0", result == 20 && intersection(a1, a[3]).length > 0);
  if (a[1].length === 2 && a[2].length === 1) {
    a1 = a[1];
    result = calc(a[1][0], a[1][1], a[2][0]);
    a[0].push(result);
    a[3].push(result);
    a[1] = [];
    l("Still in fu. a is", a);
    m2 = M(a);
    console.log("******** Line 186 m2(s) is", m2(s));
  }
  if (a[1].length === 3) {
    a[0].push(a[1].pop());
  }
  console.log("At the bottom of fu. a[1].length === 2 && a[2].length === 1", a[1].length === 2 && a[2].length === 1);
  console.log("result == 20 && intersection(a1, a[3]).length > 0", result == 20 && intersection(a1, a[3]).length > 0);
  if (result == 20 && intersection(a1, a[3]).length > 0) {
    console.log("Last part of fu. a[4][0] is", a[4][0]);
    if (a[4][0] === 4) {
      a[4][0] = 0;
      runRoll(0);
    } else {
      var aint = parseInt(a[4][0], 10);
      aint += 1;
      console.log("<><><<>>--> aint is", aint);
      runRoll(aint);
    }
    console.log("At the very end of fu. m2(s) is", m2(s));
    setTimeout(() => "", 3e3);
  }
  AA = m2(s)[0][0];
  BB = m2(s)[0][1];
  CC = m2(s)[0][2];
  DD = m2(s)[0][3];
  EE = m2(s)[2];
  FF = m2(s)[3];
  SCORE = m2(s)[4];
  WW = m2(s)[1][0];
  XX = m2(s)[1][1];
  YY = m2(s)[1][2];
  ZZ = m2(s)[1][3];
  return m2(s);
}
clic1 = (m) => {
  m[2] = "-";
  m2 = M(m);
};
function intersection(a, b) {
  return a.filter((x) => b.includes(x));
}
console.log("***********************************************************************");
console.log("<><><><><>typeof update", typeof update);
console.log("***********************************************************************");
