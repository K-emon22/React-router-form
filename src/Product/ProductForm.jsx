import React, {useState} from "react";

const ProductForm = ({handleProducts}) => {
  const [error, setError] = useState("");
  const handleProductForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.Quantity.value;

    if (name.length === 0) {
      setError("please provide a Name");
      return;
    } else if (price.length === 0) {
      setError("please provide price");
      return;
    }
    else if (isNaN(price)) {
        setError(" please enter number for price ");
        return;
      }  else if (quantity.length === 0) {
      setError("please provide Quantity");
      return;
    } else if (isNaN(quantity)) {
      setError(" please enter number for quantity");
      return;
    } else {
      setError("");
    }

    const newProduct = {name, price, quantity};

    handleProducts(newProduct);
  };

  return (
    <div>
      <h1 className="font-bold"> Form Of Products </h1>
      <form
        onSubmit={handleProductForm}
        className="border-2 p-5 mt-3 space-y-2"
      >
        <div className=" nameOfTable ">
          <label htmlFor="name"> Name: </label>
          <br />
          <input
            className="border"
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Name"
          />
        </div>

        <div className=" priceOfTable ">
          <label htmlFor="price"> Price: </label>
          <br />
          <input
            className="border"
            type="text"
            name="price"
            id="price"
            placeholder="Enter Product price"
          />
        </div>

        <div className=" QuantityOfTable ">
          <label htmlFor="Quantity"> Quantity: </label>
          <br />
          <input
            className="border"
            type="text"
            name="Quantity"
            id="Quantity"
            placeholder="Enter Product Quantity"
          />
        </div>
        <div>
          <input
            className="btn border-2 border-red-600 rounded-lg"
            type="submit"
            value="Submit"
          />
        </div>
        <small className=" text-red-500">{error}</small>
      </form>
    </div>
  );
};

export default ProductForm;
