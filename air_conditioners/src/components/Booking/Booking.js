import React from "react";
import Styles from "./Booking.module.scss";

const Booking = () => {
  return (
    <div className={Styles.main}>
      <div className={Styles.container}>
        <p className={Styles.heading}>
          Забронируйте обучение со скидкой <span>до 14 июля</span>
        </p>
        <div className={Styles.info}>
          <div className={Styles.infoBox}></div>
          <div className={Styles.infoBox}></div>
        </div>
        <form className={Styles.submissionForm} action="">
          <input placeholder="Имя" type="text" />
          <input placeholder="Телефон" type="text" />
          <button>Оставить заявку</button>
        </form>
        <p className={Styles.consent}>
          Нажимая на кнопку, вы даёте согласие на обработку персональных данных
          и соглашаетесь с <span>политикой обработки персональных данных.</span>
        </p>
      </div>
    </div>
  );
};

export default Booking;
