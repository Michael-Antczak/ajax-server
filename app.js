var port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs'),
    html = fs.readFileSync('index.html');
    url = require('url');

var myLastMessage = [];


var server = http.createServer(function (req, res) {

//     // dealing with POST request
    if (req.method === 'POST') {
        var body = '';

        // get the content of the body
        req.on('data', function(chunk) {
            body += chunk;
        });

        // when we are done with body
        req.on('end', function() {

            // get the id parameter from the url
            var query = url.parse(req.url).query;
            var id = query.replace('id=', '');

            // create the message object
            var result = {
                id: id,
                body: body, 
            }

            // set the flag for checking if there is another message with the same id
            var found = false;

            // look for the last message for given id, if found -> replace, 
            // not found then just add
            myLastMessage.find(function(element, index, array)  {
                
                if(element.id === id) {
                    found = true;
                    myLastMessage.splice(index, 1, result);

                }

            });

            // at this point the id is not found 
            if(!found) myLastMessage.push(result);
            console.log(myLastMessage);

            res.writeHead(200, 'OK', {'Content-Type': 'application/json'});
            res.end("\n\nSuccess");

        });  // end of POST request
        
//     // dealing with GET request
// } else if (req.method === 'GET') {
    
//             // get the id parameter from the url
//             var query = url.parse(req.url).query;
//             var id = query.replace('id=', '');
    
//             var lastMessage;

//              myLastMessage.find(function(element, index, array)  {

//                 if(element.id === id) {

//                    lastMessage = element;

//                 }

//             });

//             res.writeHead(200, 'OK', {'Content-Type': 'application/json'});
//             res.write(JSON.stringify(lastMessage));
//             res.end();

//     // 
    } else {
       
        res.writeHead(200);
        res.write(html);
        res.end();
    }
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(port);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + port + '/');
