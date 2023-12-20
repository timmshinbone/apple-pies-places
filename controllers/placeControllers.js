/////////////////////////////
//// Import Dependencies ////
/////////////////////////////
const express = require('express')
const axios = require('axios')
const allPlacesUrl = process.env.COUNTRY_API_URL
const nameSearchBaseUrl = process.env.C_BY_NAME_BASE_URL

///////////////////////
//// Create Router ////
///////////////////////
const router = express.Router()

//////////////////////////////
//// Routes + Controllers ////
//////////////////////////////
// GET -> /places/all
// gives us all countries in the api for an index
router.get('/all', (req, res) => {
    const { username, loggedIn, userId } = req.session
    // we have to make our api call
    axios(allPlacesUrl)
        // if we get data, render an index page
        .then(apiRes => {
            console.log('this came back from the api: \n', apiRes.data[0])
            // apiRes.data is an array of country objects
            // res.send(apiRes.data)
            res.render('places/index', { places: apiRes.data, username, userId, loggedIn})
        })
        // if something goes wrong, display an error page
        .catch(err => {
            console.log('error')
            res.redirect(`/error?error=${err}`)
        })
})

// GET -> /places/:name
// give us a specific country's details after searching with the name


///////////////////////
//// Export Router ////
///////////////////////
module.exports = router