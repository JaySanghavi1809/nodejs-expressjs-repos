var http = require("http");
var fs = require('fs');
http.createServer(function(req, res) {

    //Creating  Write Stream:-
    var dataContent = "This is content for test writing and  pipe";
    var writer = fs.createWriteStream("abc.txt");
    writer.write(dataContent, "UTF-8");
    writer.end();
    writer.on('finish', function(err) {
        console.log("writing completed")
    }).on('error', function(err) {
        console.log(err);
    })

    //Pipe Stream:-
    var pipeReader = fs.createReadStream('abc.txt');
    var pipeWriter = fs.createWriteStream('xyz.txt');
    pipeReader.pipe(pipeWriter);
    pipeWriter.on('finish', function() {
        var content = '';
        var reader = fs.createReadStream('abc.txt');
        reader.setEncoding('UTF-8');
        reader.on('error', function(err) {
            console.log(err);
        }).on('data', function(chunk) {
            content += chunk;
        }).on('end', function() {
            res.on('error', function() {
                console.log(err)
            });
            res.setHeader('200', { 'Content-Type': 'plain/Text' })
            res.write(content);
            res.end()
        });

    })


    //creating READ Stream:-
    // var content = '';
    // var reader = fs.createReadStream('Read.txt');
    // reader.setEncoding('UTF-8');
    // reader.on('error', function(err) {
    //     console.log(err);
    // }).on('data', function(chunk) {
    //     content += chunk;
    // }).on('end', function() {
    //     res.on('error', function() {
    //         console.log(err)
    //     });
    //     res.setHeader('200', { 'Content-Type': 'plain/Text' })
    //     res.write(content);
    //     res.end()
    // })

}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');