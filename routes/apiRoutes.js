const express = require("express");
const router = express.Router();

var uuid = require('uuid');

//brings in the DB class as an object
const DB = require('../db/DB');

//route to get the notes
router.get("/api/notes", async function (req, res) {
    const notes = await DB.readNotes();
    return res.json(notes);
});

//route to add a new note and to add it to the json file
router.post("/api/notes", async function (req, res) {
    const currentNotes = await DB.readNotes();
    let newNote = {
        id: uuid(),
        title: req.body.title,
        text: req.body.text,
    };

    await DB.addNote([...currentNotes, newNote]);

    return res.send(newNote);
});

// route to delete notes
router.delete("/api/notes/:id", async function (req, res) {
    const noteDelete = req.params.id;

    const currentNotes = await DB.readNotes();

    const newNoteData = currentNotes.filter((note) => note.id !== noteDelete);

    await DB.deleteNote(newNoteData);

    return res.send(newNoteData);
});

module.exports = router;
