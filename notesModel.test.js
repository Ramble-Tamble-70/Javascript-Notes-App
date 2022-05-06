const NotesModel = require("./notesModel");

describe('NotesModel', () => {
  const model = new NotesModel();
  it("getNotes initially returns an empty array", () => {

  expect(model.getNotes()).toEqual([]);
  });

  it('adds a new note to the notes list', () => {
    model.addNotes('Remember to cancel Netflix subscription');
    model.addNotes('Go to the gym');

    expect(model.getNotes()).toEqual(['Remember to cancel Netflix subscription', 'Go to the gym']);
  })

  it('clears all items in the notes list', () => {
    expect(model.getNotes()).toEqual(['Remember to cancel Netflix subscription', 'Go to the gym']);
    
    model.clearNotes();

    expect(model.getNotes()).toEqual([]);
  });
});