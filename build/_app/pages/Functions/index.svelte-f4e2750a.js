import{S as L,i as O,s as Q,e as i,k as n,t as f,c as a,m as o,a as k,h as p,d as e,g as s,G as u,K as V}from"../../chunks/vendor-4e552e70.js";function U(w){let t,b,m,D,E,M,R,_,N,B,v,q,C,G,P,S,H,$,x,I,K,T,F,c,j,y;return{c(){t=i("br"),b=n(),m=i("div"),D=f("trailingSlash: 'never'"),E=n(),M=i("br"),R=n(),_=i("span"),N=f("Server permissions:"),B=n(),v=i("pre"),q=f(" "),C=f(w[0]),G=f(" "),P=n(),S=i("span"),H=f("svelte.config.js:"),$=n(),x=i("pre"),I=f(" "),K=f(w[1]),T=f(" "),F=n(),c=i("br"),j=i("br"),y=i("br")},l(l){t=a(l,"BR",{}),b=o(l),m=a(l,"DIV",{});var r=k(m);D=p(r,"trailingSlash: 'never'"),r.forEach(e),E=o(l),M=a(l,"BR",{}),R=o(l),_=a(l,"SPAN",{});var z=k(_);N=p(z,"Server permissions:"),z.forEach(e),B=o(l),v=a(l,"PRE",{});var A=k(v);q=p(A," "),C=p(A,w[0]),G=p(A," "),A.forEach(e),P=o(l),S=a(l,"SPAN",{});var J=k(S);H=p(J,"svelte.config.js:"),J.forEach(e),$=o(l),x=a(l,"PRE",{});var d=k(x);I=p(d," "),K=p(d,w[1]),T=p(d," "),d.forEach(e),F=o(l),c=a(l,"BR",{}),j=a(l,"BR",{}),y=a(l,"BR",{})},m(l,r){s(l,t,r),s(l,b,r),s(l,m,r),u(m,D),s(l,E,r),s(l,M,r),s(l,R,r),s(l,_,r),u(_,N),s(l,B,r),s(l,v,r),u(v,q),u(v,C),u(v,G),s(l,P,r),s(l,S,r),u(S,H),s(l,$,r),s(l,x,r),u(x,I),u(x,K),u(x,T),s(l,F,r),s(l,c,r),s(l,j,r),s(l,y,r)},p:V,i:V,o:V,d(l){l&&e(t),l&&e(b),l&&e(m),l&&e(E),l&&e(M),l&&e(R),l&&e(_),l&&e(B),l&&e(v),l&&e(P),l&&e(S),l&&e($),l&&e(x),l&&e(F),l&&e(c),l&&e(j),l&&e(y)}}}function W(w){var t=new Date;t.getHours(),t.getMinutes(),t.getSeconds();var b=`u@schalk:/var/www/html$ ls -ls 
total 20
4 drwxr-xr-x 2 u u 4096 Mar 20 15:23 Functions
4 -rwxr-xr-x 1 u u 2093 Mar 21 19:11 Functions.html
4 drwxr-xr-x 5 u u 4096 Mar 21 19:11 _app
4 -rwxr-xr-x 1 u u 1571 Mar 21 19:11 favicon.png
4 -rwxr-xr-x 1 u u 1599 Mar 21 19:11 index.html
u@schalk:/var/www/html$ ls -ls Functions
total 16
16 -rwxr-xr-x 1 u u 14451 Mar 21 19:11 monads.html
u@schalk:/var/www/html$ 
`,m=`import adapter from '@sveltejs/adapter-static';

 export default {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			trailingSlash: 'never',
			fallback: null,
			precompress: false
		}),

		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		}
	}
};`;return[b,m]}class Y extends L{constructor(t){super();O(this,t,W,U,Q,{})}}export{Y as default};
