const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

const model = new NotesModel();
const view = new NotesView(model);

model.addNotes(message);

console.log('The notes app is running');
console.log(model.getNotes());

view.displayNotes();

// index.js is the main file
// it loads all the other dependencies (source files)