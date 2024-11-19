import { IonHeader, IonIcon } from "@ionic/react";
import { locationOutline } from "ionicons/icons";
import React from "react";
import "./Cart.css";
import Cartitems from "../../pages/CartItems/Cartitems";

const Cart: React.FC = () => {
  const cartItems = [
    {
      id: 1,
      name: "Bluebell Hand Block Dress",
      offerPrice: "$80",
      originalPrice: "$95",
      reviews: "2k Reviews",
      freeDelivery: true,
      image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
    },
    {
      id: 2,
      name: "Red Velvet Gown",
      offerPrice: "$120",
      originalPrice: "$150",
      reviews: "1.5k Reviews",
      freeDelivery: false,
      image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
    },
    {
      id: 3,
      name: "Bluebell Hand Block Dress",
      offerPrice: "$80",
      originalPrice: "$95",
      reviews: "2k Reviews",
      freeDelivery: true,
      image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
    },
    {
      id: 4,
      name: "Red Velvet Gown",
      offerPrice: "$120",
      originalPrice: "$150",
      reviews: "1.5k Reviews",
      freeDelivery: false,
      image: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
    },
    // Add more items as needed
  ];
  return (
    <div>
      <IonHeader className="cartHeader">
        <div className="myCart">
          <p className="cartHead">My Cart</p>
          <p className="itemsCount">8 Items | Deliver to: Location</p>
        </div>
        <div className="location">
          <IonIcon icon={locationOutline}></IonIcon>
          <p className="pl-1">Change</p>
        </div>
      </IonHeader>
      <Cartitems items={cartItems} />
    </div>
  );
};

export default Cart;
