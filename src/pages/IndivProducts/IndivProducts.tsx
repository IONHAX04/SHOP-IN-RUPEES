import { IonIcon } from "@ionic/react";
import { cartOutline } from "ionicons/icons";
import React from "react";

interface Product {
  image: string;
  name: string;
  specifications: string;
  offerPercentage: string;
  strikePrice: string;
  offerPrice: string;
}

interface IndivProductsProps {
  products: Product[];
}

const IndivProducts: React.FC<IndivProductsProps> = ({ products }) => {
  return (
    <div className="suggestedItemsIndiv">
      {products.map((product, index) => (
        <div key={index} className="indivItems">
          <div className="productDescr">
            <img src={product.image} alt={product.name} />
            <div className="descriptions ml-2">
              <p>{product.name}</p>
              <p>{product.specifications}</p>
              <div className="pricingDetails">
                <p className="offerPer pr-2">{product.offerPercentage}</p>
                <p className="strikePrice pr-2">{product.strikePrice}</p>
                <p className="offerPrice pr-2">{product.offerPrice}</p>
              </div>
            </div>
          </div>
          <div className="cart">
            <IonIcon icon={cartOutline}></IonIcon>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndivProducts;
