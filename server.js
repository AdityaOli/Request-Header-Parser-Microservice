const express = require("express");
var app = express();
var Response = {
  ipAddress : "",
  language: "",
  software: ""
};

app.get("/",(request, response) =>
{
  var IPAddress = request.header('x-forwarded-for') || request.connection.remoteAddress;
  Response.ipAddress = IPAddress.split(',')[0];
  Response.language = request.headers["accept-language"].split(',')[0];
  Response.software = request.headers["user-agent"].split("(")[1].split(")")[0];
  
  response.send(Response);
});

app.listen(3000, ()=>{
  console.log("Application is listening on port 3000!");
});