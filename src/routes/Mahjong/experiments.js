
  

    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    
    let draws = 0;
    
    import M1 from '../images/Man1.svg';
    import M2 from '../images/Man2.svg';
    import M3 from '../images/Man3.svg';
    import M4 from '../images/Man4.svg';
    import M5 from '../images/Man5.svg';
    import M6 from '../images/Man6.svg';
    import M7 from '../images/Man7.svg';
    import M8 from '../images/Man8.svg';
    import M9 from '../images/Man9.svg';
    
    import P1 from '../images/Pin1.svg';
    import P2 from '../images/Pin2.svg';
    import P3 from '../images/Pin3.svg';
    import P4 from '../images/Pin4.svg';
    import P5 from '../images/Pin5.svg';
    import P6 from '../images/Pin6.svg';
    import P7 from '../images/Pin7.svg';
    import P8 from '../images/Pin8.svg';
    import P9 from '../images/Pin9.svg';
    
    import S1 from '../images/Sou1.svg';
    import S2 from '../images/Sou2.svg';
    import S3 from '../images/Sou3.svg';
    import S4 from '../images/Sou4.svg';
    import S5 from '../images/Sou5.svg';
    import S6 from '../images/Sou6.svg';
    import S7 from '../images/Sou7.svg';
    import S8 from '../images/Sou8.svg';
    import S9 from '../images/Sou9.svg';
    
    import Back from '../images/Back.svg';
    import Blank from '../images/Blank.svg'
    
    import Chun from '../images/Chun.svg'
    import Haku from '../images/Haku.svg'
    import Hatsu from '../images/Hatsu.svg'
    
    import Nan from '../images/Nan.svg'
    import Pei from '../images/Pei.svg'
    import Ton from '../images/Ton.svg'
    import Shaa from '../images/Shaa.svg'

    var xyz = [M1,M2,M3,M4,M5,M6,M7,M8,M9,P1,P2,P3,P4,P5,P6,P7,P8,P9,S1,S2,S3,S4,S5,S6,S7,S8,S9,Chun,Haku,Hatsu,Nan,Pei,Ton,Shaa,M1,M2,M3,M4,M5,M6,M7,M8,M9,P1,P2,P3,P4,P5,P6,P7,P8,P9,S1,S2,S3,S4,S5,S6,S7,S8,S9,Chun,Haku,Hatsu,Nan,Pei,Ton,Shaa,M1,M2,M3,M4,M5,M6,M7,M8,M9,P1,P2,P3,P4,P5,P6,P7,P8,P9,S1,S2,S3,S4,S5,S6,S7,S8,S9,Chun,Haku,Hatsu,Nan,Pei,Ton,Shaa,M1,M2,M3,M4,M5,M6,M7,M8,M9,P1,P2,P3,P4,P5,P6,P7,P8,P9,S1,S2,S3,S4,S5,S6,S7,S8,S9,Chun,Haku,Hatsu,Nan,Pei,Ton,Shaa]
     
    function fu (a,x) {
        var ar = a.filter(v => v == x);
        // var arr = ar.forEach(e => xyz[e]);
        return ar;
    }
    
    console.log("fu([6,3,4,4,5,6,6,6],6)", fu([6,3,4,4,5,6,6,6],6))
    var BB = xyz.slice();
    var A = Array.from(Array(34).keys())
    var AAAA = A.concat(A).concat(A).concat(A);
    console.log("AAAA.length", AAAA.length); 
    var B = AAAA.slice();
    console.log("xyz.length / 4", xyz.length/4);
    var ANDY = [];
    var JOE = fu(B,7);
    JOE = JOE;
    console.log("JOE IS", JOE);
    var TEDDY = B.forEach(k => ANDY.concat(fu(B,k)));
    console.log("++++++++++++++++++++++++++++++++==================================+++++++++++++++++++++++++++")
    var SUE = B.forEach(dk => ANDY.push(fu(B,dk)));
    SUE = SUE;
    ANDY = ANDY;
    console.log("ANDY is", ANDY);
    console.log("SUE is", SUE);
    var PETE = [];
    
    B = shuffle(B);
    var ARR = B.splice(0,14);   
    var ARCHIVE = [ARR.slice()];
    var ar69 = [];
    var argo;
    $:   argo = () => {return ar69.slice()};
    ar69 = ar69;
    let index = 0;

    function shuf() {
        B = A.slice()
        B = shuffle(B);
        ARR = B.splice(0,14);
        console.log("ARR is", ARR);
        console.log ("B is", B);
        ARCHIVE = [ARR];
        index = 0;
        draws = 0;
        ar69 = [];
        ARCHIVE = [ARR].slice();
        return ARR; 
    }

    function back () {
        if (index > 0) {
            index = index - 1;
            ARR = ARCHIVE[index]
        }
    }
    
    function forward () {
        if (index < ARCHIVE.length - 1) {
            index = index + 1; 
            ARR = ARCHIVE[index]
        };
    }
    
    function sw (ar) {
        ARR = ARR.slice();
        var a, b, c, d;
        [a,b,c,d] = ar;
        if (a < c) {
            for (let i = a; i < c; i+=1) {
                ARR[i] = ARR[i+1]
            }
            ARR[c] = b;
            index = index + 1;
            ar69 = []; 
        ARCHIVE.splice(ARCHIVE.length, 0, ARR.slice());
        ARCHIVE = ARCHIVE.slice();
        }
        else if (a > c) {
            for (let i = a; i > c; i-=1) {
                ARR[i] = ARR[i-1]
            }
            ARR[c] = b;
            index = index + 1;
            ar69 = ar69;
        ARCHIVE.splice(ARCHIVE.length, 0, ARR.slice());
        ARCHIVE = ARCHIVE.slice();
        setTimeout(() => ar69 = [], 300);
        }
        else if (a === c) {
            // setTimeout(() => ar69 = [], 300);
            getR();
        } 
        console.log("In sw() -- ARCHIVE is", ARCHIVE); 
    }   
    var ar69 = [];
    
    function sky (a) {
        if (ar69.length === 0) ar69 = a
        else if (ar69.length === 2) {
                ar69 = ar69.concat(a);
                if (ar69[0] === 13 && ar69[2] === 13) {
                    index = getR();
                }
                else if(ar69[0] === ar69[2]) {
                    ARR[ar69[0]] = ARR[13];
                    index = getR();
                }
                else if (ar69[0] < 13 && ar69[2] < 13) sw(ar69)
                else if (ar69[0] < 13 && ar69[2] === 13) {
                ar69 = [];
                }
                else if (ar69[0] === 13 && ar69[2] < 13) {
                    ARR[ar69[2]] = ARR[13];
                    getR();
                }
                else { console.log("FUBAR"); shuf() }
        }
     };
    
    function getR() {
        draws+=1
        index = index+=1;
        ar69 = [];
        console.log("B is", B);
        ARR[13] = B.splice(0,1)[0];
        console.log("B is", B);
        ARR = ARR;
        ARCHIVE.push(ARR.slice());
        ARCHIVE = JSON.parse(JSON.stringify(ARCHIVE)); 
        console.log("In getR() -- ARCHIVE is", ARCHIVE); 
        return index;
    }

    // shuf();
    ar69 = ar69;
    
    let code = `
    <script>
    import {fade} from "svelte/transition"
    import {flip} from "svelte/animate";

    function shuffle(array) {
      var m = array.length, t, i;
      // While there remain elements to shuffle…
      while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
    
      return array;
    }
    
    let draws = 0;
    
    import M1 from '$lib\images/Man1.svg';
    import M2 from '$lib\images/Man2.svg';
    import M3 from '$lib\images/Man3.svg';
    import M4 from '$lib\images/Man4.svg';
    import M5 from '$lib\images/Man5.svg';
    import M6 from '$lib\images/Man6.svg';
    import M7 from '$lib\images/Man7.svg';
    import M8 from '$lib\images/Man8.svg';
    import M9 from '$lib\images/Man9.svg';
    
    import P1 from '$lib\images/Pin1.svg';
    import P2 from '$lib\images/Pin2.svg';
    import P3 from '$lib\images/Pin3.svg';
    import P4 from '$lib\images/Pin4.svg';
    import P5 from '$lib\images/Pin5.svg';
    import P6 from '$lib\images/Pin6.svg';
    import P7 from '$lib\images/Pin7.svg';
    import P8 from '$lib\images/Pin8.svg';
    import P9 from '$lib\images/Pin9.svg';
    
    import S1 from '$lib\images/Sou1.svg';
    import S2 from '$lib\images/Sou2.svg';
    import S3 from '$lib\images/Sou3.svg';
    import S4 from '$lib\images/Sou4.svg';
    import S5 from '$lib\images/Sou5.svg';
    import S6 from '$lib\images/Sou6.svg';
    import S7 from '$lib\images/Sou7.svg';
    import S8 from '$lib\images/Sou8.svg';
    import S9 from '$lib\images/Sou9.svg';
    
    import Back from '$lib\images/Back.svg';
    import Blank from '$lib\images/Blank.svg'
    
    import Chun from '$lib\images/Chun.svg'
    import Haku from '$lib\images/Haku.svg'
    import Hatsu from '$lib\images/Hatsu.svg'
    
    import Nan from '$lib\images/Nan.svg'
    import Pei from '$lib\images/Pei.svg'
    import Ton from '$lib\images/Ton.svg'
    import Shaa from '$lib\images/Shaa.svg'
    
    var xyz = [M1,M2,M3,M4,M5,M6,M7,M8,M9,P1,P2,P3,P4,P5,P6,P7,P8,P9,S1,S2,S3,S4,S5,S6,S7,S8,S9,Chun,Haku,Hatsu,Nan,Pei,Ton,Shaa,M1,M2,M3,M4,M5,M6,M7,M8,M9,P1,P2,P3,P4,P5,P6,P7,P8,P9,S1,S2,S3,S4,S5,S6,S7,S8,S9,Chun,Haku,Hatsu,Nan,Pei,Ton,Shaa,M1,M2,M3,M4,M5,M6,M7,M8,M9,P1,P2,P3,P4,P5,P6,P7,P8,P9,S1,S2,S3,S4,S5,S6,S7,S8,S9,Chun,Haku,Hatsu,Nan,Pei,Ton,Shaa,M1,M2,M3,M4,M5,M6,M7,M8,M9,P1,P2,P3,P4,P5,P6,P7,P8,P9,S1,S2,S3,S4,S5,S6,S7,S8,S9,Chun,Haku,Hatsu,Nan,Pei,Ton,Shaa]
    
    var A = Array.from(Array(136).keys())
    var B = A.slice();
    B = shuffle(B);
    var ARR = B.splice(0,14);   
    var ARCHIVE = [ARR.slice()];
    var ar69 = [];
    var argo;
    $:   argo = () => {return ar69.slice()};
    ar69 = ar69;
    let index = 0;

    function shuf() {
        B = A.slice()
        B = shuffle(B);
        ARR = B.splice(0,14);
        ARCHIVE = [ARR];
        index = 0;
        draws = 0;
        ar69 = [];
        ARCHIVE = [ARR].slice();
        return ARR; 
    }

    function back () {
        if (index > 0) {
            index = index - 1;
            ARR = ARCHIVE[index]
        }
    }
    
    function forward () {
        if (index < ARCHIVE.length - 1) {
            index = index + 1; 
            ARR = ARCHIVE[index]
        };
    }
    
    function sw (ar) {
        ARR = ARR.slice();
        var a, b, c, d;
        [a,b,c,d] = ar;
        if (a < c) {
            for (let i = a; i < c; i+=1) {
                ARR[i] = ARR[i+1]
            }
            ARR[c] = b;
            index = index + 1;
            ar69 = []; 
        ARCHIVE.splice(ARCHIVE.length, 0, ARR.slice());
        ARCHIVE = ARCHIVE.slice();
        }
        else if (a > c) {
            for (let i = a; i > c; i-=1) {
                ARR[i] = ARR[i-1]
            }
            ARR[c] = b;
            index = index + 1;
            ar69 = ar69;
        ARCHIVE.splice(ARCHIVE.length, 0, ARR.slice());
        ARCHIVE = ARCHIVE.slice();
        setTimeout(() => ar69 = [], 300);
        }
        else if (a === c) {
            // setTimeout(() => ar69 = [], 300);
            getR();
        } 
        console.log("ARCHIVE is", ARCHIVE); 
    }   
    var ar69 = [];
    
    function sky (a) {
        if (ar69.length === 0) ar69 = a
        else if (ar69.length === 2) {
                ar69 = ar69.concat(a);
                if (ar69[0] === 13 && ar69[2] === 13) {
                    index = getR();
                }
                else if(ar69[0] === ar69[2]) {
                    ARR[ar69[0]] = ARR[13];
                    index = getR();
                }
                else if (ar69[0] < 13 && ar69[2] < 13) sw(ar69)
                else { console.log("FUBAR"); shuf() }
        }
     };
    
    function getR() {
        draws+=1
        index = index + i;
        ar69 = [];
        ARR[13] = B.splice(0,1)[0];
        ARR = ARR;
        ARCHIVE.push(ARR.slice());
        ARCHIVE = JSON.parse(JSON.stringify(ARCHIVE));
        console.log("ARCHIVE is", ARCHIVE); 
        return index;
    }
    `  
   console.log("ARR is", ARR);
    