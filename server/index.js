const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/api/users', function(req, res) {
    let friends = ['Miles', 'Matt', 'Mitch', 'Ty']
    res.status(200).send(friends)
})

app.get('/weather/:temperature', function(req, res) {
    const {temperature} = req.params
    const phrase = `<h3>The weather was ${temperature} today!</h3>`
    res.status(200).send(phrase)
})

app.listen(4000, function() {console.log('Server is up on 4000')})