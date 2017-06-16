var port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs'),
    html = fs.readFileSync('index.html');
    url = require('url');


var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        var body = '';

        req.on('data', function(chunk) {
            body += chunk;
        });

        req.on('end', function() {

            if (req.url === '/chatroom') {

                var reqUrl = url.parse(req.url);

                res.writeHead(200, 'OK', {'Content-Type': 'application/json'});

                var msg = "Received : " + new Date();

                var result = {
                    message: msg, 
                    body: body, 
                    url: url.search
                }
                
                console.log("Hello " + new Date() );
                res.write(JSON.stringify(result));

                res.end();

            }  else if (req.url === '/') {

                res.end("Thank you, I am here");

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
