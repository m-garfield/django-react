import React from "react";
import { Link } from "react-router-dom";
//components
import ResetLocation from "../../helpers/ResetLocation";

const EmptyCart = () => {
  return (
    <React.Fragment>
      <h3>О, нет, ваша корзина пуста.</h3>
      <p>Кажется, вы еще ничего не добавили в корзину.</p>
      <Link to="/menu" className="active-button-style" onClick={ResetLocation}>
        Исследуйте меню
      </Link>
    </React.Fragment>
  );
}

export default EmptyCart;
