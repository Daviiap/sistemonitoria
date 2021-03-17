const express = require('express')
const cors = require('cors')
const app = express()

const routes = require('./routes')

// app.use(cors())
app.listen(8080, () => {
  console.log('Server running on port 8080.')
})

app.use(routes)
