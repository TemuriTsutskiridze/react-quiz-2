function AddTodoModal({ showModal, setShowModal, newNoteText, setNewNoteText, addNote }) {
  if (!showModal) return null

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>NEW NOTE</h3>
        <input
          type="text"
          placeholder="Input your note..."
          value={newNoteText}
          onChange={(e) => setNewNoteText(e.target.value)}
          autoFocus
        />
        <div className="modal-actions">
          <button
            className="cancel-btn"
            onClick={() => {
              setShowModal(false)
              setNewNoteText('')
            }}
          >
            CANCEL
          </button>
          <button className="apply-btn" onClick={addNote}>
            APPLY
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddTodoModal