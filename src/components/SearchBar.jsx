import searchIcon from '../assets/search-icon.svg'

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search note..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-btn">
        <img src={searchIcon} alt="Search" />
      </button>
    </div>
  )
}

export default SearchBar