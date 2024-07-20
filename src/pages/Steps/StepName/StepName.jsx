import React, { useState } from "react";
import Card from "../../../Components/shared/Card/Card";
import TextInput from "../../../Components/shared/TextInput/TextInput";
import Button from "../../../Components/shared/Button/Button";
import styles from "./StepName.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../../store/activateSlice";
const StepName = ({ onNext }) => {
  const { name } = useSelector((state) => state.activate);
  const dispatch = useDispatch();
  const [fullName, setfullName] = useState(name);
  function nextStep() {
    if (!fullName) {
      return;
    }
    dispatch(setName(fullName));
    onNext();
  }
  return (
    <>
      <Card title="What's your full name" icon="goggle-emoji">
        <TextInput value={fullName} onChange={(e) => setfullName(e.target.value)} />
        <p className={styles.paragraph}>People use real names at codershouse :)</p>
        <div className={styles.actionButtonWrap}>
          <Button onClick={nextStep} text="Next" />
        </div>
      </Card>
    </>
  );
};

export default StepName;
