/*jshint esversion:6*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var JournalSchema = new Schema({
  title:    String,
  content:  String,
  date:     { type: Date, default: Date.now },

});

const JournalEntry = mongoose.model('JournalEntry',JournalSchema);

module.exports=JournalEntry;
