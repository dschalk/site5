import{S as ti,i as li,s as oi,k as m,e as l,t as M,Q as ni,d as e,m as p,c as o,a as v,h as b,f as zs,P as _,b as r,g as f,G as a,L as k,j as Gs,M as ci,N as ii,T as fi,O as ri}from"../../chunks/vendor-a263fa63.js";var Se="/_app/assets/Man1-03e52da6.svg",Pe="/_app/assets/Man2-acf1e6c2.svg",Re="/_app/assets/Man3-325a1884.svg",Me="/_app/assets/Man4-7662281e.svg",be="/_app/assets/Man5-7a2ac63a.svg",ke="/_app/assets/Man6-67b739c6.svg",Ae="/_app/assets/Man7-0a5bc6aa.svg",Ee="/_app/assets/Man8-97111ebd.svg",we="/_app/assets/Man9-545083c5.svg",Ie="/_app/assets/Pin1-323ffafc.svg",ye="/_app/assets/Pin2-e6d70245.svg",He="/_app/assets/Pin3-ce8c060f.svg",Be="/_app/assets/Pin4-b18f579b.svg",Te="/_app/assets/Pin5-845896fc.svg",Ce="/_app/assets/Pin6-39b17b21.svg",Ne="/_app/assets/Pin7-791e1112.svg",Ve="/_app/assets/Pin8-ce2569f0.svg",De="/_app/assets/Pin9-c2a09e31.svg",ze="/_app/assets/Sou1-9feb90ce.svg",Ge="/_app/assets/Sou2-27de0790.svg",Fe="/_app/assets/Sou3-84cf6459.svg",je="/_app/assets/Sou4-14cd2aa7.svg",Oe="/_app/assets/Sou5-0aeb90b6.svg",Ue="/_app/assets/Sou6-ce516701.svg",Je="/_app/assets/Sou7-f9f4bc8a.svg",qe="/_app/assets/Sou8-88efce5d.svg",Le="/_app/assets/Sou9-0c0682e2.svg",Ke="/_app/assets/Chun-34b9d3b2.svg",Qe="/_app/assets/Haku-3fa1fb22.svg",We="/_app/assets/Hatsu-3570c54f.svg",Ze="/_app/assets/Nan-745be89c.svg",Xe="/_app/assets/Pei-0cbcc780.svg",Ye="/_app/assets/Ton-25a9f902.svg",xe="/_app/assets/Shaa-bb25f593.svg";function ui(c){let w,n,H,J,B,ss,Rs,E,t,Ms,d,z,S,es,G,Hs,bs,h,P,q,Bs,u,F,C,ks,Ts,j,N,As,Cs,O,V,Es,Ns,U,y,T,as,A,D,I,sa,is,L,Fs,ea,rs,K,js,aa,ts,Q,Os,ia,ls,W,Us,ra,os,Z,Js,ta,ns,X,qs,la,cs,Y,Ls,oa,fs,x,Ks,na,Vs,ca,fa,us,$,Qs,Ws,Zs,Xs,Ys,xs,ms,ua,$s,ps,ma,se,vs,pa,ee,hs,va,ae,ie,re,te,gs,ha,le,oe,_s,ga,ne,ce,ds,_a,fe,ue,Ss,da,Ds=c[3]()+"",me,pe,ve,he,ws,Sa,ge,Is,Pa,_e,ys,Ra,de,Ps,Ma,R,ba,Ba;return{c(){w=m(),n=l("div"),H=l("p"),J=M(`\r
    Immutable Data Structures`),ss=m(),Rs=l("br"),E=m(),t=l("p"),Ms=M('The tile on the right is your draw. To keep it, double click on the tile you wish to discard or click the drawn tile and then the tile to discard. To discard the drawn tile, click the "Draw" button or double click on the drawn tile. If you click a tile in your hand and then the drawn tile, you will revert to having no clicked tiles.'),d=m(),z=l("p"),S=M('To organize your hand, click on a tile and then click the tile located where you want to place it. This is not the way to place the drawn tile in your hand. Double clicking the tile you wish to discard and clicking the "Draw" button are the only ways to do it.'),es=m(),G=l("div"),Hs=M("B.length = "),bs=M(c[2]),h=m(),P=l("p"),q=l("br"),Bs=m(),u=l("div"),F=l("span"),C=l("img"),Ts=m(),j=l("span"),N=l("img"),Cs=m(),O=l("span"),V=l("img"),Ns=m(),U=l("span"),y=l("img"),as=m(),A=l("span"),D=l("img"),sa=m(),is=l("span"),L=l("img"),ea=m(),rs=l("span"),K=l("img"),aa=m(),ts=l("span"),Q=l("img"),ia=m(),ls=l("span"),W=l("img"),ra=m(),os=l("span"),Z=l("img"),ta=m(),ns=l("span"),X=l("img"),la=m(),cs=l("span"),Y=l("img"),oa=m(),fs=l("span"),x=l("img"),na=m(),Vs=l("span"),ca=M("."),fa=m(),us=l("span"),$=l("img"),Ws=m(),Zs=l("br"),Xs=l("br"),Ys=l("br"),xs=m(),ms=l("button"),ua=M("SHUFFLE"),$s=m(),ps=l("button"),ma=M("Draw"),se=m(),vs=l("button"),pa=M("BACK"),ee=m(),hs=l("button"),va=M("Forward"),ae=m(),ie=l("br"),re=l("br"),te=m(),gs=l("div"),ha=M("index: "),le=M(c[4]),oe=m(),_s=l("div"),ga=M("draws: "),ne=M(c[0]),ce=m(),ds=l("div"),_a=M("Current tile indeces: "),fe=M(c[1]),ue=m(),Ss=l("div"),da=M("ar69: "),me=M(Ds),pe=m(),ve=l("br"),he=m(),ws=l("p"),Sa=M('This module is in the "Riichi_Mahjong" and "Functional_JavaScript" section. Beginners could use it to arrange hands according to the five-block method.'),ge=m(),Is=l("p"),Pa=M("After railing against mindlessly making variables immutable, I wanted to show that immutability sometimes serves a purpose, even in small, isolated modules such as this. As is apparent from the code below, each state of the Riichi Mahjong tiles is cloned deep enough to preserve it in an array that can be traversed. I could have used numbers for this, but Mahjong tiles make a more pleasing illustration."),_e=m(),ys=l("p"),Ra=M('Events: An array, "B",  of all Riichi Mahjong tiles is shuffled. Then 14 members are spliced from its front, 13 for the hand and one for the first draw. Each time you click "Draw" or double-click the 14th tile, a number n (corresponding to image xyz[n] in the presentation) is spliced from the front of B. The code is at https://github.com/dschalk/blog.schalk.site and is also shown below:'),de=m(),Ps=l("pre"),Ma=M(c[10]),this.h()},l(s){ni('[data-svelte="svelte-ix7nim"]',document.head).forEach(e),w=p(s),n=o(s,"DIV",{style:!0});var ka=v(n);H=o(ka,"P",{}),v(H).forEach(e),J=b(ka,`\r
    Immutable Data Structures`),ka.forEach(e),ss=p(s),Rs=o(s,"BR",{}),E=p(s),t=o(s,"P",{});var Ta=v(t);Ms=b(Ta,'The tile on the right is your draw. To keep it, double click on the tile you wish to discard or click the drawn tile and then the tile to discard. To discard the drawn tile, click the "Draw" button or double click on the drawn tile. If you click a tile in your hand and then the drawn tile, you will revert to having no clicked tiles.'),Ta.forEach(e),d=p(s),z=o(s,"P",{});var Ca=v(z);S=b(Ca,'To organize your hand, click on a tile and then click the tile located where you want to place it. This is not the way to place the drawn tile in your hand. Double clicking the tile you wish to discard and clicking the "Draw" button are the only ways to do it.'),Ca.forEach(e),es=p(s),G=o(s,"DIV",{});var Aa=v(G);Hs=b(Aa,"B.length = "),bs=b(Aa,c[2]),Aa.forEach(e),h=p(s),P=o(s,"P",{});var Ea=v(P);q=o(Ea,"BR",{}),Bs=p(Ea),Ea.forEach(e),u=o(s,"DIV",{style:!0});var g=v(u);F=o(g,"SPAN",{id:!0});var Na=v(F);C=o(Na,"IMG",{src:!0,class:!0}),Na.forEach(e),Ts=p(g),j=o(g,"SPAN",{id:!0});var Va=v(j);N=o(Va,"IMG",{src:!0,class:!0}),Va.forEach(e),Cs=p(g),O=o(g,"SPAN",{id:!0});var Da=v(O);V=o(Da,"IMG",{src:!0,class:!0}),Da.forEach(e),Ns=p(g),U=o(g,"SPAN",{id:!0});var za=v(U);y=o(za,"IMG",{src:!0,class:!0}),za.forEach(e),as=p(g),A=o(g,"SPAN",{id:!0});var Ga=v(A);D=o(Ga,"IMG",{src:!0,class:!0}),Ga.forEach(e),sa=p(g),is=o(g,"SPAN",{id:!0});var Fa=v(is);L=o(Fa,"IMG",{src:!0,class:!0}),Fa.forEach(e),ea=p(g),rs=o(g,"SPAN",{id:!0});var ja=v(rs);K=o(ja,"IMG",{src:!0,class:!0}),ja.forEach(e),aa=p(g),ts=o(g,"SPAN",{id:!0});var Oa=v(ts);Q=o(Oa,"IMG",{src:!0,class:!0}),Oa.forEach(e),ia=p(g),ls=o(g,"SPAN",{id:!0});var Ua=v(ls);W=o(Ua,"IMG",{src:!0,class:!0}),Ua.forEach(e),ra=p(g),os=o(g,"SPAN",{id:!0});var Ja=v(os);Z=o(Ja,"IMG",{src:!0,class:!0}),Ja.forEach(e),ta=p(g),ns=o(g,"SPAN",{id:!0});var qa=v(ns);X=o(qa,"IMG",{src:!0,class:!0}),qa.forEach(e),la=p(g),cs=o(g,"SPAN",{id:!0});var La=v(cs);Y=o(La,"IMG",{src:!0,class:!0}),La.forEach(e),oa=p(g),fs=o(g,"SPAN",{id:!0});var Ka=v(fs);x=o(Ka,"IMG",{src:!0,class:!0}),Ka.forEach(e),na=p(g),Vs=o(g,"SPAN",{});var Qa=v(Vs);ca=b(Qa,"."),Qa.forEach(e),fa=p(g),us=o(g,"SPAN",{id:!0});var Wa=v(us);$=o(Wa,"IMG",{src:!0,class:!0}),Wa.forEach(e),g.forEach(e),Ws=p(s),Zs=o(s,"BR",{}),Xs=o(s,"BR",{}),Ys=o(s,"BR",{}),xs=p(s),ms=o(s,"BUTTON",{});var Za=v(ms);ua=b(Za,"SHUFFLE"),Za.forEach(e),$s=p(s),ps=o(s,"BUTTON",{});var Xa=v(ps);ma=b(Xa,"Draw"),Xa.forEach(e),se=p(s),vs=o(s,"BUTTON",{});var Ya=v(vs);pa=b(Ya,"BACK"),Ya.forEach(e),ee=p(s),hs=o(s,"BUTTON",{});var xa=v(hs);va=b(xa,"Forward"),xa.forEach(e),ae=p(s),ie=o(s,"BR",{}),re=o(s,"BR",{}),te=p(s),gs=o(s,"DIV",{});var wa=v(gs);ha=b(wa,"index: "),le=b(wa,c[4]),wa.forEach(e),oe=p(s),_s=o(s,"DIV",{});var Ia=v(_s);ga=b(Ia,"draws: "),ne=b(Ia,c[0]),Ia.forEach(e),ce=p(s),ds=o(s,"DIV",{});var ya=v(ds);_a=b(ya,"Current tile indeces: "),fe=b(ya,c[1]),ya.forEach(e),ue=p(s),Ss=o(s,"DIV",{});var Ha=v(Ss);da=b(Ha,"ar69: "),me=b(Ha,Ds),Ha.forEach(e),pe=p(s),ve=o(s,"BR",{}),he=p(s),ws=o(s,"P",{});var $a=v(ws);Sa=b($a,'This module is in the "Riichi_Mahjong" and "Functional_JavaScript" section. Beginners could use it to arrange hands according to the five-block method.'),$a.forEach(e),ge=p(s),Is=o(s,"P",{});var si=v(Is);Pa=b(si,"After railing against mindlessly making variables immutable, I wanted to show that immutability sometimes serves a purpose, even in small, isolated modules such as this. As is apparent from the code below, each state of the Riichi Mahjong tiles is cloned deep enough to preserve it in an array that can be traversed. I could have used numbers for this, but Mahjong tiles make a more pleasing illustration."),si.forEach(e),_e=p(s),ys=o(s,"P",{});var ei=v(ys);Ra=b(ei,'Events: An array, "B",  of all Riichi Mahjong tiles is shuffled. Then 14 members are spliced from its front, 13 for the hand and one for the first draw. Each time you click "Draw" or double-click the 14th tile, a number n (corresponding to image xyz[n] in the presentation) is spliced from the front of B. The code is at https://github.com/dschalk/blog.schalk.site and is also shown below:'),ei.forEach(e),de=p(s),Ps=o(s,"PRE",{class:!0});var ai=v(Ps);Ma=b(ai,c[10]),ai.forEach(e),this.h()},h(){document.title="Immutable data for time travel.",zs(n,"font-family","Times New Roman"),zs(n,"text-align","center"),zs(n,"font-size","38px"),_(C.src,ks=c[1][0])||r(C,"src",ks),r(C,"class","svelte-1hga6un"),r(F,"id","0"),_(N.src,As=c[1][1])||r(N,"src",As),r(N,"class","svelte-1hga6un"),r(j,"id","1"),_(V.src,Es=c[1][2])||r(V,"src",Es),r(V,"class","svelte-1hga6un"),r(O,"id","2"),_(y.src,T=c[1][3])||r(y,"src",T),r(y,"class","svelte-1hga6un"),r(U,"id","3"),_(D.src,I=c[1][4])||r(D,"src",I),r(D,"class","svelte-1hga6un"),r(A,"id","4"),_(L.src,Fs=c[1][5])||r(L,"src",Fs),r(L,"class","svelte-1hga6un"),r(is,"id","5"),_(K.src,js=c[1][6])||r(K,"src",js),r(K,"class","svelte-1hga6un"),r(rs,"id","6"),_(Q.src,Os=c[1][7])||r(Q,"src",Os),r(Q,"class","svelte-1hga6un"),r(ts,"id","7"),_(W.src,Us=c[1][8])||r(W,"src",Us),r(W,"class","svelte-1hga6un"),r(ls,"id","8"),_(Z.src,Js=c[1][9])||r(Z,"src",Js),r(Z,"class","svelte-1hga6un"),r(os,"id","9"),_(X.src,qs=c[1][10])||r(X,"src",qs),r(X,"class","svelte-1hga6un"),r(ns,"id","10"),_(Y.src,Ls=c[1][11])||r(Y,"src",Ls),r(Y,"class","svelte-1hga6un"),r(cs,"id","11"),_(x.src,Ks=c[1][12])||r(x,"src",Ks),r(x,"class","svelte-1hga6un"),r(fs,"id","12"),_($.src,Qs=c[1][13])||r($,"src",Qs),r($,"class","svelte-1hga6un"),r(us,"id","13"),zs(u,"color","#FF0000"),zs(u,"text-align","center"),r(Ps,"class","svelte-1hga6un")},m(s,i){f(s,w,i),f(s,n,i),a(n,H),a(n,J),f(s,ss,i),f(s,Rs,i),f(s,E,i),f(s,t,i),a(t,Ms),f(s,d,i),f(s,z,i),a(z,S),f(s,es,i),f(s,G,i),a(G,Hs),a(G,bs),f(s,h,i),f(s,P,i),a(P,q),a(P,Bs),f(s,u,i),a(u,F),a(F,C),a(u,Ts),a(u,j),a(j,N),a(u,Cs),a(u,O),a(O,V),a(u,Ns),a(u,U),a(U,y),a(u,as),a(u,A),a(A,D),a(u,sa),a(u,is),a(is,L),a(u,ea),a(u,rs),a(rs,K),a(u,aa),a(u,ts),a(ts,Q),a(u,ia),a(u,ls),a(ls,W),a(u,ra),a(u,os),a(os,Z),a(u,ta),a(u,ns),a(ns,X),a(u,la),a(u,cs),a(cs,Y),a(u,oa),a(u,fs),a(fs,x),a(u,na),a(u,Vs),a(Vs,ca),a(u,fa),a(u,us),a(us,$),f(s,Ws,i),f(s,Zs,i),f(s,Xs,i),f(s,Ys,i),f(s,xs,i),f(s,ms,i),a(ms,ua),f(s,$s,i),f(s,ps,i),a(ps,ma),f(s,se,i),f(s,vs,i),a(vs,pa),f(s,ee,i),f(s,hs,i),a(hs,va),f(s,ae,i),f(s,ie,i),f(s,re,i),f(s,te,i),f(s,gs,i),a(gs,ha),a(gs,le),f(s,oe,i),f(s,_s,i),a(_s,ga),a(_s,ne),f(s,ce,i),f(s,ds,i),a(ds,_a),a(ds,fe),f(s,ue,i),f(s,Ss,i),a(Ss,da),a(Ss,me),f(s,pe,i),f(s,ve,i),f(s,he,i),f(s,ws,i),a(ws,Sa),f(s,ge,i),f(s,Is,i),a(Is,Pa),f(s,_e,i),f(s,ys,i),a(ys,Ra),f(s,de,i),f(s,Ps,i),a(Ps,Ma),R=!0,ba||(Ba=[k(F,"click",c[12]),k(j,"click",c[13]),k(O,"click",c[14]),k(U,"click",c[15]),k(A,"click",c[16]),k(is,"click",c[17]),k(rs,"click",c[18]),k(ts,"click",c[19]),k(ls,"click",c[20]),k(os,"click",c[21]),k(ns,"click",c[22]),k(cs,"click",c[23]),k(fs,"click",c[24]),k(us,"click",c[25]),k(ms,"click",c[5]),k(ps,"click",c[9]),k(vs,"click",c[6]),k(hs,"click",c[7])],ba=!0)},p(s,i){(!R||i[0]&4)&&Gs(bs,s[2]),(!R||i[0]&2&&!_(C.src,ks=s[1][0]))&&r(C,"src",ks),(!R||i[0]&2&&!_(N.src,As=s[1][1]))&&r(N,"src",As),(!R||i[0]&2&&!_(V.src,Es=s[1][2]))&&r(V,"src",Es),(!R||i[0]&2&&!_(y.src,T=s[1][3]))&&r(y,"src",T),(!R||i[0]&2&&!_(D.src,I=s[1][4]))&&r(D,"src",I),(!R||i[0]&2&&!_(L.src,Fs=s[1][5]))&&r(L,"src",Fs),(!R||i[0]&2&&!_(K.src,js=s[1][6]))&&r(K,"src",js),(!R||i[0]&2&&!_(Q.src,Os=s[1][7]))&&r(Q,"src",Os),(!R||i[0]&2&&!_(W.src,Us=s[1][8]))&&r(W,"src",Us),(!R||i[0]&2&&!_(Z.src,Js=s[1][9]))&&r(Z,"src",Js),(!R||i[0]&2&&!_(X.src,qs=s[1][10]))&&r(X,"src",qs),(!R||i[0]&2&&!_(Y.src,Ls=s[1][11]))&&r(Y,"src",Ls),(!R||i[0]&2&&!_(x.src,Ks=s[1][12]))&&r(x,"src",Ks),(!R||i[0]&2&&!_($.src,Qs=s[1][13]))&&r($,"src",Qs),(!R||i[0]&16)&&Gs(le,s[4]),(!R||i[0]&1)&&Gs(ne,s[0]),(!R||i[0]&2)&&Gs(fe,s[1]),(!R||i[0]&8)&&Ds!==(Ds=s[3]()+"")&&Gs(me,Ds)},i(s){R||(ci(()=>{B||(B=ii(n,ri,{},!0)),B.run(1)}),R=!0)},o(s){B||(B=ii(n,ri,{},!1)),B.run(0),R=!1},d(s){s&&e(w),s&&e(n),s&&B&&B.end(),s&&e(ss),s&&e(Rs),s&&e(E),s&&e(t),s&&e(d),s&&e(z),s&&e(es),s&&e(G),s&&e(h),s&&e(P),s&&e(u),s&&e(Ws),s&&e(Zs),s&&e(Xs),s&&e(Ys),s&&e(xs),s&&e(ms),s&&e($s),s&&e(ps),s&&e(se),s&&e(vs),s&&e(ee),s&&e(hs),s&&e(ae),s&&e(ie),s&&e(re),s&&e(te),s&&e(gs),s&&e(oe),s&&e(_s),s&&e(ce),s&&e(ds),s&&e(ue),s&&e(Ss),s&&e(pe),s&&e(ve),s&&e(he),s&&e(ws),s&&e(ge),s&&e(Is),s&&e(_e),s&&e(ys),s&&e(de),s&&e(Ps),ba=!1,fi(Ba)}}}function $e(c){let w=c;for(let n=w.length-1;n>0;n--){let H=Math.floor(Math.random()*(n+1));[w[n],w[H]]=[w[H],w[n]]}return w}function mi(c,w,n){let H=0;var J=[Se,Pe,Re,Me,be,ke,Ae,Ee,we,Ie,ye,He,Be,Te,Ce,Ne,Ve,De,ze,Ge,Fe,je,Oe,Ue,Je,qe,Le,Ke,Qe,We,Ze,Xe,Ye,xe,Se,Pe,Re,Me,be,ke,Ae,Ee,we,Ie,ye,He,Be,Te,Ce,Ne,Ve,De,ze,Ge,Fe,je,Oe,Ue,Je,qe,Le,Ke,Qe,We,Ze,Xe,Ye,xe,Se,Pe,Re,Me,be,ke,Ae,Ee,we,Ie,ye,He,Be,Te,Ce,Ne,Ve,De,ze,Ge,Fe,je,Oe,Ue,Je,qe,Le,Ke,Qe,We,Ze,Xe,Ye,xe,Se,Pe,Re,Me,be,ke,Ae,Ee,we,Ie,ye,He,Be,Te,Ce,Ne,Ve,De,ze,Ge,Fe,je,Oe,Ue,Je,qe,Le,Ke,Qe,We,Ze,Xe,Ye,xe];console.log("===== xyz: ============================================"),console.log(J);var B=$e(J);console.log("===== xxx: ============================================"),console.log(B);var ss=$e(B);console.log("===== yyy: ============================================"),console.log(ss);var Rs=$e(ss);console.log("===== zzz: ============================================"),console.log(Rs);var E=J.slice(),t=E.splice(0,14);console.log("ARR is",t),console.log("B is",E);var Ms=E.length,d=[t.slice()],h=[],z;h=h;let S=0;function es(){return E=J.slice(),E=$e(E),n(1,t=E.splice(0,14)),d=[t],n(4,S=0),n(0,H=0),n(11,h=[]),d=[t].slice(),t}function G(){S>0&&(n(4,S=S-1),n(1,t=d[S]))}function Hs(){S<d.length-1&&(n(4,S=S+1),n(1,t=d[S]))}function bs(y){n(1,t=t.slice());var T,as,A,D;if([T,as,A,D]=y,T<A){for(let I=T;I<A;I+=1)n(1,t[I]=t[I+1],t);n(1,t[A]=as,t),n(4,S=S+1),n(11,h=[]),d.splice(d.length,0,t.slice()),d=d.slice()}else if(T>A){for(let I=T;I>A;I-=1)n(1,t[I]=t[I-1],t);n(1,t[A]=as,t),n(4,S=S+1),n(11,h),d.splice(d.length,0,t.slice()),d=d.slice(),setTimeout(()=>n(11,h=[]),300)}else T===A&&q();console.log("In sw() -- ARCHIVE is",d)}var h=[];function P(y){h.push(y),h.length===2&&(h[0]===13&&h[1]===13?(n(1,t[13]=E.splice(0,1)[0],t),n(4,S+=1)):h[0]===h[1]?(n(1,t[h[0]]=t[13],t),n(4,S=q())):h[0]<13&&h[2]<13?bs(h):h[0]<13&&h[2]===13?n(11,h=[]):h[0]===13&&h[2]<13?(n(1,t[h[2]]=t[13],t),q()):(console.log("FUBAR"),es()))}function q(){return n(0,H+=1),n(4,S=n(4,S+=1)),n(11,h=[]),n(1,t[13]=E.splice(0,1)[0],t),n(2,Ms=E.length),n(1,t),d.push(t.slice()),d=JSON.parse(JSON.stringify(d)),console.log("In getR() -- ARCHIVE is",d),S}h=h;let Bs=`
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
    `;const u=()=>P([0,t[0]]),F=()=>P([1,t[1]]),C=()=>P([2,t[2]]),ks=()=>P([3,t[3]]),Ts=()=>P([4,t[4]]),j=()=>P([5,t[5]]),N=()=>P([6,t[6]]),As=()=>P([7,t[7]]),Cs=()=>P([8,t[8]]),O=()=>P([9,t[9]]),V=()=>P([10,t[10]]),Es=()=>P([11,t[11]]),Ns=()=>P([12,t[12]]),U=()=>P([13,t[13]]);return c.$$.update=()=>{c.$$.dirty[0]&2048&&n(3,z=()=>h.slice())},[H,t,Ms,z,S,es,G,Hs,P,q,Bs,h,u,F,C,ks,Ts,j,N,As,Cs,O,V,Es,Ns,U]}class vi extends ti{constructor(w){super();li(this,w,mi,ui,oi,{},null,[-1,-1])}}export{vi as default};
