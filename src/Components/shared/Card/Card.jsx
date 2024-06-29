import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, icon, children }) => {
  //Injected paragraphs and many more contents as children in between <Card><Card/> component
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.headingWrapper}>
          <img src={`/images/${icon}.png`} alt="logo" />
          <h1 className={styles.heading}>{title}</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Card;
