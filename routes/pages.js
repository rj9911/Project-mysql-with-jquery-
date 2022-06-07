const route = require('express').Router()
const db = require('../db')
 
//db required here but not required in server.js 

route.get('/' , (req , res) => {
    db.getAllPersons()
        .then((persons) => {
    res.render('persons',{persons})
})
    .catch((err) => {
    res.send(err)
})
})

//earlier we have done to add the false data
/*app.get('/' , (req , res) => {
    res.render('persons' , {
        persons : [
            {name : 'abc' , age :24 , city : 'Bhopal'}, 
            {name : 'def' , age :15 , city : 'Lucknow'} 
        ]
    })
})
*/
route.get('/add' , (req, res) => {
    res.render('persons_add')
})

route.post('/add' , (req ,res) => {
      db.addNewPerson(req.body.name , req.body.age , req.body.city)
          .then(() => {
          res.redirect('/pages/')
      })
          .catch((err) => {
          res.send(err)
      })
})

exports = module.exports = {
    route
}