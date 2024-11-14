/* eslint-disable linebreak-style */
const { addNoteHandler } = require('./handler');

/* eslint-disable linebreak-style */
const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
];

module.exports = routes;