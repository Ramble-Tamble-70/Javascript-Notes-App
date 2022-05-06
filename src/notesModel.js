class NotesModel {
  constructor() {
    this.notes = [];
  }

  getNotes() {
    return this.notes;
  }

  addNotes(note) {
    this.notes.push(note);
 }

  clearNotes() {
    this.notes = [];
  }
}

module.exports = NotesModel;