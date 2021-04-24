/*jshint esversion:6*/
const express       = require('express');
const router        = express.Router();
const JournalEntry = require('../../models/journalEntry');
//const journalRoutes = require('./api/journal-entries');

console.log("he llegado a journal-entries.js");

router.get('/journal-entries', function (req, res, next) {
  JournalEntry.find({}, function (err, journal) {
    if (err) return res.json(err).status(500);
    console.log("in journalentry");
    return res.json(journal).status(200);
  });
});

router.get('/journal-entries/:id', function (req, res, next) {
  const id = req.params.id;
  JournalEntry.findOne({_id : id}, function (err, journal) {
    console.log("in jurnalentries/id");
    if (err) return next(err);
    res.json(journal);
  });
});

router.get('/api/journal-entries/:title', function (req, res, next) {
  const title = req.params.title;
  JournalEntry.findOne({title : title}, function (err, journal) {
    if (err) return next(err);
    res.json(journal);
  });
});

router.post('/journal-entries', (req, res, next) => {
  const newEntry = new JournalEntry({
    title: req.body.title,
    content: req.body.content
  });

  newEntry.save( (err) => {
    if (err)             { return res.status(500).json(err); }
    if (newEntry.errors) { return res.status(400).json(newEntry); }
    return res.json(newEntry);
  });
});

module.exports = router;
