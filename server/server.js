const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const middleware = require('./middleware/middleware.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sun:baby@cluster0-cnxmy.mongodb.net/Fitpal?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.post('/signup', middleware.createSignup, (req, res) => {
  res.status(200).send('signup successful!');
});
//whenever you send, you end the chain of middlewares, you need to do .next in createSignup
// or have .send('signup successful)in middleware.createSignup

app.post('/login', middleware.getlogin, (req, res) => {
  console.log(res);
  res.status(200).send('login successful!');
});

app.get('/results', middleware.getResults, (req, res) => {
  console.log('this is', res.locals.partners)
  res.status(200).json(res.locals.partners)
}); 



//main page  -- two buttons to direct to sign up /log in
//get.post -> sign up  -- zipcode, workout types , ideal times(text input), schema goes here 
//log in -- auth 
//results page -- same zipcode
app.listen(PORT, () => console.log(`listening on Port: ${PORT}`));


module.exports = app;

