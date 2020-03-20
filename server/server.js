const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const middleware = require('./middleware/middleware.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sarachang:fitpal123@fitpal-nqjaq.mongodb.net/fitpal?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.post('/signup', middleware.createSignup, (res, req) => {
  res.status(200).send('signup successful!');
});

app.post('/api/login', middleware.getlogin, (res, req) => {
  res.status(200).send(res.locals.user);
});

app.get('/results', middleware.getResults, (res, req) => {
  res.status(200).json(res.locals.partners)
}); 



//main page  -- two buttons to direct to sign up /log in
//get.post -> sign up  -- zipcode, workout types , ideal times(text input), schema goes here 
//log in -- auth 
//results page -- same zipcode
app.listen(PORT, () => console.log(`listening on Port: ${PORT}`));


module.exports = app;

