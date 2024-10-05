const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = 3000;


const authRoutes = require('./routes/auth');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authRoutes);


app.get('/', (req, res) => {
    res.render('home'); // Assuming you save this as home.ejs
});

app.get('/customer-register', (req, res) => {
    res.render('customer-register');
  });
  
  app.get('/admin-register', (req, res) => {
    res.render('admin-register');
  });
  
  app.get('/admin-login', (req, res) => {
    res.render('admin-login', { error: null }); // Corrected to 'admin-login'
});

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



// Connect to MongoDB
mongoose.connect('mongodb://localhost/auth_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});