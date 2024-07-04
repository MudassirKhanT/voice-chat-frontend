import React from "react";
import Card from "../../../../Components/shared/Card/Card";
import Button from "../../../../Components/shared/Button/Button";
import TextInput from "../../../../Components/shared/TextInput/TextInput";
import styles from "../StepPhoneEmail.module.css";
import { useState } from "react";
const Email = ({ onNext }) => {
  const [email, setemail] = useState("");
  return (
    <Card title="Enter your email id" icon="email-emoji">
      <TextInput value={email} onChange={(e) => setemail(e.target.value)} />
      <div>
        <div className={styles.actionButtonWrap}>
          <Button text="Next" onClick={onNext}></Button>
        </div>
        <p className={styles.bottomParagraph}>By entering your number, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!</p>
      </div>
    </Card>
  );
};

export default Email;
