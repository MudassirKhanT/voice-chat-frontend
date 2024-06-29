import React from "react";
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
import StepOtp from "../Steps/StepOtp/StepOtp";
import { useState } from "react";

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
};
const Login = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];
  function onNext() {
    setStep(step + 1);
  }
  return <Step onNext={onNext}></Step>;
};

export default Login;
