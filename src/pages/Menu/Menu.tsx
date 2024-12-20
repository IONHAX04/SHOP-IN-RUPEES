import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  bedOutline,
  book,
  desktopSharp,
  ellipsisHorizontalOutline,
  phonePortraitSharp,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Mobiles",
    url: "/folder/Inbox",
    iosIcon: phonePortraitSharp,
    mdIcon: phonePortraitSharp,
  },
  {
    title: "Computers",
    url: "/folder/Outbox",
    iosIcon: desktopSharp,
    mdIcon: desktopSharp,
  },
  {
    title: "Books",
    url: "/folder/Favorites",
    iosIcon: book,
    mdIcon: book,
  },
  {
    title: "Furniture",
    url: "/folder/Archived",
    iosIcon: bedOutline,
    mdIcon: bedOutline,
  },
  {
    title: "More",
    url: "/folder/Archived",
    iosIcon: ellipsisHorizontalOutline,
    mdIcon: ellipsisHorizontalOutline,
  },
];

const features = [
  "Today's Deals",
  "Shop In Rupees Business",
  "Handloom and Handicrafts",
  "Buy more, Save more",
  "Sell on Shop in Rupees",
  "International Brands",
];

const settings = ["Color Theme", "Profile", "My Cart", "Logout"];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Username</IonListHeader>
          <IonNote>email@shopinrupees.com</IonNote>

          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    aria-hidden="true"
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Features</IonListHeader>
          {features.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Settings</IonListHeader>
          {settings.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
