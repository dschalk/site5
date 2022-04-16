import { c as create_ssr_component, e as escape, a as add_attribute } from "../../../chunks/index-63796eb4.js";
var M1 = "/_app/assets/Man1-03e52da6.svg";
var M2 = "/_app/assets/Man2-acf1e6c2.svg";
var M3 = "/_app/assets/Man3-325a1884.svg";
var M4 = "/_app/assets/Man4-7662281e.svg";
var M5 = "/_app/assets/Man5-7a2ac63a.svg";
var M6 = "/_app/assets/Man6-67b739c6.svg";
var M7 = "/_app/assets/Man7-0a5bc6aa.svg";
var M8 = "/_app/assets/Man8-97111ebd.svg";
var M9 = "/_app/assets/Man9-545083c5.svg";
var P1 = "/_app/assets/Pin1-323ffafc.svg";
var P2 = "/_app/assets/Pin2-e6d70245.svg";
var P3 = "/_app/assets/Pin3-ce8c060f.svg";
var P4 = "/_app/assets/Pin4-b18f579b.svg";
var P5 = "/_app/assets/Pin5-845896fc.svg";
var P6 = "/_app/assets/Pin6-39b17b21.svg";
var P7 = "/_app/assets/Pin7-791e1112.svg";
var P8 = "/_app/assets/Pin8-ce2569f0.svg";
var P9 = "/_app/assets/Pin9-c2a09e31.svg";
var S1 = "/_app/assets/Sou1-9feb90ce.svg";
var S2 = "/_app/assets/Sou2-27de0790.svg";
var S3 = "/_app/assets/Sou3-84cf6459.svg";
var S4 = "/_app/assets/Sou4-14cd2aa7.svg";
var S5 = "/_app/assets/Sou5-0aeb90b6.svg";
var S6 = "/_app/assets/Sou6-ce516701.svg";
var S7 = "/_app/assets/Sou7-f9f4bc8a.svg";
var S8 = "/_app/assets/Sou8-88efce5d.svg";
var S9 = "/_app/assets/Sou9-0c0682e2.svg";
var Chun = "/_app/assets/Chun-34b9d3b2.svg";
var Haku = "/_app/assets/Haku-3fa1fb22.svg";
var Hatsu = "/_app/assets/Hatsu-3570c54f.svg";
var Nan = "/_app/assets/Nan-745be89c.svg";
var Pei = "/_app/assets/Pei-0cbcc780.svg";
var Ton = "/_app/assets/Ton-25a9f902.svg";
var Shaa = "/_app/assets/Shaa-bb25f593.svg";
var time_svelte_svelte_type_style_lang = "";
const css = {
  code: "pre.svelte-1hga6un{color:#EEDDFF}img.svelte-1hga6un{background-color:white}",
  map: null
};
function shuffle(a) {
  let arr = a;
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
const Time = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let draws = 0;
  var xyz = [
    M1,
    M2,
    M3,
    M4,
    M5,
    M6,
    M7,
    M8,
    M9,
    P1,
    P2,
    P3,
    P4,
    P5,
    P6,
    P7,
    P8,
    P9,
    S1,
    S2,
    S3,
    S4,
    S5,
    S6,
    S7,
    S8,
    S9,
    Chun,
    Haku,
    Hatsu,
    Nan,
    Pei,
    Ton,
    Shaa,
    M1,
    M2,
    M3,
    M4,
    M5,
    M6,
    M7,
    M8,
    M9,
    P1,
    P2,
    P3,
    P4,
    P5,
    P6,
    P7,
    P8,
    P9,
    S1,
    S2,
    S3,
    S4,
    S5,
    S6,
    S7,
    S8,
    S9,
    Chun,
    Haku,
    Hatsu,
    Nan,
    Pei,
    Ton,
    Shaa,
    M1,
    M2,
    M3,
    M4,
    M5,
    M6,
    M7,
    M8,
    M9,
    P1,
    P2,
    P3,
    P4,
    P5,
    P6,
    P7,
    P8,
    P9,
    S1,
    S2,
    S3,
    S4,
    S5,
    S6,
    S7,
    S8,
    S9,
    Chun,
    Haku,
    Hatsu,
    Nan,
    Pei,
    Ton,
    Shaa,
    M1,
    M2,
    M3,
    M4,
    M5,
    M6,
    M7,
    M8,
    M9,
    P1,
    P2,
    P3,
    P4,
    P5,
    P6,
    P7,
    P8,
    P9,
    S1,
    S2,
    S3,
    S4,
    S5,
    S6,
    S7,
    S8,
    S9,
    Chun,
    Haku,
    Hatsu,
    Nan,
    Pei,
    Ton,
    Shaa
  ];
  console.log("===== xyz: ============================================");
  console.log(xyz);
  var xxx = shuffle(xyz);
  console.log("===== xxx: ============================================");
  console.log(xxx);
  var yyy = shuffle(xxx);
  console.log("===== yyy: ============================================");
  console.log(yyy);
  var zzz = shuffle(yyy);
  console.log("===== zzz: ============================================");
  console.log(zzz);
  var B = xyz.slice();
  var ARR = B.splice(0, 14);
  console.log("ARR is", ARR);
  console.log("B is", B);
  var Z = B.length;
  [ARR.slice()];
  var ar69 = [];
  var argo;
  ar69 = ar69;
  let index = 0;
  var ar69 = [];
  ar69 = ar69;
  let code = `
    <script>
    import {fade} from "svelte/transition"
    import {flip} from "svelte/animate";

    function shuffle(array) {
      var m = array.length, t, i;
      // While there remain elements to shuffle\u2026
      while (m) {
        // Pick a remaining element\u2026
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
    `;
  $$result.css.add(css);
  argo = () => {
    return ar69.slice();
  };
  return `${$$result.head += `${$$result.title = `<title>Immutable data for time travel.</title>`, ""}`, ""}




    
    
    
    <div style="${"font-family: Times New Roman; text-align: center; font-size: 38px;"}"><p></p>
    Immutable Data Structures
    </div>
    
    <br>
    <p>The tile on the right is your draw. To keep it, double click on the tile you wish to discard or click the drawn tile and then the tile to discard. To discard the drawn tile, click the &quot;Draw&quot; button or double click on the drawn tile. If you click a tile in your hand and then the drawn tile, you will revert to having no clicked tiles.  </p>
    <p>To organize your hand, click on a tile and then click the tile located where you want to place it. This is not the way to place the drawn tile in your hand. Double clicking the tile you wish to discard and clicking the &quot;Draw&quot; button are the only ways to do it. </p> 
    <div>B.length = ${escape(Z)}</div>
    <p><br>    </p><div style="${"color: #FF0000; text-align: center"}"><span id="${"0"}"><img${add_attribute("src", ARR[0], 0)} class="${"svelte-1hga6un"}"></span>
    <span id="${"1"}"><img${add_attribute("src", ARR[1], 0)} class="${"svelte-1hga6un"}"></span>
    <span id="${"2"}"><img${add_attribute("src", ARR[2], 0)} class="${"svelte-1hga6un"}"></span>
    <span id="${"3"}"><img${add_attribute("src", ARR[3], 0)} class="${"svelte-1hga6un"}"></span>
    
    <span id="${"4"}"><img${add_attribute("src", ARR[4], 0)} class="${"svelte-1hga6un"}"></span> 
    
    <span id="${"5"}"><img${add_attribute("src", ARR[5], 0)} class="${"svelte-1hga6un"}"></span>
    
    <span id="${"6"}"><img${add_attribute("src", ARR[6], 0)} class="${"svelte-1hga6un"}"></span>
    <span id="${"7"}"><img${add_attribute("src", ARR[7], 0)} class="${"svelte-1hga6un"}"></span>
    <span id="${"8"}"><img${add_attribute("src", ARR[8], 0)} class="${"svelte-1hga6un"}"></span>
    <span id="${"9"}"><img${add_attribute("src", ARR[9], 0)} class="${"svelte-1hga6un"}"></span>
    <span id="${"10"}"><img${add_attribute("src", ARR[10], 0)} class="${"svelte-1hga6un"}"></span>
    <span id="${"11"}"><img${add_attribute("src", ARR[11], 0)} class="${"svelte-1hga6un"}"></span>
    <span id="${"12"}"><img${add_attribute("src", ARR[12], 0)} class="${"svelte-1hga6un"}"></span>
    <span>. </span>
    <span id="${"13"}"><img${add_attribute("src", ARR[13], 0)} class="${"svelte-1hga6un"}"></span></div>
    
    
    <br><br><br>
    <button>SHUFFLE</button>
    <button>Draw</button> 
    <button>BACK</button>
    <button>Forward</button> 
    
    <br><br>
    <div>index: ${escape(index)}</div>
    <div>draws: ${escape(draws)}</div>
    <div>Current tile indeces: ${escape(ARR)}</div>
    <div>ar69: ${escape(argo())}</div>
    <br>
    <p>This module is in the &quot;Riichi_Mahjong&quot; and &quot;Functional_JavaScript&quot; section. Beginners could use it to arrange hands according to the five-block method.</p>
    <p>After railing against mindlessly making variables immutable, I wanted to show that immutability sometimes serves a purpose, even in small, isolated modules such as this. As is apparent from the code below, each state of the Riichi Mahjong tiles is cloned deep enough to preserve it in an array that can be traversed. I could have used numbers for this, but Mahjong tiles make a more pleasing illustration.</p>
    <p>Events: An array, &quot;B&quot;,  of all Riichi Mahjong tiles is shuffled. Then 14 members are spliced from its front, 13 for the hand and one for the first draw. Each time you click &quot;Draw&quot; or double-click the 14th tile, a number n (corresponding to image xyz[n] in the presentation) is spliced from the front of B. The code is at https://github.com/dschalk/blog.schalk.site and is also shown below: </p>
    <pre class="${"svelte-1hga6un"}">${escape(code)}</pre>`;
});
export { Time as default };
