require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

const routes = require('./routes')

require('./database/index');

app.use(cors())
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server running on port ${process.env.PORT || 8000}.`)
})

app.use(routes)
