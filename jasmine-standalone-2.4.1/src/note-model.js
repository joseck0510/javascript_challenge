var assert = require("/.assert");

// creates a NOTE:
// calls a note and expects text

function testNoteContentExists() {
  var note = new Note();
  assert.isTrue(note.text === "I am a note");
}

testNoteContentExists();
