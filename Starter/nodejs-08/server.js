var http = require('http');
var fs = require('fs');
const port = 8000;

var server = http.createServer(function(req, res) {
    fs.readFile("./user.json", "UTF-8", function(err, data) {
        res.writeHead('200', { 'Content-Type': 'application/json' });
        //res.write('Hello');

        //var myobj = { id: 2, name: "Ajay", age: 22 };
        data = JSON.parse(data);
        res.end(JSON.stringify(data));


    })

});


server.listen(port, "127.0.0.1", () => {
    console.log("Listening to the port " + port);
});