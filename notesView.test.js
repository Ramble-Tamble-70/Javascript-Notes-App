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

  view.displayNotes();

  expect(document.querySelectorAll('div.note').length).toEqual(1);
 });

 it('adds a new note', () => {
   // Arrange
  document.body.innerHTML = fs.readFileSync('./index.html');

  const model = new NotesModel();
  const view = new NotesView(model);
  
  // Act
  const input = document.querySelector('#add-note-input');
  input.value = 'Hope you can see my new note';

  const button = document.querySelector('#add-note-btn');
  button.click();
  
  //Assert
  expect(document.querySelectorAll('div.note').length).toEqual(1);
  expect(document.querySelectorAll('div.note')[0].innerText).toEqual('Hope you can see my new note');
 });

 it('clears the list of previous notes before displaying', () => {
  document.body.innerHTML = fs.readFileSync('./index.html');

  const model = new NotesModel();
  const view = new NotesView(model);
  model.addNotes('one');
  model.addNotes('two');

  view.displayNotes();
  view.displayNotes();

  expect(document.querySelectorAll('div.note').length).toEqual(2);
 });
});