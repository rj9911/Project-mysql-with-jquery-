const route = require('express').Router()
// This route is on the "/api/" path

const db = require('../db')

// Two parts of the api
route.get('/persons/' , (req ,res) => {
      // send all the persons as an array here
    setTimeout(() => {
      db.getAllPersons()
        .then((persons) => res.send(persons))
        .catch((err) => res.send({error : err}))
    } , 2000)
    // Artificially added delay now it take two seconds to load the page
})

route.post('/persons/' , (req ,res) => {
     // Add the new Persons (Details are in their body)
     db.addNewPerson(req.body.name , req.body.age, req.body.city)
       .then(() => res.redirect('/api/persons/'))     // Redirected to get all persons data
       .catch((err) => res.send({error : err}))
})

exports = module.exports = {
    route
}