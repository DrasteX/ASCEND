const express = require('express');
const mongoose = require('mongoose');
const userInfoRoute = require('./routes/userinfo.route.js');
const questlibRoute = require('./routes/questlib.route.js');
const accountsRoute = require('./routes/accounts.route.js');
const lvlInvRoute = require('./routes/lvlInv.route.js');
const itemlibRoute = require('./routes/itemlib.route.js')
const app = express();
const cors = require('cors');


//CORS configuration
const react_ip = 'http://localhost:3001';
corsOptions = {
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));


// Routes

app.use('/api/lvlinv', lvlInvRoute);
app.use('/api/itemlib', itemlibRoute)
app.use('/api/userquests', require('./routes/userQuests.route.js'));
app.use('/api/accounts', accountsRoute);
app.use('/api/userinfo', userInfoRoute);
app.use('/api/questlib', questlibRoute);

app.get('/', (req, res) => {
    res.send('Hello World');
    console.log(req.query);
});


// MongoDB connection

const password = encodeURIComponent('Yuki@2157');

mongoose.connect(`mongodb+srv://drastex:${password}@cluster0.5skghdj.mongodb.net/AscendAPI?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {  
        console.log('Connected to MongoDB');
        app.listen(3000, () => {
        console.log('Server is running on port 3000');
        })
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });





