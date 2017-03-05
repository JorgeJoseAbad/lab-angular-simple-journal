/*jshint esversion:6*/
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/journal-development');
const JournalEntry = require('../models/journalEntry');


const journalEntries = [
  {
    title:    "primera",
    content:  "felis at nibh congue malesuada. Sed vel quam lectus.",
    //la fecha se rellena por defecto en este caso y los 9 siguienteas
  },
  {
    title:    "segunda",
    content:  "Quisque eget ante facilisis, lacinia justo et, porta metus",

  },
  {
    title:    "tercera",
    content:  "Quisque eget ante facilisis, lacinia justo et, porta metus",

  },
  {
    title:    "cuarta",
    content:  "Quisque eget ante facilisis, lacinia justo et, porta metus",

  },
  {
    title:    "quinta",
    content:  "Quisque eget ante facilisis, lacinia justo et, porta metus",

  },
  {
    title:    "sexta",
    content:  "Quisque eget ante facilisis, lacinia justo et, porta metus",

  },
  {
    title:    "septima",
    content:  "Quisque eget ante facilisis, lacinia justo et, porta metus",

  },
  {
    title:    "octava",
    content:  "Quisque eget ante facilisis, lacinia justo et, porta metus",

  },
  {
    title:    "novena",
    content:  "Quisque eget ante facilisis, lacinia justo et, porta metus",

  },
  {
    title:    "decima",
    content:  "Quisque eget ante facilisis, lacinia justo et, porta metus",

  }

];

JournalEntry.create(journalEntries, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach((journalEntry) => {
    console.log(journalEntry.title);
  });
  mongoose.connection.close();
});
