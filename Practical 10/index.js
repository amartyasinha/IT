var http = require('http');
var port = 3000;
var server= http.createServer(function (req, res) {
    res.write("Hello world.This is my node js server.")
    res.end()
}).on('error',()=>{ // code that executes when the port is busy
    port +=1
    server.listen(port)
})

server.listen(port,()=>{
    console.log("server is listening at port",port)
})