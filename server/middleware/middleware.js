const Partner = require('../models/models.js');
const controller = {

createSignup(req, res) {
      const { username, password, zipcode, contactEmail, workoutType, availability } = req.body;
      console.log('look BODY', req.body)
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
          res.status(200).send(partner)
        }
      })
},




getlogin(req, res, next) {
  const { username, password } = req.body;
  Partner.find({ username, password }, (err, user) => {
    if (err){
        //database error
      return next('Error in middleware.getLogin: '+ JSON.stringify(err));
    } else if (!user){
        //no user was found
      console.log('HERE IS THE PROBLEM', user)
      res.redirect('/signup');
    } else {
        //user was found, compare the password to the hashed one
      bcrypt.compare(password, Partner.password)
        .then(result => {
          if (!result) {
            //password did not match
            res.redirect('/signup')
        }
        else{
            //password did match, save user for following middlewares
            res.locals.user = user;
            return next();
    }
})
        .catch(err => {
        //error while bcrypt was running
        return next('Error in middleware.getLogin: ' +JSON.stringify(err));
        })
      }
    })
  },


getResults(req, res, next) {
  const { username, password, zipcode, contacts, workoutType, availability } = req.body;
  if (!req.body) return res.send('no req');
  Partner.findAll({zipcode: zipcode, workoutType: workoutType, availability: availability}, ((err, partners) => {
    if(err) {
      res.status(418).send('Failed to find any partners');
    }else {
      res.locals.partners = partners;
      return next()
      // res.status(200).send(partners);
    } 
  })
)}

};

module.exports = controller;
