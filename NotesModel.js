class NotesModel {
  constructor() {
    this.items = [];
  }

  getNotes() {
    return this.items;
  }

  addNotes(title) {
    this.items.push(title);
 }

  clearNotes() {
    this.items = [];
  }
}

module.exports = NotesModel;