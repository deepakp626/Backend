// create web server - http Mudule
import http from 'http';



const server = http.createServer((req,res)=>{

    // Request
    // console.log(req.url)
    // if(req.url != '/favicon.ico'){
    //     console.log(req.url)
    // }
    // console.log(req.method)

    // response
    // res.statusCode = 202;
    // res.statusMessage = "Good "
    // res.setHeader('Content-Type', 'text/plain');
    res.writeHead(202,"good",{'Content-Type': 'text/plain'})
    res.end("Response from server 2")
})

const PORT = process.env.PORT || 8000;
const HOST = 'localhost'

server.listen(PORT,HOST,()=>{
console.log("server running at http://localhost:8000")
});