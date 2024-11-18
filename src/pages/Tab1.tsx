import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonSearchbar,
  IonToolbar,
} from "@ionic/react";
import "./Tab1.css";
import Home from "../components/01-Home/Home";
import { heartOutline, notificationsOutline } from "ionicons/icons";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="toolbarHome">
          <IonButtons slot="start">
            <IonMenuButton autoHide={false} />
          </IonButtons>
          <IonSearchbar mode="ios" className="ion-margin-top"></IonSearchbar>
          <IonButtons slot="end">
            <IonIcon className="ion-margin-end" icon={heartOutline}></IonIcon>
            <IonIcon icon={notificationsOutline}></IonIcon>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Home />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
