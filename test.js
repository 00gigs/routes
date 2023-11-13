const express = require('express')

const app  = express()

const port = 3001

const cors = require('cors')

const list = '5'

app.use(cors())


app.use(express.static('public'))

app.set('view engine','ejs')


//use url route in bropwser and enter in postman to be able to test route in vscode
app.get('/chickens',(req,res)=>{
    res.send('hi')
})

app.post('/chickens', function createChicken(req,res){
    res.send('you made a new chicken')
})

// app.get('/',(req,res)=>{
//     res.render('result')
    
// })

const greetings = {
    en:'heelo',
    fr:'bonjure',
    sp:'hola',
    jp:'keme se'
}

app.get('/greet/:language',(req,res)=>{
    const selection = req.params.language
    const selectionRes = greetings[selection]
    res.send(selectionRes)
})

app.listen(port,()=>{
    console.log(`http://localhost:${3001}`)
})