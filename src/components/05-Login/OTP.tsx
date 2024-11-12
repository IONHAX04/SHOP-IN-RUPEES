import React, { useEffect, useState } from "react";
import { InputOtp, InputOtpChangeEvent } from "primereact/inputotp";
import { IonButton, IonCheckbox, IonIcon } from "@ionic/react";
import "./Login.css";
import { chevronBackOutline, removeOutline } from "ionicons/icons";

const OnBoard: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [token, setTokens] = useState<string | undefined>("");
  const [isAgreed, setIsAgreed] = useState(false); // Track checkbox state

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const customInput = (props: any) => {
    const { events, ...prop } = props;
    return (
      <>
        <input
          {...events}
          {...prop}
          type="number"
          maxLength={1}
          className="custom-otp-input-sample"
        />
        {props.props.id === 2 && <IonIcon icon={removeOutline}></IonIcon>}
      </>
    );
  };

  const handleOtpChange = (e: InputOtpChangeEvent) => {
    if (e.value !== null && e.value !== undefined) {
      setTokens(e.value.toString());
    }
  };

  const handleCheckboxChange = () => {
    setIsAgreed((prev) => !prev);
  };

  const isOtpComplete = token?.length === 6;
  const isNextButtonEnabled = isOtpComplete && isAgreed; // Next button enabled only if OTP is complete and user agreed

  return (
    <div className="onboard-container">
      <div className="card flex flex-column justify-content-center">
        <div className="flex flex-column align-items-center">
          <p className="font-bold text-xl mb-2">Authenticate Your Account</p>
          <p className="text-color-secondary block mb-5">
            Enter the 6-digit code sent to you at ******3{" "}
          </p>
          <InputOtp
            value={token}
            onChange={handleOtpChange}
            length={6}
            inputTemplate={customInput}
            style={{ gap: 0 }}
          />
          <div className="otpButton-container">
            <button className="otpButton">Resend Code</button>
          </div>
        </div>
      </div>

      <div className="navigateButtons">
        {isOtpComplete && (
          <div className="termsCond">
            <p className="terms">Accept Uber's Terms & Review Policy Notice</p>
            <p className="contents">
              By selecting "I Agree" below, I have reviewed and agree to the{" "}
              <span>Terms of Use</span> and acknowledge the{" "}
              <span>Privacy Notice</span>
            </p>
            <div className="agree">
              <p>I agree to the terms and condition</p>
              <IonCheckbox
                checked={isAgreed}
                onIonChange={handleCheckboxChange}
              />
            </div>
          </div>
        )}
        <div className="footerBtns">
          <div className="backBtn">
            <IonButton shape="round" color="dark">
              <IonIcon slot="icon-only" icon={chevronBackOutline}></IonIcon>
            </IonButton>
          </div>
          <div className="nextBtn">
            <IonButton
              color="dark"
              disabled={!isNextButtonEnabled} // Disable the "Next" button if OTP is not complete or terms not agreed
            >
              Next
            </IonButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnBoard;
