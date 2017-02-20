if (['staging', 'production'].indexOf(process.env.NODE_ENV) > -1) {
  require('./dist/server.prod.js')
} else {
  require('babel-register')
  require('./server.dev.js')
}
