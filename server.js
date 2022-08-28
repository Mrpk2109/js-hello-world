const express = require('express')

const app = express()

app.get('/', (req, res) => {
  return res.send('<h1> UP : Computer Engineering XIX </h1> <h2> UP : New NUI Feture </h2>')
})
app.get('/bam', (req, res) => {
  return res.send('<h1> UP : Computer Engineering XIX </h1> <h2> UP : New NUI Feture </h2>')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.info('Server is ready at', PORT)
})