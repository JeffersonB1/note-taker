const express = require ('express');
const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming json data
app.use(express.json());
const {notes} = require('./Develop/db/db.json');
const res = require('express/lib/response');
const fs = require('fs');
const path = require('path');



function createNewNote(body, notesArray) {
    const note = body;
    // functions main code
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, './Develop/db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    // return finished code to post route for response
    return note;
}



// API ROUTES
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.post('/api/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();
    // add note to json file and notes array in this function
    const note = createNewNote(req.body, notes);
    res.json(note);
});

// HTML ROUTES
app.get('/notes', (req, res)=> {
    res.sendFile(path.join(__dirname,'./Develop/public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'))

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


app.listen(3001, () => {
    console.log(`API server now on port 3001`);
});


