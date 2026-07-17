export default function SearchBar({ searchTerm, setSearchTerm, resultCount }) {
  return (
    <div className="search-container">
      <div className="search-box">
        <label htmlFor="menu-search">Search the trilingual menu</label>
        <input
          id="menu-search"
          type="search"
          className="search-input"
          placeholder="Search / Kërko / Ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button type="button" className="search-clear" onClick={() => setSearchTerm('')}>
            Clear
          </button>
        )}
        <output className="search-count" aria-live="polite">
          {resultCount} {resultCount === 1 ? 'dish' : 'dishes'}
        </output>
      </div>
    </div>
  );
}
