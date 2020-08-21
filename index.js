const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb://ryancheong:hj1017@test-shard-00-00.iffex.mongodb.net:27017,test-shard-00-01.iffex.mongodb.net:27017,test-shard-00-02.iffex.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-ygv8le-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})