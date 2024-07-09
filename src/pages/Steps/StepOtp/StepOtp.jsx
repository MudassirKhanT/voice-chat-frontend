import React, { useState } from "react";
import Card from "../../../Components/shared/Card/Card";
import styles from "./StepOtp.module.css";
import TextInput from "../../../Components/shared/TextInput/TextInput";
import Button from "../../../Components/shared/Button/Button";
import { verifyOtp } from "../../../http";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAuth } from "../../../store/authSlice";
const StepOtp = ({ onNext }) => {
  const [otp, StepOtp] = useState("");
  const dispatch = useDispatch();
  const { phone, hash } = useSelector((state) => state.auth.otp);
  async function submit() {
    try {
      const { data } = await verifyOtp({ otp, phone, hash });
      console.log(data);
      dispatch(setAuth(data));
    } catch (err) {
      console.log(err);
    }
  }
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
