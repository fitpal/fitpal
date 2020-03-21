const Partner = require('../models/models.js');
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;
const controller = {

createSignup(req, res) {
      const { username, password, zipcode, contactEmail, workoutType, availability } = req.body;
      console.log('look BODY', req.body)
      //implicit .save in the .create method
      Partner.create({
        username: username, 
        password: password, 
        zipcode: zipcode, 
        contactEmail: contactEmail, 
        workoutType: workoutType, 
        availability: availability}, 
        (err, partner) => {
        if (err){
          console.log('hit')
          res.status(418).send('Failed to signup');
        }else{
          console.log('hit2')
          res.status(200)
        }
      })
},




getlogin: async (req, res, next) =>{
  let { username, password } = req.body;
  console.log('req.body', req.body)
  console.log(password)
  const user = await Partner.findOne({username})
  if (!user){
    console.log('nouser')
    return res.status(401).send({error: 'Login failed! Check authentication credentials'})
  }else {
    bcrypt.compare(password, user.password)
    .then(result => {
      if (!result) {
        console.log('password does not match');
        return next()
      }else{
        //user was found, compare the password to the hased one
        console.log('user was found')
        res.locals.user = user;
        return next();
        }  
      })
    }     
},
  //       .catch(err => {
  //       //error while bcrypt was running
  //       return next('Error in middleware.getLogin: ' +JSON.stringify(err));
  //       })
  //     }
  //   })
  // },


getResults: (req, res, next) =>{
  const { zipcode, workoutType, availability } = req.body;
  console.log(req.body);
//use async await or use callback
//if }) after availability: availability, you'd have to use async await, because there's no CB
  Partner.find({zipcode: zipcode, workoutType: workoutType, availability: availability}, function (err, partners){
  if(err){
    console.log('no partners')
    res.status(418).send('Failed to find any partners');
  } else {
      res.locals.partners = partners;
      return next();
    } 
  })
}
};

module.exports = controller;