import React from "react";

interface Product {
  image: string;
  name: string;
  discountPrice: string;
  originalPrice: string;
}

interface ProductsProps {
  products: Product[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <div>
      <div className="productCards">
        {products.map((product, index) => (
          <div className="products" key={index}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <div className="pricing">
              <p className="discountPrice">{product.discountPrice}</p>
              <p className="originalPrice">{product.originalPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
