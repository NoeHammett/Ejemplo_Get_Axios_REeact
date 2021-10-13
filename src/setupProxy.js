const {createProxyMiddleware} = require("http-proxy-middleware");
const cors = require("cors");

module.exports = app =>{
    app.use("/users", createProxyMiddleware({target:"https://jsonplaceholder.typicode.com/", changeOrigin:true}));
    app.use(cors("/covid", createProxyMiddleware({target:"https://api.covidtracking.com/v1/us/current.json", changeOrigin:true})));

}