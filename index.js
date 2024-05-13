const http = require('http');


server = http.createServer(async (req, res)=> {
    res.writeHead(200, {message: 'Hello'});
    res.end(JSON.stringify({message: 'Hello'}))
})

server.listen(8080);