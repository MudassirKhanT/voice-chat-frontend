import React, { useState } from "react";
import Card from "../../../Components/shared/Card/Card";
import styles from "./StepOtp.module.css";
import TextInput from "../../../Components/shared/TextInput/TextInput";
import Button from "../../../Components/shared/Button/Button";

const StepOtp = ({ onNext }) => {
  const [otp, StepOtp] = useState("");

  async function submit() {}
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title="Enter the code we just texted you" icon="lock-emoji">
          <TextInput value={otp} onChange={(e) => StepOtp(e.target.value)} />
          <div className={styles.actionButtonWrap}>
            <Button onClick={submit} text="Next" />
          </div>
          <p className={styles.bottomParagraph}>By entering the number, you're agreeing to our Terms of Service and Privacy Policy. Thanks!</p>
        </Card>
      </div>
    </>
  );
};

export default StepOtp;
