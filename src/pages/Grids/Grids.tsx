import React from "react";
import { useHistory } from "react-router-dom";
import "./Grids.css";

interface GridItem {
  route: string;
  image: string;
  text: string;
}

interface GridsProps {
  gridData: GridItem[];
}

const Grids: React.FC<GridsProps> = ({ gridData }) => {
  const history = useHistory();

  const handleNavigation = (route: string) => {
    history.push(route, {
      direction: "forward",
      animation: "slide",
    });
  };

  return (
    <div>
      <div className="templateGrid">
        {gridData.map((item, index) => (
          <div
            key={index}
            className="templateMenu"
            onClick={() => handleNavigation(item.route)}
            style={{ cursor: "pointer" }}
          >
            <img className="roundedImage" alt={item.text} src={item.image} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grids;
