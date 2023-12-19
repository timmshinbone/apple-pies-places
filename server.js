//////////////////////////////////
//// Import Dependencies      ////
//////////////////////////////////
const express = require('express') // import express framework
require('dotenv').config() // import/load ENV variables
const path = require('path') // import path module
const middleware = require('./utils/middleware')
/////////////////////////
//// Import Routers  ////
/////////////////////////

////////////////////////////////////////////////////
//// Create the app object + set up view engine ////
////////////////////////////////////////////////////
const app = express() // call the express function

// view engine - ejs
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

/////////////////////
//// Middleware  ////
/////////////////////
middleware(app)

/////////////////
//// Routes  ////
/////////////////
// basic home route
app.get('/', (req, res) => {
    res.send('the app is connected')
})

//////////////////////////
//// Server Listener  ////
//////////////////////////
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log('Your server is running, better go catch it')
})

// End
