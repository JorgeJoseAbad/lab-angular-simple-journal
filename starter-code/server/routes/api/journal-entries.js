/*jshint esversion:6*/
const express       = require('express');
const router        = express.Router();
const JournalEntry = require('../../models/journalEntry');
//const journalRoutes = require('./api/journal-entries');

console.log("he llegado a journal-entries.js");

router.get('/journal-entries', function (req, res, next) {
  JournalEntry.find({}, function (err, journal) {
    if (err) return next(err);
    res.json(journal);
  });
});

router.get('/journal-entries/:id', function (req, res, next) {
  const id = req.params.id;
  JournalEntry.findOne({_id : id}, function (err, journal) {
    if (err) return next(err);
    res.json(journal);
  });
});

router.get('/journal-entries/:title', function (req, res, next) {
  const title = req.params.title;
  JournalEntry.findOne({title : title}, function (err, journal) {
    if (err) return next(err);
    res.json(journal);
  });
});



module.exports = router;
