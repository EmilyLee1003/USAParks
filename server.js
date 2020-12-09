const express = require('express');
const mongoose = require('mongoose') ;
const path = require('path') ;
const morgan = require('morgan');
const dotenv = require('dotenv');

// const testRouter = require('./routes/testRouters.mjs');
const router = require('./routes/api.js');

dotenv.config({ silent: process.env.NODE_ENV === 'production' })

// const __dirname = path.resolve()
const PORT = process.env.PORT ||8000;
const app = express()

app.use(morgan('tiny'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/users', {
  useNewUrlParser: true,
  useFindAndModify: false,
})

// routes
app.use('/api', router)
// app.use('/r', testRouter)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`)
})
