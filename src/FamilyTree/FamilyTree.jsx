import React, {createContext, useState} from "react";
import One from "./One";
import Two from "./Two";
import Three from "./Three";

export const AssetContext = createContext("");
export const MyMoney = createContext(0);
const FamilyTree = () => {
  const [taka, setTAka] = useState(0);

  const asset = "dimond";
  const godAsset = "white gold";
  return (
    <div>
      <h1 className="font-bold text-5xl mb-5 text-center "> Family tree</h1>
      <h1 className="font-bold text-3xl mb-5 text-center ">
        {" "}
        FAmily total taka= {taka}
      </h1>
      <div className="family-tree border rounded-lg p-5 text-center">
        <h1 className="font-bold text-3xl p-5">Starts From Zero </h1>
        <section className="flex gap-5 my-auto">
          <MyMoney value={[taka,setTAka]}>
            <AssetContext.Provider value={godAsset}>
              <One asset={asset}> </One>
            </AssetContext.Provider>
          </MyMoney>
          <Two></Two>
          <Three></Three>
        </section>
      </div>
    </div>
  );
};

export default FamilyTree;
