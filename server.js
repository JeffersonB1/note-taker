const express = require ('express');
const app = express();
const {notes} = require('./Develop/db/db.json');
const path = require('path');
const res = require('express/lib/response');





app.get('/api/notes', (req, res) => {
    res.send(notes);
})

app.get('/notes', (req, res)=> {
    res.sendFile(path.join(__dirname,'./Develop/public/notes.html'));


});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'))

}); 

app.listen(3001, () => {
    console.log(`API server now on port 3001`);
});


