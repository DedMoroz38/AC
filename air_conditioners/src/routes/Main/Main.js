import React from "react";
import Styles from "./Main.module.scss";
import SwipingMenu from "../../components/Swiper/Swiper";

const Main = () => {
  return (
    <div className={Styles.main}>
      <div className={Styles.container}>
        <div className={Styles.heading}>
          <h2>Sub-heading</h2>
          <h1>Heading</h1>
          <p>City</p>
        </div>
        <div className={Styles.card}>
          <div className={Styles.cardLeft}></div>
          <div className={Styles.cardRight}></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
