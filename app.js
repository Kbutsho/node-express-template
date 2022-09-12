const express = require('express');
const app = express();
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json());
// app.use(express.static("public"));
// app.use(express.urlencoded({ extended: false }));


//schema design

app.get('/', (req, res) => {
    res.status(200).json({
        'status': true,
        'message': 'Index api'
    });
});
app.all('*', (req, res) => {
    res.status(404).json({
        'status': false,
        'message': 'page not found',
    });
});

module.exports = app;