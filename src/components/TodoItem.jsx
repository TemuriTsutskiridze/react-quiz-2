import { useState } from 'react'
import editIcon from '../assets/edit-icon.svg'
import deleteIcon from '../assets/delete-icon.svg'

function TodoItem({ note, toggleNote, deleteNote, updateNote }) {
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')

  const startEdit = (id, text) => {
    setEditingId(id)
    setEditText(text)
  }

  const saveEdit = () => {
    if (editText.trim()) {
      updateNote(editingId, editText)
    }
    setEditingId(null)
    setEditText('')
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditText('')
  }

  return (
    <div className={`note-item ${note.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={note.completed}
        onChange={() => toggleNote(note.id)}
      />
      {editingId === note.id ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="edit-input"
          onKeyDown={(e) => e.key === 'Enter' && saveEdit()}
          autoFocus
        />
      ) : (
        <span className="note-text">{note.text}</span>
      )}
      <div className="note-actions">
        {editingId === note.id ? (
          <>
            <button className="save-btn" onClick={saveEdit}>
              ✓
            </button>
            <button className="cancel-btn-edit" onClick={cancelEdit}>
              ✕
            </button>
          </>
        ) : (
          <>
            <button className="edit-btn" onClick={() => startEdit(note.id, note.text)}>
              <img src={editIcon} alt="Edit" />
            </button>
            <button className="delete-btn" onClick={() => deleteNote(note.id)}>
              <img src={deleteIcon} alt="Delete" />
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default TodoItem