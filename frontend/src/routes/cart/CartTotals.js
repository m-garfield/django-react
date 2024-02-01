import React from "react";
import CheckoutBtn from "../checkout/CheckoutBtn";
import LinkButton from "../../components/Button";
import ResetLocation from "../../helpers/ResetLocation";
import { Link } from "react-router-dom";

const CartTotals = ({ totalPayment, productsQuantity, taxes, className, validLogin, showModal, activateLoginModal }) => {
  return (
    <article className={className}>
      {productsQuantity === 0 ? null : (
        <section className="cart-totals">
          <section className="totals-content">
            <section>
              <h4 className="cart-totals-sum">НДС 10%:</h4>
              <p>₽ {taxes}</p>
            </section>
            <section>
              <h4 className="cart-totals-sum">Количество:</h4>
              <p> {productsQuantity}</p>
            </section>
            <section>
              <h4 className="cart-totals-sum">Сумма заказа:</h4>
              <p>₽ {totalPayment}</p>
            </section>
          </section>
          {className === "cart-carttotals" ? (
            <section className="cart-interaction-btns">
              <CheckoutBtn
                className="active-button-style"
                validLogin={validLogin}
                showModal={showModal}
                activateLoginModal={activateLoginModal}
              />
              <LinkButton
                onClick={ResetLocation}
                to="/menu"
                className="back-to-menu"
              >
                Вернуться в меню
              </LinkButton>
            </section>
          ) : (
            <section className="checkout-interaction-btns">
              <Link to="/payment" className="active-button-style" onClick={ResetLocation}>
                Перейти к оплате
              </Link>
              <Link to="/menu" className="checkout-backtomenu-btn" onClick={ResetLocation}>
              Вернуться в меню
              </Link>
            </section>
          )}
        </section>
      )}
    </article>
  );
}

export default CartTotals;
