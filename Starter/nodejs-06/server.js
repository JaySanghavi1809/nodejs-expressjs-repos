var http = require('http');
var fs = require('fs');
const port = 8000;
var server = http.createServer(function(req, res) {
    var Content = "<h1>Welcome</h1><p>This is Content</p>"
    fs.writeFile('abc.html', Content, function(err) {
        if (err) throw err;
        console.log("Data saved ");

    });

    fs.open('abc.html', 'a', function(err, fd) {
        fs.appendFile(fd, '<p>Hello</p>', function(err) {
            if (err) throw err;
            console.log("Data saved");

            fs.close(fd, function(err) {
                if (err) throw err;
            });
        });
    })
    fs.readFile('abc.html', function(err, data) {
        if (err) throw err;

        res.writeHead('200', { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    })

})

server.listen(port, "127.0.0.1", () => {
    console.log("Listening to the port " + port);
});