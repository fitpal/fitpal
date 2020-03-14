const User = require('../models/models.js');
const controller = {

createSignup(req, res, next) {
    const { username, password, zipcode, contacts, workoutType, availability } = req.body;
    if (!req.body) return res.send('no req');
    Signup.create({username: username, password: password, zipcode: zipcode, contacts: contacts, workoutType: workoutType, availability: availability}, (err, data) => {
    if (err) return res.status(418).send('Failed to create account');
    });
    return next();
  },


getlogin(req, res, next) {
  const { username, password } = req.body;
  Partner.findOne({ username, password }, (err, user) => {
    if (err){
        //database error
      return next('Error in middleware.getLogin: '+JSON.stringify(err));
    } else if (!user){
        //no user was found
      res.redirect('/signup');
    } else{
        //user was found, compare the password to the hased one
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
  Partner.find({zipcode: zipcode, workoutType: workoutType, availability: availability}, ((err, partners) => {
    if(err || partners.length === 0) {
      res.status(500).send('Failed to find any partners');
    }else {
      res.status(200).send(partners[0]);
    } 
  })
)}

};

module.exports = controller;