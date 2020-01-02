var express = require('express')
var app = express()
var path = require('path')
require('ejs')
var bodyParser = require('body-parser')
var indexRouter = require("./router/index")

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next)=> {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/', indexRouter)

var port = 8080
app.listen(port, (req, res)=>{
    console.log(`서버가 시작되었습니다http://localhost${port}`)
})