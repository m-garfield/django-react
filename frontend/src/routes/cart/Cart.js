import React, { useEffect } from "react";
//components
import ScrollBtn from "../../helpers/ScrollBtn";
import EmptyCart from "./EmptyCart";



const Cart = ({ cartItems, CartItem }) => {
  useEffect(() => {
    document.title = "Shopping Cart | 4:20";
    // vantaHalo({
    //   el: "#bgc",
    //   mouseControls: true,
    //   touchControls: true,
    //   gyroControls: true,
    //   minHeight: 200.00,
    //   minWidth: 200.00,
    //   baseColor: 0x220022,
    //   backgroundColor: 0xd0d1b,
    //   amplitudeFactor: 3.00
      
    // })
    
  }, []);
 
  return (
    <main className="cart" id="bgc">
      <h2>Ваш заказ</h2>
      <article className="cart-content">
        {cartItems.length === 0 ? <EmptyCart /> : CartItem}
      </article>
      <ScrollBtn />
    </main>
  );
}

export default Cart;
