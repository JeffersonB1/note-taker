const router = require('express').Router();
const express = require('express')
const path = require('path');
const fs = require('fs');
const notes = require('../db/db.json');
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
    notes.push(createNewNote)
    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
    JSON.stringify(notes, null, 2))
    res.json(notes);
});


router.get('/api/notes', (req, res) => {
    res.json(notes);
});

router.delete('/api/notes/:id', (req, res) => {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === req.params.id) {
            notes.splice(i, 1);
        }
    }
    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
    JSON.stringify(notes, null, 2))
    res.json(notes);
})

router.get('/api/notes/:id', (req, res) => {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === req.params.id) {
            res.json(notes[i]);
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