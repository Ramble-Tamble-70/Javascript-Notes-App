const NotesModel = require("./NotesModel");

describe('NotesModel', () => {
  it('returns an empty list of notes', () => {
    const model = new NotesModel();

    expect(model.getNotes()).toEqual([]);
  });

  it('adds a new note to the notes list', () => {
    const model = new NotesModel();

    model.addNotes('Remember to cancel Netflix subscription');

    expect(model.getNotes()).toEqual(['Remember to cancel Netflix subscription']);
  })

  it('clears all items in the notes list', () => {
    const model = new NotesModel();

    model.addNotes('Remember to cancel Netflix subscription');
    model.addNotes('Join the gym');
    model.clearNotes();

    expect(model.getNotes()).toEqual([]);
  })
})