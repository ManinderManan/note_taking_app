const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express('path');
const allNotes = require('./db/db.json');
const { urlencoded } = require('body-parser');
const e = require('express');

const Port = process.env.PORT || 3001;


app.use(express.json());
app.use(urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
    res.json(allNotes.slice(1));
})

