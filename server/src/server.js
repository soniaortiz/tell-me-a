const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const path = require('path')
const errorHandler = require('errorhandler')
const app = express()
const validator = require('express-validator')


app.use(express.static(path.join(__dirname, '../build/')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(errorHandler())

app.set('port', 8000)

app.get('/', (req, res, next)=>{
    res.sendStatus(200)
})

const server = http.createServer(app)
const boot = ()=>{
    server.listen(
        app.get('port'), ()=>{
            console.log('Express server listening on port' 
            + app.get('port'))
        })
}
boot()

