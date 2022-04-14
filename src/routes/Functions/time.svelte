<svelte:head>
	<title>Immutable data for time travel.</title>
</svelte:head>

<script>
    import {fade} from "svelte/transition";
    import {flip} from "svelte/animate"

    function shuffle(a) {
        let arr = a;
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

    console.log("===== xyz: ============================================");
    console.log(xyz)
    var xxx = shuffle(xyz);
    console.log("===== xxx: ============================================");
    console.log(xxx)
    var yyy = shuffle(xxx);
    console.log("===== yyy: ============================================");
    console.log(yyy)
    var zzz = shuffle(yyy);
    console.log("===== zzz: ============================================");
    console.log(zzz)



    var B = xyz.slice();
    var ARR = B.splice(0,14);   
    console.log("ARR is", ARR);
    console.log("B is", B);
    var Z = B.length;
    var ARCHIVE = [ARR.slice()];
    var ar69 = [];
    var argo;
    $:   argo = () => {return ar69.slice()};
    ar69 = ar69;
    let index = 0;

    function shuf() {
        B = xyz.slice();
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
        console.log("In sw() -- ARCHIVE is", ARCHIVE); 
    }   
    var ar69 = [];
    
    function sky (a) {
        ar69.push(a);
        if (ar69.length === 2) {
                if (ar69[0] === 13 && ar69[1] === 13) {
                    ARR[13] = B.splice(0,1)[0];
                    index += 1;
                }
                else if(ar69[0] === ar69[1]) {
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
        ARR[13] = B.splice(0,1)[0];
        Z = B.length;
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
    
    import M1 from 'images/Man1.svg';
    import M2 from 'images/Man2.svg';
    import M3 from 'images/Man3.svg';
    import M4 from 'images/Man4.svg';
    import M5 from 'images/Man5.svg';
    import M6 from 'images/Man6.svg';
    import M7 from 'images/Man7.svg';
    import M8 from 'images/Man8.svg';
    import M9 from 'images/Man9.svg';
    
    import P1 from 'images/Pin1.svg';
    import P2 from 'images/Pin2.svg';
    import P3 from 'images/Pin3.svg';
    import P4 from 'images/Pin4.svg';
    import P5 from 'images/Pin5.svg';
    import P6 from 'images/Pin6.svg';
    import P7 from 'images/Pin7.svg';
    import P8 from 'images/Pin8.svg';
    import P9 from 'images/Pin9.svg';
    
    import S1 from 'images/Sou1.svg';
    import S2 from 'images/Sou2.svg';
    import S3 from 'images/Sou3.svg';
    import S4 from 'images/Sou4.svg';
    import S5 from 'images/Sou5.svg';
    import S6 from 'images/Sou6.svg';
    import S7 from 'images/Sou7.svg';
    import S8 from 'images/Sou8.svg';
    import S9 from 'images/Sou9.svg';
    
    import Back from 'images/Back.svg';
    import Blank from 'images/Blank.svg'
    
    import Chun from 'images/Chun.svg'
    import Haku from 'images/Haku.svg'
    import Hatsu from 'images/Hatsu.svg'
    
    import Nan from 'images/Nan.svg'
    import Pei from 'images/Pei.svg'
    import Ton from 'images/Ton.svg'
    import Shaa from 'images/Shaa.svg'
    
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
        B = xyz.slice()
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
    
    </script>


    <style>
    pre {color: #EEDDFF}
    img {background-color: white;}
    </style>
    
    
    <div     style = "font-family: Times New Roman;  text-align: center; font-size: 38px;" transition:fade>
        <p></p>
    Immutable Data Structures
    </div>
    <!-- <h2>Preserving records of past states</h2> -->
    <br>
    <p>The tile on the right is your draw. To keep it, double click on the tile you wish to discard or click the drawn tile and then the tile to discard. To discard the drawn tile, click the "Draw" button or double click on the drawn tile. If you click a tile in your hand and then the drawn tile, you will revert to having no clicked tiles.  </p>
    <p> To organize your hand, click on a tile and then click the tile located where you want to place it. This is not the way to place the drawn tile in your hand. Double clicking the tile you wish to discard and clicking the "Draw" button are the only ways to do it. </p> 
    <div>B.length = {Z}</div>
    <p> <br>    <div style = "color: #FF0000; text-align: center">
    <span   id = 0 on:click = {() => sky([0, ARR[0]] )}><img src={ARR[0]}></span>
    <span   id = 1 on:click = {() => sky([1, ARR[1]] )}><img src={ARR[1]}></span>
    <span   id = 2 on:click = {() => sky([2, ARR[2]] )}><img src={ARR[2]}></span>
    <span   id = 3 on:click = {() => sky([3, ARR[3]] )}><img src={ARR[3]}></span>
    
    <span   id = 4 on:click = {() => sky([4, ARR[4]] )}><img src={ARR[4]}></span> 
    
    <span   id = 5 on:click = {() => sky([5, ARR[5]] )}><img src={ARR[5]}></span>
    
    <span   id = 6 on:click = {() => sky([6, ARR[6]] )}><img src={ARR[6]}></span>
    <span   id = 7 on:click = {() => sky([7, ARR[7]] )}><img src={ARR[7]}></span>
    <span   id = 8 on:click = {() => sky([8, ARR[8]] )}><img src={ARR[8]}></span>
    <span   id = 9 on:click = {() => sky([9, ARR[9]] )}><img src={ARR[9]}></span>
    <span   id = 10 on:click = {() => sky([10, ARR[10]] )}><img src={ARR[10]}></span>
    <span   id = 11 on:click = {() => sky([11, ARR[11]] )}><img src={ARR[11]}></span>
    <span   id = 12 on:click = {() => sky([12, ARR[12]] )}><img src={ARR[12]}></span>
    <span> . </span>
    <span   id = 13 on:click = {() => sky([13, ARR[13]] )}><img src={ARR[13]}></span>
    </div>
    <!--<span   id = 13 on:click = {() => sky([13, xx[draw] )}><img src={xx[    draw]]}></span>-->
    
    <br><br><br>
    <button on:click = {shuf}>SHUFFLE</button>
    <button on:click={getR}>Draw</button> 
    <button on:click = {back}>BACK</button>
    <button on:click={forward}>Forward</button> 
    
    <br><br>
    <div>index: {index}</div>
    <div>draws: {draws}</div>
    <div>Current tile indeces: {ARR}</div>
    <div>ar69: {argo()}</div>
    <br>
    <p>This module is in the "Riichi_Mahjong" and "Functional_JavaScript" section. Beginners could use it to arrange hands according to the five-block method.</p>
    <p> After railing against mindlessly making variables immutable, I wanted to show that immutability sometimes serves a purpose, even in small, isolated modules such as this. As is apparent from the code below, each state of the Riichi Mahjong tiles is cloned deep enough to preserve it in an array that can be traversed. I could have used numbers for this, but Mahjong tiles make a more pleasing illustration.</p>
    <p> Events: An array, "B",  of all Riichi Mahjong tiles is shuffled. Then 14 members are spliced from its front, 13 for the hand and one for the first draw. Each time you click "Draw" or double-click the 14th tile, a number n (corresponding to image xyz[n] in the presentation) is spliced from the front of B. The code is at https://github.com/dschalk/blog.schalk.site and is also shown below: </p>
    <pre>{code}</pre>

    
    
    
    
    
    
    
    
    
    