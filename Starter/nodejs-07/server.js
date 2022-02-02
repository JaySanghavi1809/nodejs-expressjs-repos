var http = require('http');
var fs = require('fs');
const port = 8000;

var server = http.createServer(function(req, res) {
    fs.readFile('./index.html', function(err, data) {
        if (err) {
            res.writeHead(404);
            res.write("Page Not Found!");
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data);
            res.end();
        }

    });

})

server.listen(port, "127.0.0.1", () => {
    console.log("Listening to the port " + port);
});