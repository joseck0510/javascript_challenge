
function testNoteContentExists() {
  var note = new Note("I am a note");
  assert.isTrue(note.scribble === "I am a note");
}

testNoteContentExists();
