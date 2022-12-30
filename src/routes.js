const {
  addNoteHandler,
  getAllNotesHandler, getNoteByIdHandler, editNoteByidHandler, deleteNoteByidHandler,
} = require('./handler');

const routes = [
  {
    path: '/notes',
    method: 'GET',
    handler: getAllNotesHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },

  },
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    path: '/notes/{id}',
    method: 'GET',
    handler: getNoteByIdHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },

  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByidHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByidHandler,
  },
];

module.exports = routes;
