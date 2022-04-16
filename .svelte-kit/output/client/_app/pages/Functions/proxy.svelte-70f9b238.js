import{S as vt,i as ft,s as ht,e as p,k as v,t as l,c as i,m as f,a as n,d as t,h as o,f as me,b as m,g as r,G as a,K as dt,M as ct,N as ot,O as nt}from"../../chunks/vendor-a263fa63.js";function ut(h){let w,E,d,W,J,c,x,y,we,O,ye,be,F,D,ke,G,I,_e,$,P,Se,C,b,Ae,H,Le,Te,K,k,Ee,V,N,We,Q,_,xe,X,R,Oe,Y,U,De,Z,j,Ie,g,S,Pe,ee,B,He,te,u,Ne,Re,Ue,se,q,je,re,A,Be,ae,z,qe,pe,L,ze,ie,M,Me,le,T,Je,oe,ne,ve,fe,he;return{c(){w=p("br"),E=v(),d=p("div"),W=p("p"),J=l(`
 Configuration of the Server Droplet`),x=v(),y=p("p"),we=l("This website is built on two "),O=p("a"),ye=l("DigitalOcean"),be=l(" droplets. This page handles traffic to and from the schalk.net domain. It's the other droplet, the one that handles https and wss traffic to and from schalk.site, that will be the topic of discussion here. I want to show anyone who is interested how simple it can be to host secure JavaScript and Haskell servers on a Linux (Debian 11 in this case) droplet."),F=v(),D=p("p"),ke=l("DigitalOcean droplets' disk size, memory, and processing capacity can be upgraded as needed. The schalk.site droplet has a 25 GB SSD, 1 GB RAM, and minimal processing power. It costs $6.00 / month and is more than adequate for now.   ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp"),G=v(),I=p("p"),_e=l('The schalk.site droplet was created with the Debian 11 operating system. Its basic web server is Nginx, which serves simple html pages and reverse proxies https and wss traffic to and from Haskell servers running at . Two JavaScript WebSockets servers  uses the Nginx web server, a ufw firewall, and Upstart to load server processes on startup and keep them active. Letsencrypt TLS certificates and keys were installed and Nginx server blocks updated with the command, "certbot --nginx".'),$=v(),P=p("h3"),Se=l("The JavaScript Servers"),C=v(),b=p("p"),Ae=l("Asynchronous behavior tested at "),H=p("a"),Le=l("factors"),Te=l(" relies on two JavaScript WebSockets servers. The simplest of the two provides pseudo-random numbers. This Upstart unit file, located at /etc/systemd/system/server2.service, loads index.js (located at /home/u/Server3) on port 3002 whenever Debian 11 boots."),K=v(),k=p("pre"),Ee=l(h[4]),V=v(),N=p("p"),We=l(`Nginx and index.js have nothing to do with each other. Upstart initiates the background process that handles wss://schalk.site:3002 requests and responses. It's a server that has no use for any other server. Note: To make it load whenever Debian 11 boots, I endered "sudo systemctl enable server2". "server2" is the name given to index.js in /home/u/server3.`),Q=v(),_=p("pre"),xe=l(h[5]),X=v(),R=p("h3"),Oe=l("The Haskell Servers"),Y=v(),U=p("p"),De=l("The situation is different for the Haskell servers. They rely on Nginx to reverse proxy https and wss requests to http://127.0.0.1:3000, http://127.0.0.1:3055, and ws://127.0.0.1:3055 running in the background as Upstart controlled processes."),Z=v(),j=p("p"),Ie=l('I uploaded the Warp server to /home/u/.local/bin and added this file, named "law.service" to /etc/systemd/system/:'),g=v(),S=p("pre"),Pe=l(h[2]),ee=v(),B=p("p"),He=l("This is the Nginx block file:"),te=v(),u=p("pre"),Ne=l(`
`),Re=l(h[0]),Ue=l(`
`),se=v(),q=p("p"),je=l("For Main, the bundled front end and Haskell WebSockets server, three additional lines of code were needed in order to upgrade wss traffic."),re=v(),A=p("pre"),Be=l(h[1]),ae=v(),z=p("p"),qe=l(`Upstart loads Main, the bundled front end and Haskell WebSockets server, whenever Debian 11 boots in the droplet. The command "sudo systemctl enable main" was necessary to initiate this functionality. Here's the Upstart unit file /etc/systemd/system/main.service.`),pe=v(),L=p("pre"),ze=l(h[3]),ie=v(),M=p("p"),Me=l(`That's about all there is to it. I had to open the ufw firewall to ports 443, 3000, 3002, 3003, and 3055 with commands sudo ufw allow 443 and so forth. The command "sudo ufw status" shows everything opened by ufw:`),le=v(),T=p("pre"),Je=l(h[6]),oe=v(),ne=p("br"),ve=p("br"),fe=p("br"),this.h()},l(e){w=i(e,"BR",{}),E=f(e),d=i(e,"DIV",{style:!0});var s=n(d);W=i(s,"P",{}),n(W).forEach(t),J=o(s,`
 Configuration of the Server Droplet`),s.forEach(t),x=f(e),y=i(e,"P",{});var de=n(y);we=o(de,"This website is built on two "),O=i(de,"A",{href:!0});var Fe=n(O);ye=o(Fe,"DigitalOcean"),Fe.forEach(t),be=o(de," droplets. This page handles traffic to and from the schalk.net domain. It's the other droplet, the one that handles https and wss traffic to and from schalk.site, that will be the topic of discussion here. I want to show anyone who is interested how simple it can be to host secure JavaScript and Haskell servers on a Linux (Debian 11 in this case) droplet."),de.forEach(t),F=f(e),D=i(e,"P",{});var Ge=n(D);ke=o(Ge,"DigitalOcean droplets' disk size, memory, and processing capacity can be upgraded as needed. The schalk.site droplet has a 25 GB SSD, 1 GB RAM, and minimal processing power. It costs $6.00 / month and is more than adequate for now.   ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp"),Ge.forEach(t),G=f(e),I=i(e,"P",{});var $e=n(I);_e=o($e,'The schalk.site droplet was created with the Debian 11 operating system. Its basic web server is Nginx, which serves simple html pages and reverse proxies https and wss traffic to and from Haskell servers running at . Two JavaScript WebSockets servers  uses the Nginx web server, a ufw firewall, and Upstart to load server processes on startup and keep them active. Letsencrypt TLS certificates and keys were installed and Nginx server blocks updated with the command, "certbot --nginx".'),$e.forEach(t),$=f(e),P=i(e,"H3",{});var Ce=n(P);Se=o(Ce,"The JavaScript Servers"),Ce.forEach(t),C=f(e),b=i(e,"P",{});var ce=n(b);Ae=o(ce,"Asynchronous behavior tested at "),H=i(ce,"A",{href:!0});var Ke=n(H);Le=o(Ke,"factors"),Ke.forEach(t),Te=o(ce," relies on two JavaScript WebSockets servers. The simplest of the two provides pseudo-random numbers. This Upstart unit file, located at /etc/systemd/system/server2.service, loads index.js (located at /home/u/Server3) on port 3002 whenever Debian 11 boots."),ce.forEach(t),K=f(e),k=i(e,"PRE",{class:!0});var Ve=n(k);Ee=o(Ve,h[4]),Ve.forEach(t),V=f(e),N=i(e,"P",{});var Qe=n(N);We=o(Qe,`Nginx and index.js have nothing to do with each other. Upstart initiates the background process that handles wss://schalk.site:3002 requests and responses. It's a server that has no use for any other server. Note: To make it load whenever Debian 11 boots, I endered "sudo systemctl enable server2". "server2" is the name given to index.js in /home/u/server3.`),Qe.forEach(t),Q=f(e),_=i(e,"PRE",{class:!0});var Xe=n(_);xe=o(Xe,h[5]),Xe.forEach(t),X=f(e),R=i(e,"H3",{});var Ye=n(R);Oe=o(Ye,"The Haskell Servers"),Ye.forEach(t),Y=f(e),U=i(e,"P",{});var Ze=n(U);De=o(Ze,"The situation is different for the Haskell servers. They rely on Nginx to reverse proxy https and wss requests to http://127.0.0.1:3000, http://127.0.0.1:3055, and ws://127.0.0.1:3055 running in the background as Upstart controlled processes."),Ze.forEach(t),Z=f(e),j=i(e,"P",{});var ge=n(j);Ie=o(ge,'I uploaded the Warp server to /home/u/.local/bin and added this file, named "law.service" to /etc/systemd/system/:'),ge.forEach(t),g=f(e),S=i(e,"PRE",{class:!0});var et=n(S);Pe=o(et,h[2]),et.forEach(t),ee=f(e),B=i(e,"P",{});var tt=n(B);He=o(tt,"This is the Nginx block file:"),tt.forEach(t),te=f(e),u=i(e,"PRE",{class:!0});var ue=n(u);Ne=o(ue,`
`),Re=o(ue,h[0]),Ue=o(ue,`
`),ue.forEach(t),se=f(e),q=i(e,"P",{});var st=n(q);je=o(st,"For Main, the bundled front end and Haskell WebSockets server, three additional lines of code were needed in order to upgrade wss traffic."),st.forEach(t),re=f(e),A=i(e,"PRE",{class:!0});var rt=n(A);Be=o(rt,h[1]),rt.forEach(t),ae=f(e),z=i(e,"P",{});var at=n(z);qe=o(at,`Upstart loads Main, the bundled front end and Haskell WebSockets server, whenever Debian 11 boots in the droplet. The command "sudo systemctl enable main" was necessary to initiate this functionality. Here's the Upstart unit file /etc/systemd/system/main.service.`),at.forEach(t),pe=f(e),L=i(e,"PRE",{class:!0});var pt=n(L);ze=o(pt,h[3]),pt.forEach(t),ie=f(e),M=i(e,"P",{});var it=n(M);Me=o(it,`That's about all there is to it. I had to open the ufw firewall to ports 443, 3000, 3002, 3003, and 3055 with commands sudo ufw allow 443 and so forth. The command "sudo ufw status" shows everything opened by ufw:`),it.forEach(t),le=f(e),T=i(e,"PRE",{class:!0});var lt=n(T);Je=o(lt,h[6]),lt.forEach(t),oe=f(e),ne=i(e,"BR",{}),ve=i(e,"BR",{}),fe=i(e,"BR",{}),this.h()},h(){me(d,"font-family","Times New Roman"),me(d,"text-align","center"),me(d,"color","#0000AA"),me(d,"font-size","38px"),m(O,"href","https://www.digitalocean.com"),m(H,"href","/Functions/factors"),m(k,"class","svelte-9vvz6p"),m(_,"class","svelte-9vvz6p"),m(S,"class","svelte-9vvz6p"),m(u,"class","svelte-9vvz6p"),m(A,"class","svelte-9vvz6p"),m(L,"class","svelte-9vvz6p"),m(T,"class","svelte-9vvz6p")},m(e,s){r(e,w,s),r(e,E,s),r(e,d,s),a(d,W),a(d,J),r(e,x,s),r(e,y,s),a(y,we),a(y,O),a(O,ye),a(y,be),r(e,F,s),r(e,D,s),a(D,ke),r(e,G,s),r(e,I,s),a(I,_e),r(e,$,s),r(e,P,s),a(P,Se),r(e,C,s),r(e,b,s),a(b,Ae),a(b,H),a(H,Le),a(b,Te),r(e,K,s),r(e,k,s),a(k,Ee),r(e,V,s),r(e,N,s),a(N,We),r(e,Q,s),r(e,_,s),a(_,xe),r(e,X,s),r(e,R,s),a(R,Oe),r(e,Y,s),r(e,U,s),a(U,De),r(e,Z,s),r(e,j,s),a(j,Ie),r(e,g,s),r(e,S,s),a(S,Pe),r(e,ee,s),r(e,B,s),a(B,He),r(e,te,s),r(e,u,s),a(u,Ne),a(u,Re),a(u,Ue),r(e,se,s),r(e,q,s),a(q,je),r(e,re,s),r(e,A,s),a(A,Be),r(e,ae,s),r(e,z,s),a(z,qe),r(e,pe,s),r(e,L,s),a(L,ze),r(e,ie,s),r(e,M,s),a(M,Me),r(e,le,s),r(e,T,s),a(T,Je),r(e,oe,s),r(e,ne,s),r(e,ve,s),r(e,fe,s),he=!0},p:dt,i(e){he||(ct(()=>{c||(c=ot(d,nt,{},!0)),c.run(1)}),he=!0)},o(e){c||(c=ot(d,nt,{},!1)),c.run(0),he=!1},d(e){e&&t(w),e&&t(E),e&&t(d),e&&c&&c.end(),e&&t(x),e&&t(y),e&&t(F),e&&t(D),e&&t(G),e&&t(I),e&&t($),e&&t(P),e&&t(C),e&&t(b),e&&t(K),e&&t(k),e&&t(V),e&&t(N),e&&t(Q),e&&t(_),e&&t(X),e&&t(R),e&&t(Y),e&&t(U),e&&t(Z),e&&t(j),e&&t(g),e&&t(S),e&&t(ee),e&&t(B),e&&t(te),e&&t(u),e&&t(se),e&&t(q),e&&t(re),e&&t(A),e&&t(ae),e&&t(z),e&&t(pe),e&&t(L),e&&t(ie),e&&t(M),e&&t(le),e&&t(T),e&&t(oe),e&&t(ne),e&&t(ve),e&&t(fe)}}}function mt(h){var w=`server {
    server_name one.schalk.site;
  
    location / {
      proxy_pass  http://127.0.0.1:3000;
    }
    <encryption boilerplate>
}`,E=`server {
    server_name game.schalk.site;
  
    location / {
      proxy_pass  http://127.0.0.1:3055;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection "upgrade";
    }
    <encryption boilerplate>
  } `,d=`[Unit]
Description=Schalk case documents

[Service]
ExecStart=/home/u/.local/bin/warp -d /var/www/one.schalk.site/html/pdf
Restart=on-failure

[Install]
WantedBy=multi-user.target`,W=`[Unit]
  Description=Haskell server
  
  [Service]
  ExecStart=/home/u/Main
  Restart=on-failure
  
  [Install]
  WantedBy=multi-user.target`,J=`[Unit]
Description=WebSockets server

[Service]
ExecStart=node /home/u/server3/index.js
Restart=on-failure

[Install]
WantedBy=multi-user.target`,c=`var ws = require('ws');
var https = require('https');
var fs = require('fs');
var j;

function randomInt (num) {
	return Math.floor(Math.random() * num);
}

const server = https.createServer({
  cert: fs.readFileSync('/etc/letsencrypt/live/schalk.site/cert.pem'),
  key: fs.readFileSync('/etc/letsencrypt/live/schalk.site/privkey.pem')
});
const wss = new ws.WebSocketServer({server});
wss.on('connection', function connection(ws) {
ws.on('message', function incoming(message) {
          var number = JSON.parse(message);
	  j = randomInt(number);
	  ws.send(j);
  });

});

server.listen(3002);`,x=`
OpenSSH                    ALLOW       Anywhere                  
80/tcp                     ALLOW       Anywhere                  
443                        ALLOW       Anywhere                  
3002                       ALLOW       Anywhere                  
3003                       ALLOW       Anywhere                  
3055                       ALLOW       Anywhere                  
Nginx Full                 ALLOW       Anywhere                  
9160                       ALLOW       Anywhere                  
3006                       ALLOW       Anywhere                  
3000                       ALLOW       Anywhere                  
OpenSSH (v6)               ALLOW       Anywhere (v6)             
80/tcp (v6)                ALLOW       Anywhere (v6)             
443 (v6)                   ALLOW       Anywhere (v6)             
3002 (v6)                  ALLOW       Anywhere (v6)             
3003 (v6)                  ALLOW       Anywhere (v6)             
3055 (v6)                  ALLOW       Anywhere (v6)             
Nginx Full (v6)            ALLOW       Anywhere (v6)             
9160 (v6)                  ALLOW       Anywhere (v6)             
3006 (v6)                  ALLOW       Anywhere (v6)             
3000 (v6)          
`;return[w,E,d,W,J,c,x]}class yt extends vt{constructor(w){super();ft(this,w,mt,ut,ht,{})}}export{yt as default};
