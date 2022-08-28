const express = require('express')

const app = express()

app.get('/', (req, res) => {
  return res.send('<h1> UP : Computer Engineering XIX </h1> <h2> UP : New NUI Feture </h2>')
})

app.get('/bew', (req, res) => {
  return res.send('<h1> UP : ไอหนถุ่ย </h1> <body style = "background-color: #FF1E4"></body>')
})

app.get('/ballphantom', (req, res) => {
  return res.send('<h1>ศวัศดีย์ ขวั๊ฟ พรี๊ ฮณุ๋ย</h1>')
})
app.get('/ballphantom', (req, res) => {
  return res.send('<h1>ศวัศดีย์ ขวั๊ฟ พรี๊ ฮณุ๋ย</h1>')
})

app.get('/ballphantom', (req, res) => {
  return res.send('<h1>ศวัศดีย์ ขวั๊ฟ พรี๊ ฮณุ๋ย</h1>')
})

app.get('/ballphantom', (req, res) => {
  return res.send('<h1>ศวัศดีย์ ขวั๊ฟ พรี๊ ฮณุ๋ย</h1>')
})

app.get('/ballphantom', (req, res) => {
  return res.send('<h1>ศวัศดีย์ ขวั๊ฟ พรี๊ ฮณุ๋ย</h1>')
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.info('Server is ready at', PORT)
})