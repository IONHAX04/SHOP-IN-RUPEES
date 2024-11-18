import React from "react";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab2.css";
import Categories from "../components/02-Categories/Categories";
import { searchOutline } from "ionicons/icons";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonToolbar className="categoriesTab pt-1 pb-1" mode="ios">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab1"></IonBackButton>
          </IonButtons>
          <IonTitle>Categories</IonTitle>
          <IonIcon slot="end" icon={searchOutline}></IonIcon>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Categories />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
