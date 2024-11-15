/* eslint-disable linebreak-style */
const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler } = require('./handler');

/* eslint-disable linebreak-style */
const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },

  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },

  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },

  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: 
  }
];

module.exports = routes;