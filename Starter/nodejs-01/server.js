//server created using normal way:-
var http = require('http');
// var evalute = require('./evaluvate');
const port = 8000;
var server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Welcome to nodejs Tutorial");
    // res.write("\n" + evalute.sum(4, 5));
    // res.write("\n" + evalute.str);
    res.end();


});
server.listen(port, "127.0.0.1", () => {
    console.log("Listening to the port " + port);
});



//sever created using function :-
// var http = require('http');

// function OnRequest(req, res) {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write("Welcome to nodejs");
//     res.end();
// }
// http.createServer(OnRequest).listen(8000);
// console.log("server created");