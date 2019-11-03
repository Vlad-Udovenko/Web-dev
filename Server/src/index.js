const mongoose = require('mongoose');
const express = require('express');
const app = express();
const main = require('./routes/main');

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

const db = require('./config/keys.js').uri;

mongoose.connect(db)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

app.use(express.json())

app.use('/', main);

const port = 3000;
app.listen(port, () => console.log(`Listening the port ${port}...`));