import { IonIcon, IonImg, IonLabel, IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import getStarted from "../assets/common/getStarted.png";
import { arrowForward } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import Splashscreen from "./Splashscreen/Splashscreen";

const Getstarted: React.FC = () => {
  const history = useHistory();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const hasStarted = localStorage.getItem("getStarted") === "true";
    if (hasStarted) {
      history.push("/login");
    } else {
      const splashTimeout = setTimeout(() => {
        setShowSplash(false);
      }, 3000);

      return () => clearTimeout(splashTimeout);
    }
  }, [history]);

  const handleGetStarted = () => {
    console.log("Button clicked!"); // Debug log
    localStorage.setItem("getStarted", "true");
    history.push("/login");
  };

  return (
    <IonPage className="getStarted">
      {showSplash ? (
        <Splashscreen />
      ) : (
        <>
          <IonLabel>Welcome To Our App !!!</IonLabel>
          <IonImg src={getStarted} />
          <button
            onClick={handleGetStarted}
            style={{
              cursor: "pointer",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Get Started <IonIcon icon={arrowForward} />
          </button>
        </>
      )}
    </IonPage>
  );
};

export default Getstarted;
