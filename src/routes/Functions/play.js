


import { merge_ssr_styles } from "svelte/internal";
// import { onMount } from "svelte";
import {fade} from "svelte/transition";

var A,B,C,D,AA,BB,CC,DD,EE,FF,GG,HH = "wait";
var N = 0;

var b0 = "none";
var b1 = "none";
var b2 = "none";
var b3 = "none";

var b4 = "none";
var b5 = "none";
var b6 = "none";
var b7 = "none";

var s = 'stop';
var AA;
var BB;
var CC;
var DD;
var EEE = "awaiting selection";
var FF;
var WW;
var XX;
var YY;
var ZZ;
var ZYXW;
var WXYZ;
var m2;
var Z = "not yet";
$: Z;
var fu;
var x = [ [0,0,0,0], [], [], [], 0 ]

var aaa = M([ [6,7], [2,3], ['add'], [3], 0 ])('stop');

function calc(aa,bb,c) {
var a = parseInt(aa,10);
var b = parseInt(bb,10);
if (c === "+") return (a + b);
else if (c === "*") return (a * b);
else if (c === "-") return (a - b);
else if (c === "/") return (a / b);
else if (c === "concat") return parseInt("" + a + b, 10);
else return "fubar";
}

function g(ar) {
  var x = (ar.pop())**3;
  ar.unshift(x);
  return ar;
};

function g2 (ar) {return (ar.flatMap(v => (v+1)**3))};
function g3 (ar) {return (ar.flatMap(v => Math.round(v**(1/3))))};

function clone (x) {return JSON.parse(JSON.stringify(x))};

var clean = a => a.map( ar => ar.filter(x => (x != (undefined && 0))));

var cleanB = a => a.filter(x => x != (undefined && 0));

var testM = M([ [3,4], [5,6], [add], [6], []  ])      

console.log("intersection(aaa[1], aaa[3])", intersection(aaa[1], aaa[3]) );

var teddy;

fu = a => {
  teddy = "cow";  
  var result;
  if (a[1].length === 2 && a[2].length === 1)   {
    console.log("In fu. a[0]", clone(a[0]));
    result = calc(a[1][0], a[1][1],a[2][0]);
    a[0].push(result);
    a[3].push(result);  
    a[1] = [];
  }

  if (a[1].length === 3) {
    a[0].push(a[1].pop());
  }

  console.log("Hello");
  console.log("intersection(a[1], a[2])", intersection(a[1], a[2]) );

  if (result == 20 && intersection(a[1], a[3]) > 0) {
      teddy = clone(a);
      if (a[3] = 5) {
          a[3] = 0;
          Z = "You win! "
      }
      else {
          Z = "Congratulations! You did it. Your score is ar[3]";
          a[3] += 1;
      }
      setTimeout(() => Z = "", 3000);
      console.log("Z is", Z);
      runRoll();
  }
  update();
  sfunc();
  return a;
};

$: console.log("teddy is", teddy);

function M (x) {
  return function go (func) {
      if (typeof func === "function") {
          x = func(x);
          return go;
      }
      else if (func === "stop") return x;
  }
};

m2 = M(x);

var roll = ar => {
  ar = [ [Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*12) + 1, Math.floor(Math.random()*20) + 1], [], [], 0 ];
  b4 = b5 = b6 = b7 = 'none';
};

function runRoll () {
    m2 = M([ [Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*12) + 1, Math.floor(Math.random()*20) + 1], [], [], 0 ]);
    updateRoll();
    EEE = "yet to be selected";
}
const updateRoll = () => {
  AA = m2(s)[0][0];
  BB = m2(s)[0][1];
  CC = m2(s)[0][2];
  DD = m2(s)[0][3];
  
  WW = m2(s)[1][0];
  XX = m2(s)[1][1];
  YY = m2(s)[1][2];
  ZZ = m2(s)[1][3];
  EE = m2(s)[2];
  FF = m2(s)[3];
  b0 = b1 = b2 = b3 = "inline";
  b4 = b5 = b6 = b7 = 'none';
}
function sfunc () {
    b0 = b1 = b2 = b3 = b4 = b5 = b6 = b7 = "none";
    if (AA != (undefined && 0)) b0 = "inline";
    if (BB != (undefined && 0)) b1 = "inline";
    if (CC != (undefined && 0)) b2 = "inline";
    if (DD != (undefined && 0)) b3 = "inline";
    if (WW != (undefined && 0)) b4 = "inline";
    if (XX != (undefined && 0)) b5 = "inline";
    if (YY != (undefined && 0)) b6 = "inline";
    if (ZZ != (undefined && 0)) b7 = "inline";
}
var update = () => {
  AA = m2(s)[0][0];
  BB = m2(s)[0][1];
  CC = m2(s)[0][2];
  DD = m2(s)[0][3];
  EE = m2(s)[2];
  FF = m2(s)[3];
  
  WW = m2(s)[1][0];
  XX = m2(s)[1][1];
  YY = m2(s)[1][2];
  ZZ = m2(s)[1][3];
}

var mon3 = M([1,2,3,4]);
// function fmon3 (f) {mon3 = mon3(f)};
// function fmon3Reset () {mon3 = M([1,2,3,4])}

var fmon = f => x => x(f);
var reset = x => [1,2,3,4]

var click0 = m => ar => {
    ar[1].push(ar[0].splice(0,1)[0]);
    ar = ar;
    m(fu);
    return ar;
};

var click1 = m => ar => {
    ar[1].push(ar[0].splice(1,1)[0]);
    ar = ar;
    m(fu);
    return ar;
};

var click2 = m => ar => {
    ar[1].push(ar[0].splice(2,1)[0]);
    ar = ar;
    m(fu);
    return ar;
};

var click3 = m => ar => {
    ar[1].push(ar[0].splice(3,1)[0]);
    ar = ar;
    m(fu);
    return ar;
};

function clic0 () {
  EEE = "add";
  m2(ar => ar = [ m2(s)[0], m2(s)[1], ['+'], m2(s)[3] ].map(v => v.flat()));
  m2(fu);
} 

function clic1 () {
  EEE = "subtract";
  m2(ar => ar = [ m2(s)[0], m2(s)[1], ['-'], m2(s)[3] ].map(v => v.flat()));
  m2(fu);
} 

function clic2 () {
  EEE = "multiply";
  m2(ar => ar = [ m2(s)[0], m2(s)[1], ['*'], m2(s)[3] ].map(v => v.flat()));
  m2(fu);
} 

function clic3 () {
  EEE = "divide";
  m2(ar => ar = [ m2(s)[0], m2(s)[1], ['/'], m2(s)[3] ].map(v => v.flat()));
  m2(fu);
} 

function clic4 () {
  EEE = "concat";
  m2(ar => ar = [ m2(s)[0], m2(s)[1], ['concat'], m2(s)[3] ].map(v => v.flat()));
  m2(fu);
} 

function m2Func () {console.log("In m2Func m2(s), b4, b5, b6 and b7 are", m2(s),b4,b5,b6,b7)};

$: Z = Z;

var m3 = M(3);
var m4 = M(3.1415926535); 

var cube = x => x**3;
var square = x => x*x;
var pow = n => x => x**n;
var add = n => x => 1*x + 1*n;
var mult = n => x => x * n;
var reset2 = n => x => x = n;

function cubeFu () {m4 = m4(cube)};
function squareFu () {m4 = m4(square)};

function divFraction (x) {
    var y = x.split('/');
    console.log(y)
    if(y.length > 1){
        return (y[0] / y[1])
    }
    else{
        return y[0];
    }
}
var powFu = function powFu (e) {
    var p = divFraction(e.target.value);
    console.log("p is", p);
    if (e.keyCode == 13) {
        m4 = m4(pow(p));
    }
};
    
var addFu = function addFu (e) {
    if (e.keyCode == 13) {
        m4 = m4(add(e.target.value));
    };
  };
    
var multFu = function multFu (e) {
    if (e.keyCode == 13) {
        m4 = m4(mult(divFraction(e.target.value)))};
};
    
var resetFu = function resetFu (e) {
    if (e.keyCode == 13) {
        m4 = m4(reset2(divFraction(e.target.value)))
    };
};

var t1 =  [ [7,15], [2,3], ['+'], [], 4  ]; 
var t2 = fu2(t1)
console.log(t2);

var t3 = [ [7], [5,15], ['+'], [5], 4  ]
var t4 = fu2(t3);
console.log(t4);
$: console.log("Z is", Z)

$: console.log("Z is", Z)
console.log("intersection (t1[1], t1[3]", intersection (t1[1], t1[3]) )
console.log("intersection [1,2,3,4], [3,4,5,6]", intersection ([1,2,3,4], [3,4,5,6]) )

function intersection (a,b) {return (a.filter(x => b.includes(x)))};

var p7 = [1,2,3,4]; var p8 = [3,4,5,6]
console.log(intersection(p7, p8).length)
var nn = 0;

function fu2 (a) {
  var result;
  var a1;
  if (a[1].length === 2 && a[2].length === 1)   {
    a1 = a[1];
    result = calc(a[1][0], a[1][1],a[2][0]);
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
          Z = "You win! "
      }
      else {
          Z = "Congratulations! You did it. Your score is ar[3]";
          a[3] += 1;
      }
      setTimeout(() => Z = "", 3000);
      console.log("Z is", Z);
      runRoll();
  }
  update();
  sfunc();
  return a;
};

    console.log("Cow dung", fu2([[7], [5,15], ['+'], [5], 5 ]))
