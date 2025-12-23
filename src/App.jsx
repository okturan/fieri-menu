import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MenuSection from './components/MenuSection';
import DailyMenu from './components/DailyMenu';
import CartBar from './components/CartBar';
import CartModal from './components/CartModal';
import { menuSections } from './data/menuData';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <CartProvider>
      <div className="menu-container">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Header />

        <div className="menu-grid">
          <div className="menu-column">
            {menuSections.left.map((section, index) => (
              <MenuSection
                key={index}
                title={section.title}
                items={section.items}
                searchTerm={searchTerm}
              />
            ))}
          </div>
          <div className="menu-column">
            {menuSections.right.map((section, index) => (
              <MenuSection
                key={index}
                title={section.title}
                items={section.items}
                searchTerm={searchTerm}
              />
            ))}
          </div>
        </div>

        <DailyMenu searchTerm={searchTerm} />

        <div className="note">
          Prices are in Albanian Lek (ALL). Please inform staff of any allergies.<br />
          Fiyatlar Arnavut Leki (ALL) cinsindendir. Lütfen alerjiniz varsa personeli bilgilendiriniz.
        </div>
      </div>

      <CartBar />
      <CartModal />
    </CartProvider>
  );
}

export default App;
