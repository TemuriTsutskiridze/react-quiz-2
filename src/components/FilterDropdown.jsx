function FilterDropdown({ filter, setFilter, showDropdown, setShowDropdown }) {
  return (
    <div className="filter-dropdown">
      <button
        className="dropdown-button"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {filter}
        <img src="/src/assets/arrow.png" alt="Arrow" className="dropdown-arrow" />
      </button>
      {showDropdown && (
        <div className="dropdown-menu">
          <div className="dropdown-item" onClick={() => { setFilter('All'); setShowDropdown(false); }}>All</div>
          <div className="dropdown-item" onClick={() => { setFilter('Complete'); setShowDropdown(false); }}>Complete</div>
          <div className="dropdown-item" onClick={() => { setFilter('Incomplete'); setShowDropdown(false); }}>Incomplete</div>
        </div>
      )}
    </div>
  )
}

export default FilterDropdown