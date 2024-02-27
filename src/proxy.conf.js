const PROXY_CONFIG = [
  {
    context: ["/olympic"],
    target: "http://localhost:5000/",
    changeOrigin: true,
    secure: true,
    debug: true,
    pathRewrite: {
      "^/olympic": "Olympic/",
    },
  }
]
 

module.exports = PROXY_CONFIG;