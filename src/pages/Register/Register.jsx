import React, { useState } from "react";
//import styles from "./Register.module.css";
import StepAvatar from "../Steps/StepAvatar/StepAvatar";
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
import StepOtp from "../Steps/StepOtp/StepOtp";
import StepUsername from "../Steps/StepUsername/StepUsername";
import StepName from "../Steps/StepName/StepName";

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
  3: StepName,
  4: StepAvatar,
  5: StepUsername,
};

const Register = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];
  function onNext() {
    setStep(step + 1);
    console.log("Moved to next page");
  }
  return (
    <div>
      <Step onNext={onNext} />
    </div>
  );
};

export default Register;