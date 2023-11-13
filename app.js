const express = require('express')
const app = express()
const port = 3000


const cors = require('cors');

app.use(cors())


app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('form')
})

//submission route
app.post('/submit',(req,res)=>{
    console.log('Form data received:', req.body)

    res.send('Form submitted successfully!')
})



app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})







