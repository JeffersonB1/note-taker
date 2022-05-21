// dependencies
const fs = require('fs');
const path = require('path');
const express = require ('express');

// Express App set up
const app = express();

// sets port to listen and let heroku decide on port, otherwhise, use port 3001
const PORT = process.env.PORT || 3001;


// parse incoming string or array data
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
// parse incoming json data
app.use(express.json());
const {notes} = require('./Develop/db/db.json');
const res = require('express/lib/response');




app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});





























// fetch('/api/notes', {
//     method: 'POST' ,
//     headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(noteObject)
// })
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         }

//         alert('Error: ' + response.statusText);
//     })
//     .then(postResponse => {
//         console.log(postResponse);
//         alert('Thank you for adding a note!');
//     });