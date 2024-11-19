import React from "react";
import { IonIcon } from "@ionic/react";
import { addCircle, heartOutline, removeCircle, trash } from "ionicons/icons";
import { Divider } from "primereact/divider";

interface CartItem {
  id: number;
  name: string;
  offerPrice: string;
  originalPrice: string;
  reviews: string;
  freeDelivery: boolean;
  image: string;
}

interface CartItemsProps {
  items: CartItem[];
}

const Cartitems: React.FC<CartItemsProps> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <div className="cartListItemsParent">
            <img src={item.image} alt={item.name} />
            <div className="prodDetailsCart pl-2">
              <div className="prodCartName">
                <p>{item.name}</p>
                <IonIcon icon={heartOutline}></IonIcon>
              </div>
              <div className="productPricing">
                <p className="cartOfferPrice">{item.offerPrice}</p>
                <p className="strikeOfferPrice pl-2">{item.originalPrice}</p>
                <p className="ratings pl-2">({item.reviews})</p>
              </div>
              {item.freeDelivery && (
                <div className="freeDeliveryOpt">
                  <p>Free Delivery</p>
                </div>
              )}
              <div className="countItems">
                <div className="counts">
                  <IonIcon className="pr-2" icon={removeCircle}></IonIcon>
                  <p className="pr-2">Count</p>
                  <IonIcon icon={addCircle}></IonIcon>
                </div>
                <IonIcon icon={trash}></IonIcon>
              </div>
            </div>
          </div>
          <Divider />
        </div>
      ))}
    </div>
  );
};

export default Cartitems;
