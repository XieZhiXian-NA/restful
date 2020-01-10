const Koa = require('koa')
const config = require('./conf')
const loadModel = require('./framework/loader')
const app = new Koa()

loadModel(config)(app)

const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
app.use(require('./framework/router'))

app.listen(3000,()=>{
    console.log('服务器启动在3000端口')
})