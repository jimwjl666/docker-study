const http = require('http');
const port = 30010;
const server = http.createServer((req,res)=>{
  res.end('hello 123')
})
server.listen(port,()=>{
  console.log(`Running on http://localhost:${port}`,port,`NODE_ENV:${process.env.NODE_ENV}`)
})
