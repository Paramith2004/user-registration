const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require('express-session'); 
const User = require('./models/user');
const userRoutes = require('./routes/userRoutes');


const app = express();
const saltRounds = 10;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use('/api', userRoutes);


app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: false
}));

mongoose.connect('mongodb://127.0.0.1:27017/userDB')
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.send('User with this email already exists');

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        req.session.user = newUser;
        res.redirect('/dashboard');
    } catch (err) {
        res.send('Error: ' + err.message);
    }
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.send('User not found');

        const validPass = await bcrypt.compare(password, user.password);
        if (!validPass) return res.send('Incorrect password');

        req.session.user = user;
        res.redirect('/dashboard');
    } catch (err) {
        res.send('Error: ' + err.message);
    }
});

app.get('/dashboard', (req, res) => {
    if (!req.session.user) return res.redirect('/login');
    res.render('success', { name: req.session.user.name });
});

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) return res.send('Error logging out');
        res.redirect('/login');
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
