import { IonIcon, IonImg, IonLabel, IonPage } from "@ionic/react";
import React from "react";
import getStarted from "../assets/common/getStarted.png";
import { arrowForward } from "ionicons/icons";

interface GetStartedProps {
  onGetStartedClick: () => void;
}

const Getstarted: React.FC<GetStartedProps> = ({ onGetStartedClick }) => {
  return (
    <IonPage className="getStarted">
      <IonLabel>Welcome To Our App !!!</IonLabel>
      <IonImg src={getStarted} />
      <button onClick={onGetStartedClick}>
        Get Started <IonIcon icon={arrowForward} />
      </button>
    </IonPage>
  );
};

export default Getstarted;
