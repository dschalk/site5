var s = "stop";
var m2;
var fu;
var x = [[0, 0, 0, 0], [], [], [], [0]];
var runRoll;
runRoll = (x2) => {
  m2 = M([[Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 20) + 1], [], [], [], [x2]]);
  updateRoll();
  m2("stop");
};
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
  m2(s)[4];
};
var update = () => {
  m2(s)[0][0];
  m2(s)[0][1];
  m2(s)[0][2];
  m2(s)[0][3];
  m2(s)[2];
  m2(s)[3];
  m2(s)[4];
  m2(s)[1][0];
  m2(s)[1][1];
  m2(s)[1][2];
  m2(s)[1][3];
};
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
var AR = [];
function M(x2) {
  return function(func) {
    if (typeof func === "function") {
      var y = M(func(x2));
      AR.push(y("stop"));
      return y;
    } else if (func === "stop")
      return x2;
  };
}
fu = (a) => {
  var result;
  var SCORE = a[4][0];
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
    if (a[4][0] === 4) {
      a[4] = 0;
      SCORE = 0;
    } else {
      SCORE = SCORE * 1;
      SCORE += 1;
    }
    runRoll(SCORE);
    setTimeout(() => "", 3e3);
  }
  update();
  return a;
};
m2 = M(x);
var click0 = (ar) => {
  ar[1].push(ar[0].splice(0, 1)[0]);
  return ar;
};
var click1 = (ar) => {
  ar[1].push(ar[0].splice(1, 1)[0]);
  return ar;
};
function clic0() {
  m2((ar) => ar[2] = ["+"]);
  m2(fu);
  m2 = m2;
}
function clic2() {
  m2((ar) => ar[2] = ["*"]);
  m2(fu);
  m2 = m2;
}
function clic3() {
  m2((ar) => ar[2] = ["/"]);
  m2(fu);
  m2 = m2;
}
function clic4() {
  m2((ar) => ar[2] = ["concat"]);
  m2(fu);
  m2 = m2;
}
function intersection(a, b) {
  return a.filter((x2) => b.includes(x2));
}
m2 = M([[0, 0, 0, 0], [], [], [], [0]]);
runRoll();
console.log("m2(s) is", m2(s));
m2(click0);
console.log("m2(s) is", m2(s));
m2(click1);
m2(clic2);
console.log("m2(s) is", m2(s));
m2(clic0);
console.log("m2(click1(m2)))", m2(click1));
m2(clic2);
console.log("m2(s) is", m2(s));
m2(clic4);
console.log("m2(s) is", m2(s));
m2(click0);
console.log("m2(s) is", m2(s));
m2(clic4);
m2(click0);
console.log("m2(s) is", m2(s));
m2(click0);
m2(click0);
m2(clic3);
console.log("m2(s) is", m2(s));
console.log(M(3)(s));
console.log(AR);
m2(clic0);
console.log("m2(s) is", m2(s));
m2 = M(AR[7]);
console.log("m2(s) is", m2(s));
AR.map((v) => console.log(v("stop")));
