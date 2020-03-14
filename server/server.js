const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.status(200).render('./../client/signup');
});

app.get('/login', middleware.login, (req, res) => {
  res.status(200).redirect('/login');
})

app.post('/signup', middleware.signup, (req, res) => {
  res.status(200).redirect('/signup');
});

app.get('/results', middleware.results, (req, res) => {
  res.status(200).redirect('/results')
});


//main page  -- two buttons to direct to sign up /log in
//get.post -> sign up  -- zipcode, workout types , ideal times(text input), schema goes here 
//log in -- auth 
//results page -- same zipcode
app.listen(PORT, () => console.log(`listening on Port: ${PORT}`));


module.exports = app;

