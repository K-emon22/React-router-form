import {useContext} from "react";
import {AssetContext} from "./FamilyTree";

const Hundred = ({asset}) => {
  const NewAssest = useContext(AssetContext);

  return (
    <div className="border p-2 rounded-lg">
      <h1>
        Hundred: <span className="font-bold text-red-600"> {asset} </span>{" "}
      </h1>
    </div>
  );
};

export default Hundred;
