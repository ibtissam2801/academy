//Import express
let express = require('express');

//Initiate the app
let app = express();

//Setup the server port
var port = process.env.PORT || 8000;

let session = require('express-session');
app.use(session ({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true
    })
);

//Login
app.get('/login/:user', (req,res)=>{
    req.session.user = req.params.user;
    console.log(req.session);
    res.send('Hello ' + req.session.user);
});

//Show user session
app.get('/test', (req,res)=>{
    console.log(req.session);
    res.send('Hello session ' + req.session.user);
});

//Logout endpoint
app.get('/logout', (req,res)=>{
    req.session.destroy();
    res.send('Logout success! ');
});

//Send message default
app.get('/', (req,res) => res.send('Hello World! '));

//Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running on port " + port);
});