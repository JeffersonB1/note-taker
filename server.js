// dependencies
const express = require ('express');
const app = express(); // Express App set up
const routes = require('./routes/routes');
const PORT = process.env.PORT || 3001; // sets port to listen and let heroku
                                        // decide on port, otherwhise, use port
                                        // 3001



app.use(express.static('public')); // parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // parse incoming json data
app.use('/', routes);
// app.use('/api', routes);



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