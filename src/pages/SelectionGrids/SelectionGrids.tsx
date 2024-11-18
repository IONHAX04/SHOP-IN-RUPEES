import React from "react";

interface GridItem {
  image: string;
  item: string;
  description: string;
}

interface SelectionGridsProps {
  grids: GridItem[];
}

const SelectionGrids: React.FC<SelectionGridsProps> = ({ grids }) => {
  return (
    <div className="selectionGridContainer">
      {grids.map((grid, index) => (
        <div className="selectionGrid" key={index}>
          <img src={grid.image} alt={grid.item} />
          <div className="selectionDetails">
            <p>{grid.item}</p>
            <p>{grid.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectionGrids;
