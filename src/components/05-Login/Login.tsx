import React, { useEffect, useRef, useState } from "react";
import "./Login.css";
import { InputMask } from "primereact/inputmask";
import { Button } from "primereact/button";
import { useHistory } from "react-router-dom";

import { Divider } from "primereact/divider";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonModal,
  IonPage,
  IonThumbnail,
  IonTitle,
  IonToolbar,
  IonToast,
} from "@ionic/react";
import {
  logoApple,
  logoGoogle,
  peopleCircleOutline,
  search,
} from "ionicons/icons";

const Login: React.FC<{ onClickNext: () => void }> = ({ onClickNext }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(undefined);

  const history = useHistory();

  const [presentingElement, setPresentingElement] = useState<
    HTMLElement | undefined
  >(undefined);

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  const handleButtonClick = () => {
    const cleanedNumber = mobileNumber.replace(/\D/g, "");
    console.log("cleanedNumber", cleanedNumber);

    const isValid = cleanedNumber.length === 10;
    if (!isValid) {
      setShowToast(true);
    } else {
      setIsModalOpen(true); // Open the modal first
      // Close the modal and navigate after a brief delay
    }
  };

  const rightClick = () => {
    const cleanedNumber = mobileNumber.replace(/\D/g, "");
    console.log("cleanedNumber", cleanedNumber);

    const isValid = cleanedNumber.length === 10;
    if (!isValid) {
      setShowToast(true);
    } else {
      setIsModalOpen(false);
      window.location.href = "/otp";
    }
  };

  return (
    <IonPage className={`login ${isModalOpen ? "blurred" : ""}`} ref={page}>
      <div className="loginPage">
        <p className="heading">Get started with us</p>
        <div className="loginInput">
          <p className="mobileHeader">Mobile number</p>

          <div className="p-inputgroup flex-1">
            <InputMask
              id="mobile"
              type="tel"
              mask="999-999-9999"
              placeholder="999-999-9999"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value || "")}
            ></InputMask>
            <Button
              icon="pi pi-arrow-right"
              id="open-action-sheet"
              severity="secondary"
              onClick={handleButtonClick}
            />
          </div>
        </div>
        <Divider layout="horizontal" className="flex md:hidden" align="center">
          <b>OR</b>
        </Divider>
        <div className="continueWith">
          <div className="items">
            <IonIcon icon={logoApple}></IonIcon>
            <p>Continue with Apple</p>
          </div>
          <div className="items">
            <IonIcon icon={logoGoogle}></IonIcon>
            <p>Continue with Google</p>
          </div>
        </div>
        <Divider layout="horizontal" className="flex md:hidden" align="center">
          <b>OR</b>
        </Divider>
        <div className="findAcc">
          <IonIcon icon={search}></IonIcon>
          <p>Find My Account</p>
        </div>
        <p className="disclaimer">
          By proceeding, you consent to get calls, WhatsApp or SMS / RCS
          messages, including by automated dialer, from Shop in Rupees and its
          affiliates to the number provided. Text "STOP" to 889988 to opt out.{" "}
        </p>
      </div>

      <IonModal
        ref={modal}
        isOpen={isModalOpen}
        mode="ios"
        onDidDismiss={() => setIsModalOpen(false)}
        presentingElement={presentingElement}
        style={{ blockSize: "50vh", insetBlockStart: "50vh" }}
      >
        <IonHeader>
          <IonToolbar className="ionHeaderModel">
            <IonTitle>Is this you?</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setIsModalOpen(false)}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <p style={{ padding: "16px", textAlign: "center" }}>
            Justify - we found an existing account linked to the mobile you just
            entered
          </p>

          <IonList>
            <IonListHeader>Albums</IonListHeader>
            <IonItem>
              <IonThumbnail slot="start">
                <IonIcon
                  style={{ inlineSize: "100%", blockSize: "100%" }}
                  icon={peopleCircleOutline}
                ></IonIcon>
              </IonThumbnail>
              <IonLabel>
                <h3>Abbey Road</h3>
                <p>The Beatles</p>
              </IonLabel>
            </IonItem>
          </IonList>

          <div
            className="buttons"
            style={{
              padding: "16px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <button className="yesBtn" onClick={rightClick}>
              Yes, I'm here
            </button>
            <button
              className="noBtn"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              No, this is not me
            </button>
          </div>
        </IonContent>
      </IonModal>

      <IonToast
        isOpen={showToast}
        mode="ios"
        onDidDismiss={() => setShowToast(false)}
        message="Please enter a valid 10-digit mobile number."
        duration={1500}
        position="bottom"
      />
    </IonPage>
  );
};

export default Login;
