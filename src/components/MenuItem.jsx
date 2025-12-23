import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function MenuItem({ item, searchTerm }) {
  const { addToCart } = useCart();
  const [clickedBtn, setClickedBtn] = useState(null);

  const isVisible = () => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    const text = `${item.nameSq} ${item.nameEn} ${item.nameTr}`.toLowerCase();
    const searchTags = item.searchTags || "";
    return text.includes(term) || searchTags.includes(term);
  };

  const handleAddClick = (price, variantSq, variantEn, variantTr, btnId) => {
    addToCart(item, price, variantSq, variantEn, variantTr);
    setClickedBtn(btnId);
    setTimeout(() => setClickedBtn(null), 1000);
  };

  if (!isVisible()) {
    return null;
  }

  return (
    <div className="menu-item" data-search={item.searchTags}>
      <div className="item-info">
        <span className="item-name-sq">{item.nameSq}</span>
        <span className="item-name-en">{item.nameEn}</span>
        <span className="item-name-tr">{item.nameTr}</span>
      </div>
      <div className="item-price-container">
        {item.variants ? (
          item.variants.map((variant, idx) => (
            <div className="price-row" key={idx}>
              <span className="price-label">{variant.label}</span>
              <span className="price-text">{variant.price} L</span>
              <button
                className="add-btn add-btn-text"
                onClick={() => handleAddClick(variant.price, variant.variantSq, variant.variantEn, variant.variantTr, `${item.nameSq}-${idx}`)}
              >
                {clickedBtn === `${item.nameSq}-${idx}` ? <i className="fas fa-check"></i> : `+${variant.price}`}
              </button>
            </div>
          ))
        ) : (
          <div className="price-row">
            <span className="price-text">{item.price} Lek</span>
            <button
              className="add-btn"
              onClick={() => handleAddClick(item.price, null, null, null, item.nameSq)}
            >
              {clickedBtn === item.nameSq ? <i className="fas fa-check"></i> : '+'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
