const express = require('express')
const app = express()
const port = 3000
//route 
app.get('/', (req, res) => {
  var a = 1;
  var b = 2;
  var e = 4;
  var c = a + b + e;
  res.send('Hello World!ưeqweqweqweqweqweqweqweqweqweqwewqeqw')
})

app.listen(port, () => {
  console.log(`Example app listening on port at http://localhost:${port}`)
})