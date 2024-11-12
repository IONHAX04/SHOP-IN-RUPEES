import {
  IonIcon,
  IonRouterOutlet,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { Redirect, Route, useLocation, useHistory } from "react-router";
import Tab1 from "../../pages/Tab1";
import Tab2 from "../../pages/Tab2";
import Tab3 from "../../pages/Tab3";
import Tab4 from "../../pages/Tab4";
import Splashscreen from "../../pages/Splashscreen";
import {
  appsOutline,
  appsSharp,
  cartOutline,
  cartSharp,
  homeOutline,
  homeSharp,
  personOutline,
  personSharp,
} from "ionicons/icons";
import Getstarted from "../../pages/Getstarted";

const MainRoutes: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const [showSplash, setShowSplash] = useState(true);
  const [showTabs, setShowTabs] = useState(false);

  // Hide splash screen after 3 seconds
  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(splashTimeout);
  }, []);

  const showTabBar = ["/tab1", "/tab2", "/tab3", "/tab4"].includes(
    location.pathname
  );

  // Handle button click to show the tabs and navigate to tab1
  const handleGetStartedClick = () => {
    setShowTabs(true);
    history.push("/tab1"); // Navigate to tab1
  };

  if (showSplash) {
    return <Splashscreen />;
  }

  return (
    <div>
      {!showTabs ? (
        <Getstarted onGetStartedClick={handleGetStartedClick} />
      ) : (
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab1">
              <Tab1 />
            </Route>
            <Route exact path="/tab2">
              <Tab2 />
            </Route>
            <Route path="/tab3">
              <Tab3 />
            </Route>
            <Route path="/tab4">
              <Tab4 />
            </Route>
            <Route path="/splash">
              <Splashscreen />
            </Route>
            <Route exact path="/">
              <Redirect to="/tab1" />
            </Route>
          </IonRouterOutlet>
          {showTabBar && (
            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href="/tab1">
                <IonIcon
                  aria-hidden="true"
                  icon={location.pathname === "/tab1" ? homeSharp : homeOutline}
                />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/tab2">
                <IonIcon
                  aria-hidden="true"
                  icon={location.pathname === "/tab2" ? appsSharp : appsOutline}
                />
                <IonLabel>Categories</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href="/tab3">
                <IonIcon
                  aria-hidden="true"
                  icon={
                    location.pathname === "/tab3" ? personSharp : personOutline
                  }
                />
                <IonLabel>Account</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab4" href="/tab4">
                <IonIcon
                  aria-hidden="true"
                  icon={location.pathname === "/tab4" ? cartSharp : cartOutline}
                />
                <IonLabel>Cart</IonLabel>
              </IonTabButton>
            </IonTabBar>
          )}
        </IonTabs>
      )}
    </div>
  );
};

export default MainRoutes;