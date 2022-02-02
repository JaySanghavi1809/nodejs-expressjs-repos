//server created using normal way:-
var http = require('http');
var evalute = require('./evaulate');
var custom = require('./custom');
var module3 = require('./module3');
const port = 8000;
var server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Welcome to nodejs Tutorial");
    res.write("\n" + evalute.sum(15, 50));
    res.write("\n" + evalute.multiple(5, 10));
    res.write("\n" + evalute.str);
    res.write("\n" + custom.dt());
    res.write("\n" + custom.mystr);
    res.write("\n" + custom.mystr2);
    res.write("\n" + module3.myfunction());


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