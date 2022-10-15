module.exports = {
  '/site': {
    target: 'http://prod:8003/',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      '^/site': ''
    }
  },
  '/localhost': {
    target: 'http://localhost:8080/',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      '^/localhost': '/'
    }
  }
}
