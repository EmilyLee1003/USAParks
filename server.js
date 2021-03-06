const express = require('express');
const mongoose = require('mongoose') ;
const path = require('path') ;
const morgan = require('morgan');
const dotenv = require('dotenv');

// const testRouter = require('./routes/testRouters.mjs');
const router = require('./routes/index');

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

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/users', {
//   useNewUrlParser: true,
//   useFindAndModify: false,
// })

mongoose.connect( 'mongodb://localhost/parks');
  let db = mongoose.connection 

//check for db error
db.on('error', function(){
  console.log(error);
})

//check conncection 
db.once('open', function(){
  console.log("connected to MongoDB")
});
// routes
app.use('/api', router)
// app.use('/r', testRouter)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`)
})


//server api was not on because the package.json was messed up. so had to do npm run start:prod 