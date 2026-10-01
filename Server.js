const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

// Connect to MongoDB
mongoose.connect('mongodb+srv://boddireddy100052000_db_user:DSaCF6q0MghVmQSb@cluster0.9tkj7sg.mongodb.net/?appName=Cluster0')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Schemas and Models (You can add your schemas here)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});