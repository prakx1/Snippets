const url = require("url");
const fs = require("fs");

const renderHtml = (path, response) => {
  fs.readFile(path, null, (error, data) => {
    if (error) {
      console.log(error);
      response.writeHead(404);
      response.write("file not found");
    } else {
      response.write(data);
    }
    response.end();
  });
};

module.exports = {
  handleRequest: (request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    var path = url.parse(request.url).pathname;
    console.log(path, request.url);
    switch (path) {
      case "/":
        renderHtml("./public/Home.html", response);
      case "/about":
        renderHtml("./public/about.html", response);
    }
  },
};
