import { useEffect, useRef } from 'react';
import { useCart } from '../context/useCart';

export default function CartModal() {
  const { cart, cartTotal, isModalOpen, closeModal, changeQty } = useCart();
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isModalOpen) return undefined;

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
        return;
      }

      if (event.key !== 'Tab') return;
      const focusable = [...dialogRef.current.querySelectorAll('button:not(:disabled)')];
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [isModalOpen, closeModal]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className="cart-modal open" onClick={handleBackdropClick}>
      <div
        ref={dialogRef}
        className="cart-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
      >
        <div className="cart-header">
          <div>
            <span className="cart-kicker">Planning list · not an order</span>
            <h2 id="cart-title">Shporta / Cart / Sepet</h2>
          </div>
          <button ref={closeButtonRef} type="button" className="close-cart" aria-label="Close planning list" onClick={closeModal}>&times;</button>
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
                  <button type="button" className="qty-btn" aria-label={`Decrease ${item.names.en}`} onClick={() => changeQty(item.key, -1)}>-</button>
                  <span aria-live="polite">{item.qty}</span>
                  <button type="button" className="qty-btn" aria-label={`Increase ${item.names.en}`} onClick={() => changeQty(item.key, 1)}>+</button>
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
          <p className="cart-boundary">
            This planning list does not place orders or transmit information. It stays in this browser session; show it to restaurant staff and confirm every item, price, and allergy requirement in person.
          </p>
        </div>
      </div>
    </div>
  );
}
