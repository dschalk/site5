
<script>
import {fade} from "svelte/transition"

var one = `server {
    server_name one.schalk.site;
  
    location / {
      proxy_pass  http://127.0.0.1:3000;
    }
    <encryption boilerplate>
}`

var game = `server {
  server {
  server_name one.schalk.site;

  location / {
    proxy_pass  http://127.0.0.1:3000;
  }
    <encryption boilerplate>
  } ` 


var gameServer = `server {
    server_name game.schalk.site;
  
    location / {
      proxy_pass  http://127.0.0.1:3055;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection "upgrade";
    }
    <encryption boilerplate>
  } ` 


var docs = `[Unit]
Description=Schalk case documents

[Service]
ExecStart=/home/u/.local/bin/warp -d /var/www/one.schalk.site/html/pdf
Restart=on-failure

[Install]
WantedBy=multi-user.target`;

var main = `[Unit]
  Description=Haskell server
  
  [Service]
  ExecStart=/home/u/Main
  Restart=on-failure
  
  [Install]
  WantedBy=multi-user.target`

var jsunit = `[Unit]
Description=WebSockets server

[Service]
ExecStart=node /home/u/server3/index.js
Restart=on-failure

[Install]
WantedBy=multi-user.target`

var indexjs = `var ws = require('ws');
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

server.listen(3002);`

var ufw = `
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
`

</script>
<style>
pre {
    color: maroon;
    font-size: 16px; 
}    
</style>
<br>
<div style = "font-family: Times New Roman;  text-align: center; color: #0000AA; font-size: 38px;" transition:fade>
  <p></p>
 Configuration of the Server Droplet
</div>
<p>This website is built on two <a href="https://www.digitalocean.com">DigitalOcean</a> droplets. This page handles traffic to and from the schalk.net domain. It's the other droplet, the one that handles https and wss traffic to and from schalk.site, that will be the topic of discussion here. I want to show anyone who is interested how simple it can be to host secure JavaScript and Haskell servers on a Linux (Debian 11 in this case) droplet.</p>

<p>DigitalOcean droplets' disk size, memory, and processing capacity can be upgraded as needed. The schalk.site droplet has a 25 GB SSD, 1 GB RAM, and minimal processing power. It costs $6.00 / month and is more than adequate for now.   ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp   </p>
<p> The schalk.site droplet was created with the Debian 11 operating system. Its basic web server is Nginx, which serves simple html pages and reverse proxies https and wss traffic to and from Haskell servers running at . Two JavaScript WebSockets servers  uses the Nginx web server, a ufw firewall, and Upstart to load server processes on startup and keep them active. Letsencrypt TLS certificates and keys were installed and Nginx server blocks updated with the command, "certbot --nginx".</p>
<h3>The JavaScript Servers</h3>
<p>Asynchronous behavior tested at <a href="/Functions/factors">factors</a> relies on two JavaScript WebSockets servers. The simplest of the two provides pseudo-random numbers. This Upstart unit file, located at /etc/systemd/system/server2.service, loads index.js (located at /home/u/Server3) on port 3002 whenever Debian 11 boots. </p>
<pre>{jsunit}</pre>
<p>Nginx and index.js have nothing to do with each other. Upstart initiates the background process that handles wss://schalk.site:3002 requests and responses. It's a server that has no use for any other server. Note: To make it load whenever Debian 11 boots, I endered "sudo systemctl enable server2". "server2" is the name given to index.js in /home/u/server3.</p>
<pre>{indexjs}</pre>
<h3>The Haskell Servers</h3>
<p>The situation is different for the Haskell servers. They rely on Nginx to reverse proxy https and wss requests to http://127.0.0.1:3000, http://127.0.0.1:3055, and ws://127.0.0.1:3055 running in the background as Upstart controlled processes. </p>
<p>I uploaded the Warp server to /home/u/.local/bin and added this file, named "law.service" to /etc/systemd/system/:</p>
<pre>{docs}</pre>
<p>This is the Nginx block file:</p>
<pre>
{one}
</pre>

<p>For Main, the bundled front end and Haskell WebSockets server, three additional lines of code were needed in order to upgrade wss traffic.</p>
<pre>{gameServer}</pre>
<p>Upstart loads Main, the bundled front end and Haskell WebSockets server, whenever Debian 11 boots in the droplet. The command "sudo systemctl enable main" was necessary to initiate this functionality. Here's the Upstart unit file /etc/systemd/system/main.service. </p>
<pre>{main}</pre>
  <p>That's about all there is to it. I had to open the ufw firewall to ports 443, 3000, 3002, 3003, and 3055 with commands sudo ufw allow 443 and so forth. The command "sudo ufw status" shows everything opened by ufw:</p>
  <pre>{ufw}</pre>
  <br><br><br> 
  