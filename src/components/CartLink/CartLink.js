// import { useContext } from "react";
// import "./CartLink.css";
// import { AppContext } from "../../App";
// import { NavLink } from "react-router-dom";

// export default function CartLink() {
//   const { cart } = useContext(AppContext);

//   // вычислить кол-во товаров
//   const total = Object.values(cart).reduce(
//     (acc, num) => acc + num, 0
//   );

//   return (
//     <div className="CartLink">
//       <NavLink to="/cart">
//         Cart ({total})
//       </NavLink>
//     </div>
//   );
// }
import { useContext } from "react";
import "./CartLink.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function CartLink() {
  const { cart } = useContext(AppContext);

  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);

  return (
    <div className="CartLink" >
      <Link to="/cart" className="link">
        <button className="cartlink-button">
          <img alt="cart" src="https://magic-toys.kg/image/cache/catalog/revolution/demo_tovars/market/soc/shopping-cart-21x21.svg" className="cart" />
          <div>
            Cart: {total}
          </div>
        </button>
      </Link>
    </div>
  )
}