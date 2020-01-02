var express = require('express')
var router = express.Router()
var mysql = require('mysql')

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'1234',
    database:'o2'
})

router.get('/register', (req, res)=>{
    res.render('register')
})

router.get('/login', (req, res)=>{
    res.render('login')
})

router.post('/register', (req, res)=>{
    var today = new Date()
    var firstname = req.body.name
    var email = req.body.email
    var password = req.body.password
    var created = today
    var modified = today
    var sql = 'INSERT INTO users (first_name, email, password, created, modified) VALURES(?, ?, ?, ?, ?)'
    var sqlArray = [firstname, email, password, created, modified]
    db.query(sql,sqlArray, (err, result)=>{
        if(!err){
            console.log(result)
            res.redirect('/login')
        } else{
            console.log(err)
        }
    })
})

module.exports = router;