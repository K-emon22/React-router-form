import React from "react";

const ProductTable = ({Product}) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Product List</h2>
      <table className="w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Number </th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {Product.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-2 border text-center">{index + 1}</td>
              <td className="p-2 border text-center">{item.name}</td>
              <td className="p-2 border text-center">${item.price}</td>
              <td className="p-2 border text-center">0{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
