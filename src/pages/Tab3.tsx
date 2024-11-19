import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab3.css";
import Accounts from "../components/03-Accounts/Accounts";
import { notificationsOutline } from "ionicons/icons";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonToolbar className="categoriesTab pt-1 pb-1" mode="ios">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab1"></IonBackButton>
          </IonButtons>
          <IonTitle>Profile</IonTitle>
          <IonIcon slot="end" icon={notificationsOutline}></IonIcon>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Accounts />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
