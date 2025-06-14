const express = require('express')
const app = express()
const port = 5656

app.get('/', (req, res) => {
  res.send('Hello World!')
})

try {
  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
} catch (error) {
  console.log(error)
}

