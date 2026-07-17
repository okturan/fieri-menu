import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MenuSection from './components/MenuSection';
import DailyMenu from './components/DailyMenu';
import CartBar from './components/CartBar';
import CartModal from './components/CartModal';
import { dailyMenuItems, menuSections } from './data/menuData';
import { matchesSearch } from './utils/menu-search';
import './App.css';

const allMenuItems = [
  ...menuSections.left.flatMap((section) => section.items),
  ...menuSections.right.flatMap((section) => section.items),
  ...dailyMenuItems.left,
  ...dailyMenuItems.right,
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const resultCount = allMenuItems.filter((item) => matchesSearch(item, searchTerm)).length;

  return (
    <CartProvider>
      <div className="menu-container">
        <div className="project-notice" role="note">
          <strong>Unofficial patron project</strong>
          <span>Planning list only · confirm availability, allergens, and prices with restaurant staff</span>
        </div>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          resultCount={resultCount}
        />
        <Header />

        {resultCount > 0 ? (
          <>
            <div className="menu-grid">
              <div className="menu-column">
                {menuSections.left.map((section) => (
                  <MenuSection
                    key={section.title}
                    title={section.title}
                    items={section.items}
                    searchTerm={searchTerm}
                  />
                ))}
              </div>
              <div className="menu-column">
                {menuSections.right.map((section) => (
                  <MenuSection
                    key={section.title}
                    title={section.title}
                    items={section.items}
                    searchTerm={searchTerm}
                  />
                ))}
              </div>
            </div>

            <DailyMenu searchTerm={searchTerm} />
          </>
        ) : (
          <div className="no-results" role="status">
            <span aria-hidden="true">0</span>
            <h2>No dishes match “{searchTerm}”</h2>
            <button type="button" onClick={() => setSearchTerm('')}>Clear search</button>
          </div>
        )}

        <div className="note">
          Prices are in Albanian Lek (ALL). Please inform staff of any allergies.<br />
          Fiyatlar Arnavut Leki (ALL) cinsindendir. Lütfen alerjiniz varsa personeli bilgilendiriniz.
          <br />This site does not place orders or transmit information to the restaurant.
        </div>
      </div>

      <CartBar />
      <CartModal />
    </CartProvider>
  );
}

export default App;
