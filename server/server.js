const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 8000

app.use(express.json())

const apiRouter = require('./api')

app.use(cors())

app.use('/api', apiRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
