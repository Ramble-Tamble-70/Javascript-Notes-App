console.log("The notes app is running");

const NotesModel = require("./NotesModel");

const model = new NotesModel();

model.addNotes('Take the recycling out tomorrow morning')

console.log(model.getNotes());

// index.js is the main file
// it loads all the other dependencies (source files)