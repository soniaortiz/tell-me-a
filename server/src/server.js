const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const path = require('path')
const errorHandler = require('errorhandler')
const app = express()
const validator = require('express-validator')
const { json } = require('body-parser')


app.use(express.static(path.join(__dirname, '../build/')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(errorHandler())

app.set('port', 8000)

app.get('/', (req, res, next)=>{
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})

app.get('/joke', (req, res, next)=>{
    http.get('http://official-joke-api.appspot.com/jokes/programming/ten', (response)=>{
        let data =''
        response.on('data', (chunk)=>{
            data +=chunk
        })
        response.on('end', ()=>{
            res.send(JSON.parse(data))

        })
    })
})

app.get('*', (req, res, next)=>{
    res.sendFile(path.join(__dirname, '../../public/index.html'));
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

