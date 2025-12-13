import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import FilterDropdown from './components/FilterDropdown'
import TodoList from './components/TodoList'
import AddTodoModal from './components/AddTodoModal'
import sunIcon from './assets/sun-icon.svg'
import moonIcon from './assets/moon-icon.svg'
import addIcon from './assets/add-icon.svg'

function App() {
  const [notes, setNotes] = useState([
    { id: 1, text: 'NOTE #1', completed: false },
    { id: 2, text: 'NOTE #2', completed: true },
    { id: 3, text: 'NOTE #3', completed: false }
  ])
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('All')
  const [darkMode, setDarkMode] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [newNoteText, setNewNoteText] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)

  const addNote = () => {
    if (newNoteText.trim()) {
      const newNote = {
        id: Date.now(),
        text: newNoteText,
        completed: false
      }
      setNotes([...notes, newNote])
      setNewNoteText('')
      setShowModal(false)
    }
  }

  const toggleNote = (id) => {
    setNotes(notes.map(note =>
      note.id === id ? { ...note, completed: !note.completed } : note
    ))
  }

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  const updateNote = (id, text) => {
    setNotes(notes.map(note =>
      note.id === id ? { ...note, text } : note
    ))
  }

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.text.toLowerCase().includes(searchTerm.toLowerCase())
    if (filter === 'All') return matchesSearch
    if (filter === 'Complete') return matchesSearch && note.completed
    if (filter === 'Incomplete') return matchesSearch && !note.completed
    return matchesSearch
  })

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <Header />

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="controls">
          <FilterDropdown
            filter={filter}
            setFilter={setFilter}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
          />

          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            <img src={darkMode ? sunIcon : moonIcon} alt="Theme toggle" />
          </button>
        </div>

        <TodoList
          filteredNotes={filteredNotes}
          toggleNote={toggleNote}
          deleteNote={deleteNote}
          updateNote={updateNote}
          darkMode={darkMode}
        />

        <button
          className="add-btn"
          onClick={() => setShowModal(true)}
        >
          <img src={addIcon} alt="Add" />
        </button>

        <AddTodoModal
          showModal={showModal}
          setShowModal={setShowModal}
          newNoteText={newNoteText}
          setNewNoteText={setNewNoteText}
          addNote={addNote}
        />
      </div>
    </div>
  )
}

export default App