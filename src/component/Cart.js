import React from "react";

const Cart = ({ cart, setCart, empty }) => {


  const calcTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].quantity;
    }
    return total;
  };


  return !empty ? (
    <div
      style={{ height: "300px", width: "350px", backgroundColor: "white", position: "sticky",top: "20px",
      }}>
      Mon Panier
      <div>

        {cart.map((item, index) => {
          return (
            <div>

              <button
                onClick={() => {
                  if (item.quantity === 1) {
                    const newCart = [...cart];
                    newCart.splice(index, 1);
                    setCart(newCart);

                  } else {
                    const newCart = [...cart];
                    newCart[index].quantity--;
                    setCart(newCart);
                  }
                }}>
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => {
                  const newCart = [...cart];
                  newCart[index].quantity++;
                  setCart(newCart);
                }} >
                +
              </button>

              <span>{item.title}</span>
              <span>{item.price} €</span>
              <br />

            </div>
          );
        })}

        <span>Sous-total </span>
        <span>{calcTotal()} €</span>
        <br />

        <span>Frais de livraison </span>
        <span>2,50 €</span>
        <br />

        <span>Total </span>
        <span>{(calcTotal() + 2.5).toFixed(2)} €</span>
      </div>
    </div>
    
  ) : (
    <div
      style={{
        height: "300px",
        width: "350px",
        backgroundColor: "white",
        position: "sticky",
        top: "20px",
      }}
    >
      Panier Vide
    </div>
  );
};

export default Cart;
