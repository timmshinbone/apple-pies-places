//////////////////////////////////
//// Import Dependencies      ////
//////////////////////////////////
const express = require('express') // import express framework
require('dotenv').config() // import/load ENV variables
const path = require('path') // import path module

/////////////////////////
//// Import Routers  ////
/////////////////////////

////////////////////////////////
//// Create the app object  ////
////////////////////////////////
const app = express() // call the express function

/////////////////////
//// Middleware  ////
/////////////////////

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
