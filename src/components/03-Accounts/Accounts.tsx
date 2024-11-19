import React from "react";
import "./Accounts.css";
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonPage,
  IonTextarea,
  IonToggle,
} from "@ionic/react";
import {
  cardOutline,
  chatbubbleOutline,
  chatbubblesOutline,
  chevronForwardOutline,
  compassOutline,
  cube,
  gift,
  headset,
  heart,
  languageOutline,
  notificationsOutline,
  pencilSharp,
  personOutline,
  starOutline,
} from "ionicons/icons";
import SettingsTiles from "../../pages/SettingsTiles/SettingsTiles";
import { Divider } from "primereact/divider";
import ListItem from "../../pages/ListItem/ListItem";

const Accounts: React.FC = () => {
  const tilesData = [
    { icon: cube, label: "Order" },
    { icon: heart, label: "Wishlist" },
    { icon: gift, label: "Gift" },
    { icon: headset, label: "Help Center" },
  ];

  const listData = [
    { icon: personOutline, label: "Edit Profile" },
    { icon: cardOutline, label: "Save Cards & Wallets" },
    { icon: compassOutline, label: "Save Addresses" },
    { icon: languageOutline, label: "Select Language" },
    { icon: notificationsOutline, label: "Notification Settings" },
  ];

  const overallSettings = [
    { icon: starOutline, label: "Reviews" },
    { icon: chatbubblesOutline, label: "Questions & Answers" },
  ];

  return (
    <IonContent color="light">
      <div className="headerCont">
        <div className="headerProfile">
          <img
            src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
            alt=""
          />
          <div className="profileEditCont ion-padding-start">
            <p>Thomas Djono</p>
            <p>ID 01011213</p>
          </div>
        </div>
      </div>
      <Divider />
      <div className="settingsGrids">
        <SettingsTiles tiles={tilesData} />
      </div>
      <div className="listsSettings">
        <p className="headings">Account Settings</p>
        <div className="listSet">
          {listData.map((item, index) => (
            <ListItem key={index} icon={item.icon} label={item.label} />
          ))}
        </div>
      </div>
      <div className="listsSettings">
        <p className="headings">Overall Settings</p>
        <div className="listSet">
          {overallSettings.map((item, index) => (
            <ListItem key={index} icon={item.icon} label={item.label} />
          ))}
        </div>
      </div>
    </IonContent>
  );
};

export default Accounts;
