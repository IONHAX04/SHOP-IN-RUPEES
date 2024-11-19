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
import "./Tab4.css";
import { notificationsOutline } from "ionicons/icons";
import Cart from "../components/04-Cart/Cart";

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonToolbar className="categoriesTab pt-1 pb-1" mode="ios">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab1"></IonBackButton>
          </IonButtons>
          <IonTitle>Cart</IonTitle>
          <IonIcon slot="end" icon={notificationsOutline}></IonIcon>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Cart />
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
