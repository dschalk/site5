
var A,B,C,D,AA,BB,CC,DD,EE,FF,GG,HH = "wait";
var N = 0;
var l = console.log;
var b0 = "none";
var b1 = "none";
var b2 = "none";
var b3 = "none";
var index;
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
var SCORE;
$: SCORE = [0];
var ZYXW;
var WXYZ;

var m2;

var runRoll;
runRoll = b => {
    var arr = [ [Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*12) + 1, Math.floor(Math.random()*20) + 1], [], ["+"], [], [b], [], [0] ];
    m2 = M(arr);
    m2 = m2(fuu);
    console.log("In runRoll. m2(s) is", m2(s));
    
    //[5].push(clone([ a[0], a[1], a[2], a[3], a[4], [], a[6] ]));  
    EEE = "yet to be selected";
    console.log("In runRoll. m2(s) is", m2(s));
    m2 = M(m2(s));
    updateRoll(m2);
    m2(fu);
    return m2;
}
runRoll(0);
console.log("At line 50. m2", m2);
var Z = "";
$: Z;
var x;
function updateRoll (m) {
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
function update () {
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
  return [AA,BB,CC,DD,EE,FF,SCORE,WW,XX,YY,ZZ];
}

var ZWIN = "";
var mon3 = M([1,2,3,4]);

function calc(aa,bb,c) {
var a = parseInt(aa,10);
var b = parseInt(bb,10);
if (c === "+") return (a + b);
else if (c === "*") return (a * b);
else if (c === "-") return (a - b);
else if (c === "/") return (a / b);
else if (c === "@") return (" " + a + b);
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

function M (x) {
    return function (func) {
        if (typeof func === "function") {
            return M(func(x));
        }
        else if (func === "stop") return x;
    }
};

var back;
$: back = a => {
    var dex = a(s)[6][0];
    if (dex > 0) {
        dex = dex - 1; 
        a[6][0] = dex;
        a(fu);
        console.log("in back. m2(s)[5] and index are", m2(s)[5], "**", dex);
    }
    else console.log("In back. Can't compute")
};

var forward = a => {
    var dex = a(s)[4][0];
    if (dex > 0) {
        dex = dex - 1; 
        a[4][0] = dex;
        a(fu);
        console.log("in back. a(s) is", a(s));
    }
    else console.log("In forward. Can't compute")
}



function test () {
    console.log('m2(s) is', m2(s));
    console.log(m2(s)[0]);
    console.log(m2(s)[1]);
    console.log(m2(s)[2]);
    console.log(m2(s)[3]);
    console.log(m2(s)[4]);
    console.log(m2(s)[5]);
    console.log(m2(s)[6]);
}


function fuu (a) {                                    
  a[5].push(clone([ a[0], a[1], a[2], a[3], a[4], [], a[6] ]));  
  l("In fu. a is", a);
  return a;
}

    function fu (a) {                                    // fu
  a[5].push(clone([ a[0], a[1], a[2], a[3], a[4], [], a[6] ]));  
  l("In fu. a is", a);
    // a[1].push(a[0].pop());
  var result;
  SCORE = a[4];
  var a1;
  console.log( "At the top of fu. a[1].length === 2 && a[2].length === 1", a[1].length === 2 && a[2].length === 1 );
  console.log( "result == 20 && intersection(a1, a[3]).length > 0", result == 20 && intersection(a1, a[3]).length > 0);

  if (a[1].length === 2 && a[2].length === 1)   {
    a1 = a[1];
    result = calc(a[1][0], a[1][1],a[2][0]);
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
 
  console.log( "At the bottom of fu. a[1].length === 2 && a[2].length === 1", a[1].length === 2 && a[2].length === 1 );
  console.log( "result == 20 && intersection(a1, a[3]).length > 0", result == 20 && intersection(a1, a[3]).length > 0);

  if (result == 20 && intersection(a1, a[3]).length > 0) {
      console.log("Last part of fu. a[4][0] is", a[4][0])
      if (a[4][0] === 4) {
          ZWIN = "You win! "
          a[4][0] = 0;
          runRoll(0);
      }
      else {
          var aint = parseInt(a[4][0], 10);
          aint += 1;
          console.log("<><><<>>--> aint is", aint);
          Z = "           Your score increased to " + aint;
          runRoll(aint); 
      }
      console.log("At the very end of fu. m2(s) is", m2(s));
      setTimeout(() => Z = ZWIN = "", 3000);
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
  sfunc();
  return m2(s);
};

var fmon = f => x => x(f);
var reset = x => [1,2,3,4]

var click0 = a => {
    console.log("In click0. a is", a);
    a[1].push(a[0][0])
    a[0].shift();
    m2 = M(a);
    m2(fu);
    // sfunc();
};

/* var click0 = a => {
    a[1].push(a[0].splice(0,1)[0]);
    m2 = M(a);

}; */

var click1 = a => {
    a[1].push(a[0].splice(1,1)[0]);
    m2 = M(a);
    m2 = m2(fu);
};

var click2 = a => {
    a[1].push(a[0].splice(2,1)[0]);
    m2 = M(a);
    m2 = m2(fu);
};

var click3 = a => {
    a[1].push(a[0].splice(3,1)[0]);
    m2 = M(a);
    m2 = m2(fu);
};

function clic0 (m) {
  EEE = "add";
  m[2] = "+";
  m2 = M(m) ;
} 

$: clic1 = m => {
  EEE = "subtract";
  m[2] = "-";
  m2 = M(m) ;
} 

function clic2 (m) {
  EEE = "multiply";
  m[2] = "*";
  m2 = M(m) ;
} 

function clic3 (m) {
  EEE = "divide";
  m[2] = "/";
  m2 = M(m) ;
} 

function clic4 (m) {
  EEE = "concat";
  m[2] = "@"
  m2 = M(m) ;
} 

$: Z = Z;

var m3 = M(3);
var m4 = M(3.1415926535); 

var cube = x => x**3;
var square = x => x*x;
var pow = n => x => x**n;
var add = n => x => 1*x + 1*n;
var mult = n => x => x * n;
var reset2 = n => x => x = n;

function squareFu () {m4 = m4(square)};
function cubeFu () {m4 = m4(cube)};

function divFraction (x) {
    var y = x.split('/');
    if(y.length > 1){
        return (y[0] / y[1])
    }
    else{
        return y[0];
    }
}
var powFu = function powFu (e) {
    var p = divFraction(e.target.value);
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

function intersection (a,b) {return (a.filter(x => b.includes(x)))};
console.log("***********************************************************************")
console.log("<><><><><>typeof update", typeof update);
console.log("***********************************************************************")
