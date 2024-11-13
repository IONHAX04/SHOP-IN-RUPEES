import { IonIcon, IonImg, IonLabel, IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import getStarted from "../assets/common/getStarted.png";
import { arrowForward } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import Splashscreen from "./Splashscreen";

const Getstarted: React.FC = () => {
  const history = useHistory();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Check if the "getStarted" flag is set in localStorage
    const hasStarted = localStorage.getItem("getStarted") === "true";
    if (hasStarted) {
      // If user has already clicked "Get Started" previously, redirect to login
      history.replace("/login");
    } else {
      // Show splash screen for a few seconds before showing Get Started content
      const splashTimeout = setTimeout(() => {
        setShowSplash(false);
      }, 3000); // 3 seconds splash screen duration

      return () => clearTimeout(splashTimeout);
    }
  }, [history]);

  const handleGetStarted = () => {
    localStorage.setItem("getStarted", "true"); // Set flag in localStorage
    history.replace("/login"); // Navigate to login page
  };

  return (
    <IonPage className="getStarted">
      {showSplash ? (
        <Splashscreen />
      ) : (
        <>
          <IonLabel>Welcome To Our App !!!</IonLabel>
          <IonImg src={getStarted} />
          <button onClick={handleGetStarted}>
            Get Started <IonIcon icon={arrowForward} />
          </button>
        </>
      )}
    </IonPage>
  );
};

export default Getstarted;
