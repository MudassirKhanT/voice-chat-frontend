import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Card from "../../Components/shared/Card/Card";
const Home = () => {
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcom to Codershouse!!!" icon="logo">
        <p className={styles.text}>We're working hard to get Codershouse ready for everyone! While we wrap up the finishing youches, we're adding people gradually to make sure nothing breaks</p>
        <div>
          <button>
            <span>Get your username</span>
            <img src="/images/arrow-forward.png" alt="arrow-forward" />
          </button>
        </div>
        <div>
          <span>Have an invite text?</span>
          <Link to="/login"> Sign in</Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
