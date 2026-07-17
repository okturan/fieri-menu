import { useCart } from '../context/useCart';

export default function CartBar() {
  const { cartCount, cartTotal, toggleModal } = useCart();

  if (cartCount === 0) {
    return null;
  }

  return (
    <button
      type="button"
      className="cart-bar"
      aria-label={`Open planning list: ${cartCount} ${cartCount === 1 ? 'item' : 'items'}, ${cartTotal} Lek`}
      onClick={toggleModal}
    >
      <div className="cart-info">
        <div className="cart-count-badge">{cartCount}</div>
        <span>Shporta / Cart / Sepet</span>
      </div>
      <div>{cartTotal} Lek</div>
    </button>
  );
}
