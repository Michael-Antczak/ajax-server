var port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs'),
    html = fs.readFileSync('index.html');

var log = function(entry) {
    fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
};

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        var body = '';

        req.on('data', function(chunk) {
            body += chunk;
        });

        req.on('end', function() {
            if (req.url === '/') {

                res.writeHead(200, 'OK', {'Content-Type': 'application/json'});

                var msg = "Received : " + new Date();
                
                res.write({
                    message: msg, 
                    data: "Hello"
                });

                res.end();

            } else if (req.url = '/chatroom') {

                log('Received task ');
                res.end({message: "Thank you"});

            }

            
        });

    } else if (req.method === 'GET' && req.url === "chatroom") {
        res.writeHead(200, 'OK', {'Content-Type': 'application/json'});

            var msg = "Received" + new Date();
            
            res.write({
                message: msg
            });
            res.end();
    } else {
        console.log("DUPA");
        console.log("URL : ", req.url);
        res.writeHead(200);
        res.write(html);
        res.end();
    }
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(port);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + port + '/');
