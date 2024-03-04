const PROXY_CONFIG = [
  {
    context: ["/api"],
    target: "http://localhost:3000/",
    changeOrigin: true,
    secure: true,
    debug: true,
    /* pathRewrite: {
      "^/olympic": "Olympic/",
    }, */
  }
]
 

module.exports = PROXY_CONFIG;