//////////////////////////////////
//// Import Dependencies      ////
//////////////////////////////////
const express = require('express') //express framework
const morgan = require('morgan') //morgan logger for request info
const session = require('express-session')
const MongoStore = require('connect-mongo') // connect-mongo(for the session)
require('dotenv').config()
const methodOverride = require('method-override') // for forms and CRUD

//////////////////////////////////
//// Middleware Function      ////
//////////////////////////////////
// instead of filling server.js with a buncha stuff
// we'll contain our middleware actions to a single function
// this function takes an entire app as an argument
// from there it runs requests through all of our middleware
const middleware = (app) => {
    // middleware runs before all routes
    // EVERY request is first processed through middleware
    // method-override - allows us to use forms to their full potential
    app.use(methodOverride('_method'))
    // morgan logs our requests to the console
    app.use(morgan('tiny')) //tiny is a qualifier that says - be short
    // to serve stylesheets, we use static files in the public directory
    app.use(express.static('public'))
    // to utilize json we can add this:
    app.use(express.json())

    // here, we are setting up and utilizing a session function
    // we pass that function an argument, a configuration object
    // the config object needs several keys in order to work(see express-session docs for this)
    // The keys are: 
        // secret - super duper top secret code that creates an individual session from the app that calls this function
        // kinda like authorization, allows our app to connect to mongodb
        // that uses the connect-mongo(see docs for more)
        // store - tells connect-mongo where to save the session(our db)
        // the two other options can be read about in the connect-mongo docs
        // but they're not worth wasting brain space on rn.
    app.use(
        session({
            secret: process.env.SECRET,
            store: MongoStore.create({
                mongoUrl: process.env.DATABASE_URL
            }),
            saveUninitialized: true,
            resave: false
        })
    )
}

////////////////////////////////////////////
//// Export the Middleware Function     ////
////////////////////////////////////////////
module.exports = middleware