const express = require('express')

const app = express()

app.get('/', (req, res) => {
  return res.send('<h1> UP : Computer Engineering XIX </h1>')
})

app.get('/bew', (req, res) => {
  return res.send('<body style="  background-color: ##d5f4e6"></body> <h1> UP : ไอhaisหนถุ่ย </h1>')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.info('Server is ready at', PORT)
})