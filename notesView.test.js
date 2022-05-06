/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

describe('Notes view', () => {
  it('displays 2 notes', () => {
  document.body.innerHTML = fs.readFileSync('./index.html');
  
  const model = new NotesModel();
  const view = new NotesView(model);

  model.addNotes('Display note test 1');
  model.addNotes('Disply note test 2');

  view.displayNotes();

  expect(document.querySelectorAll('div.note').length).toEqual(2);
 });
});