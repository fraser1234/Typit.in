const express = require('express');
const server = express();
server.use(express.static('build'));

server.listen(3000, function(){
  console.log("Server running on port 3000");
});
