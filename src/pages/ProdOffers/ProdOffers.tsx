import React from "react";

interface Offer {
  image: string;
  item: string;
  description: string;
}

interface ProdOffersProps {
  offers: Offer[];
}

const ProdOffers: React.FC<ProdOffersProps> = ({ offers }) => {
  return (
    <div className="ion-margin-top ion-margin-bottom ml-2 mr-2">
      <div className="prodOffers">
        {offers.map((offer, index) => (
          <div className="offers" key={index}>
            <img src={offer.image} alt={offer.item} />
            <p className="offerItem">{offer.item}</p>
            <p className="offerDesc">{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProdOffers;
