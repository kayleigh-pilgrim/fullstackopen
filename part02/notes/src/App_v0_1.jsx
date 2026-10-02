const Note = ({ note }) => <li>{note.content}</li>

function App({ notes }) {
  return (
    <>
      <h1>Notes</h1>
      <ul>
        {/*
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>

        {notes.map(note =>
          <li>
            {note.content}
          </li>
        )}

        {notes.map(note =>
          <li key={note.id}>
            {note.content}
          </li>
        )}
        */ }
        {notes.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
    </>
  )
}

export default App
