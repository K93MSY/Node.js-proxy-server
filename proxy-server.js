var http = require("http");
var httpProxy = require("http-proxy");

httpProxy.createProxyServer({
    target: ""
}).listen(8080);
