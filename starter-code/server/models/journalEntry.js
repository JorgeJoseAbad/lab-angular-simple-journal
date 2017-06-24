/*jshint esversion:6*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var JournalSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"]
  },
  content: {
    type: String,
    required: [true, "Content is required"]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const JournalEntry = mongoose.model('JournalEntry',JournalSchema);

module.exports=JournalEntry;
