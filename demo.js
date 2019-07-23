// let heads = 0;
// let tails = 0;
//
// function flip(coin) {
// document.getElementById("result").innerHTML = coin;
// console.log(coin)
// }
//
// document.querySelector("#firstButton").addEventListener('click', function () {
//     x = (Math.floor(Math.random() * 2) == 0);
//     if(x){
//     	flip("heads");
//       document.querySelector("img").src = "heads.png"
//     }else{
//         flip("tails");
//         document.querySelector("img").src = "tails.png"
//         console.log(heads,tails)
//     }
// });

var hostname = '127.0.0.1';
const http = require('http');
const fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
  // if (page == '/heads.png') {
  //   fs.readFile('heads.png', function(err, data) {
  //     res.writeHead(200, {'Content-Type': 'image/png'});
  //     res.end(data);
  //     res.end();
  //   });
}).listen(8000, hostname);
