const http= require("http");
const app= require("./app.js");
const debug = require("debug")("node-angular");
const port =process.env.PORT || 3000;
app.set('port',port);
const server= http.createServer(app);
console.log("Connected to Server"+port);
server.listen(port);


