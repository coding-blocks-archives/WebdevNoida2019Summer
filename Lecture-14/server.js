const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');


//initialize step
app.use(bodyParser.json());
app.use('/',express.static('public'));
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret: "I love salsa"}));
app.use(passport.initialize());
app.use(passport.session());

// Form Endpoint
app.post('/login', passport.authenticate('local', 
    {
        successRedirect: '/success',
        failureRedirect: '/'
    }
))

//Strategy
passport.use(new passportLocal(
    function(username, password, done){
        if(username !== 'Aayush'){
         return done(null, false, {message: 'Username is incorrect'})
        }
        if(password !== 'aa1234') {
            return done(null, false, {message: 'Password is incorrect'})
        }
        return done(null, username)
    }
    
))
// Serilize Logic
passport.serializeUser(function(user, done){
    done(null, user)
})
passport.deserializeUser(function(user, done){
    done(null, user)
})

// Redirection
app.get('/success', (req, res)=>{
    res.send('Login Sucessful' + req.user);
})

// User Validation
app.get('/addCart', (req, res)=>{
    if(req.user) res.send("Access")
    else res.send('Access Denied')
})
app.listen(5000, ()=>{
    console.log("server listening")
})