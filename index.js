import http from 'http';

const port=8000;


const server =http.createServer((req,resp)=>{
 console.log(req.url); 

  resp.end('Working')


})

server.listen(port,"localhost",()=>{
  console.log('Server is Working http://localhost:8000)');
})