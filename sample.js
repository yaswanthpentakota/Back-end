import http, { Server } from "http";

const serv =http.createServer((req,res)=>
{
    console.log(req.method);
    if(req.url == "/users"){
        res.writeHead(200,{"context-type": "application/json"});
        res.end(JSON.stringify({name:"yash"}))
    }
    else{
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello from backend.");
    }
}
);
serv.listen(8003,() => {
        console.log('Server running at port {7017}');
})