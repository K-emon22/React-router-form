import React, {useState} from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const ProductManagement = () => {
  const [Product, setProduct] = useState([]);
  const handleProducts = (newProducts) => {
    const NewProduct = [...Product, newProducts];
    setProduct(NewProduct)
  };
  return (
    <div>
      <ProductForm handleProducts={handleProducts}> </ProductForm>
      <ProductTable Product={Product}> </ProductTable>
    </div>
  );
};

export default ProductManagement;
