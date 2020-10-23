const express = require('express')
const favicon = require('express-favicon')
const path = require('path')

const PORT = process.env.PORT || 8080

const app = express()
app.use(favicon(`${__dirname}/dist/favicon.ico`))

app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'dist')))

app.get('/*', (_, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}`)
})
