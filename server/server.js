const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const middleware = require('./middleware/middleware.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sarachang:<fitpal123>@fitpal-nqjaq.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.post('/login', middleware.getlogin, (res, req) => {
  res.status(200).send('login successful!');
});

app.post('/signup', middleware.createSignup, (res, req) => {
  res.status(200).send('signup successful!');
});

app.get('/results', middleware.results); 



//main page  -- two buttons to direct to sign up /log in
//get.post -> sign up  -- zipcode, workout types , ideal times(text input), schema goes here 
//log in -- auth 
//results page -- same zipcode
app.listen(PORT, () => console.log(`listening on Port: ${PORT}`));


module.exports = app;

