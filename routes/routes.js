const router = require('express').Router();
const express = require('express')
const path = require('path');
const fs = require('fs');
const note = require('../db/db.json');
const{v4:uuid}= require('uuid');



// function createNewNote(body, notesArray) {
//     const note = body;
//     // functions main code
//     notesArray.push(note);
//     fs.writeFileSync(
//         path.join(__dirname, './Develop/db/db.json'),
//         JSON.stringify({ notes: notesArray }, null, 2)
//     );

//     // return finished code to post route for response
//     return note;
// }

router.post('/api/notes', (req, res) => {
    const createNewNote = {
        "title": req.body.title,
        "text": req.body.text,
        "id": uuid()
    }
    note.push(createNewNote)
    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
    JSON.stringify(note, null, 2))
    res.json(note);
});


router.get('/api/notes', (req, res) => {
    res.json(notes);
});

router.delete('/notes/:id', (req, res) => {
    for (let i = 0; i < note.length; i++) {
        if (note[i].id === req.params.id) {
            note.splice(i, 1);
        }
    }
})

router.get('/api/notes:id', (req, res) => {
    for (let i = 0; i < note.length; i++) {
        if (note[i].id === req.params.id) {
            req.json(note[i]);
        }
    }
});

router.get('/notes', (req, res)=> {
    res.sendFile(path.join(__dirname,'../public/notes.html'));
});

//route to index.html
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))

}); 

module.exports = router;