import { links } from "../../data";
import style from "./Navbar.module.css";
import logo from "./logo.svg";
import { BiShoppingBag } from "react-icons/bi";

function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className={`${style["nav-header"]}`}>
          <div className={style.nav_logo}>
            <img src={logo} alt="logo" />
            <a href="/">FoodSpin</a>
          </div>
          <ul className={`${style.flex} ${style.nav_items}`}>
            {links.map((item) => {
              const { id, url, link } = item;
              return (
                <li key={id}>
                  <a href={url}>{link}</a>
                </li>
              );
            })}
          </ul>
          <div className={style["shopping-cart"]}>
            <BiShoppingBag />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
