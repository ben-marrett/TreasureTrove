const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

const apiRouter = require('./api')

app.use('/api', apiRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
