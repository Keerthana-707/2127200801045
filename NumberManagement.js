var http = require('http');


var server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  console.log(req.url);
  if (req.url.startsWith("/numbers")) {
    res.end("Sample Response");
  } else {
    console.log(`Invalid URL!`);
  }
});


server.listen(3000, () => {
  console.log(`Server started!`);
});

