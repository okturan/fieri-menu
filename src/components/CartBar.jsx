import { useCart } from '../context/CartContext';

export default function CartBar() {
  const { cartCount, cartTotal, toggleModal } = useCart();

  if (cartCount === 0) {
    return null;
  }

  return (
    <div className="cart-bar" onClick={toggleModal}>
      <div className="cart-info">
        <div className="cart-count-badge">{cartCount}</div>
        <span>Shporta / Cart / Sepet</span>
      </div>
      <div>{cartTotal} Lek</div>
    </div>
  );
}
