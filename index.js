const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())  //모든 요청에 대해서 허용. 비워둔 경우.
app.use(express.static('file'))
app.get('/', function(req,res){
    res.sendFile(__dirname + '/file/html/index.html');
})
app.get('/kimchi.html', function(req,res){
    res.sendFile(__dirname + '/file/html/kimchi.html');
})
app.get('/note.html', function(req,res){
    res.sendFile(__dirname + '/file/html/note.html');
})
app.listen(port, () => {
    console.log(`Example app listening on  port ${port}`)
})