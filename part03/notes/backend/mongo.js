// CONTINUE HERE TOMORROW: https://fullstackopen.com/en/part3/saving_data_to_mongo_db#exercise-3-12

const mongoose = require('mongoose')

require('dotenv').config()
const uri = process.env.MONGODB_URI

mongoose.set('strictQuery', false)

mongoose.connect(uri, { family: 4 }) // Connect to MongoDB with IPv4 family

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

/*
const note = new Note({
  content: 'GET and POST are the most important methods of HTTP protocol',
  important: true
});

note.save().then(() => {
  console.log('Note saved!');
  mongoose.connection.close();
});
*/
/*
Note.find({}).then(notes => {
  notes.forEach(note => {
    console.log(note);
  });
  mongoose.connection.close();
});
*/

Note.find({ important: true }).then(notes => {
  notes.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})