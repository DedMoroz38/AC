import React from "react";
import Styles from "./Courses.module.scss";

const Courses = () => {
  const a = [1, 2];
  return (
    <div className={Styles.main}>
      <div className={Styles.container}>
        <div className={Styles.headingBox}>
          <p>Text1</p>
          <h2>Text2</h2>
        </div>
        {a.map(() => (
          <div className={Styles.card}>
            <div className={Styles.cardLeft}>
              <div className={Styles.cardLeftBox}></div>
            </div>
            <div className={Styles.cardMiddle}></div>
            <div className={Styles.cardRight}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
