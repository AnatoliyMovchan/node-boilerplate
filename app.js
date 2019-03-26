const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const config = require('config');

const app = express();

app.options('*', cors());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    console.error('Error:', err);
    res.status(500).json({ error: err.message || 'Server error' });
});

app.listen(config.server.port, () => {
    console.log(`${config.app.name} v${config.app.version} started`);
});