import { useCart } from '../context/CartContext';

export default function CartModal() {
  const { cart, cartTotal, isModalOpen, toggleModal, closeModal, changeQty } = useCart();

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleCheckout = () => {
    alert('Porosia u dërgua në kuzhinë! / Order Sent to Kitchen! / Sipariş Mutfağa Gönderildi!');
  };

  return (
    <div className={`cart-modal ${isModalOpen ? 'open' : ''}`} onClick={handleBackdropClick}>
      <div className="cart-content">
        <div className="cart-header">
          <h2>Shporta / Cart / Sepet</h2>
          <button className="close-cart" onClick={toggleModal}>&times;</button>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart-msg">Shporta është bosh / Cart is empty / Sepet boş</div>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.key}>
                <div className="cart-item-details">
                  <span className="cart-item-name-sq">{item.names.sq}</span>
                  <span className="cart-item-name-en">{item.names.en}</span>
                  <span className="cart-item-name-tr">{item.names.tr}</span>
                  <span className="cart-item-price">
                    {item.price} Lek x {item.qty} = {item.price * item.qty} Lek
                  </span>
                </div>
                <div className="cart-controls">
                  <button className="qty-btn" onClick={() => changeQty(item.key, -1)}>-</button>
                  <span>{item.qty}</span>
                  <button className="qty-btn" onClick={() => changeQty(item.key, 1)}>+</button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="cart-footer">
          <div className="total-row">
            <span>Total / Toplam:</span>
            <span>{cartTotal} Lek</span>
          </div>
          <button className="checkout-btn" onClick={handleCheckout}>
            Porosit / Order / Sipariş Ver
          </button>
        </div>
      </div>
    </div>
  );
}
