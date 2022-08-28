const express = require('express')

const app = express()

app.get('/', (req, res) => {
  return res.send('<h1> UP : Computer Engineering XIX </h1> <h2> UP : New NUI Feture </h2>')
})
app.get('/pwrmsii', (req, res) => {
  return res.send('<h1> pwrmsii </h2>')
})
app.get('/pwrmsii', (req, res) => {
  return res.send('<h1> pluem sod </h2>')
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.info('Server is ready at', PORT)
})