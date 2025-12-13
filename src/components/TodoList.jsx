import TodoItem from './TodoItem'
import EmptyState from './EmptyState'

function TodoList({ filteredNotes, toggleNote, deleteNote, updateNote, darkMode }) {
  if (filteredNotes.length === 0) {
    return <EmptyState darkMode={darkMode} />
  }

  return (
    <div className="notes-container">
      {filteredNotes.map(note => (
        <TodoItem
          key={note.id}
          note={note}
          toggleNote={toggleNote}
          deleteNote={deleteNote}
          updateNote={updateNote}
        />
      ))}
    </div>
  )
}

export default TodoList