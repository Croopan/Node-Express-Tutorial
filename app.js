const http = require('http');

const server = http.createServer((req,res) => {
  if (req.url === "/") {
    res.end("Home page");
  }
  if (req.url === "/about") {
    res.end("About us");
  }
  else{
    res.end(`
      <h1>No page here</h1>
      <a href = "/">Go back home</a> 
      `
    )
  }
});

server.listen(5000);