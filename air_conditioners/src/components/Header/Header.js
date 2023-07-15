import React from "react";
import Styles from "./Header.module.scss";
import icon from "../../files/Header/main.png";
import phone from "../../files/Header/phone.svg";

const Header = () => {
  return (
    <header className={Styles.header}>
      <div>
        <div className={Styles.top}>
          <img src={icon} alt="icon" className={Styles.icon} />
          <nav className={Styles.container}>
            <ul className={Styles.links}>
              <li>Техника и сервис</li>
              <li>Ремесленная школа</li>
              <li>Школа рукоделия</li>
            </ul>
          </nav>
          <div className={Styles.right}>
            <div className={Styles.contactBox}>
              <div className={Styles.phone}>
                <img src={phone} alt="phone" />
                <p>+7 (812) 603-46-76</p>
              </div>
              <p>Заказать звонок</p>
            </div>
            <div className={Styles.searchBox}></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
