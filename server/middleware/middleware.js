const User = require('../models/models.js');
const controller = {};

controller.login = (req, res, next) => {
  User.findOne({username}, (err, user) => {
    if (err){
        //database error
      return next('Error in userController.verifyUsers: '+JSON.stringify(err));
    } else if (!user){
        //no user was found
      res.redirect('/signup');
    } else{
        //user was found, compare the password to the hased one
      bcrypt.compare(password, user.password)
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
        return next('Error in userController.verifyUser: ' +JSON.stringify(err));
        })
      }
    })
  };

controller.signup = (req, res, next) => {
  const {username, password, zipcode, contacts, workoutType, availability} = req.body;
  if (!username || !password || !zipcode || !contacts || !workoutType || !availability) return next ('Please Fill Out Missing Information');
  User.create({username, password, zipcode, contacts, workoutType, availability}, (err, user) =>{
    if (err) {
      return res.render('../client/signup', {error:err});
      }else {
        //save the user document for accessing it in following middlewares
      res.locals.user = user;
      return next();
      }
    });
  };

controller.results = (req, res, next) => {
    // Student.find({firstName: req.params.name}, function (err, students){
    //     if (err || student.length === 0){
    //       res.status(500).send('Failed to find student');
    //     }else{
          //
}

module.exports = controller