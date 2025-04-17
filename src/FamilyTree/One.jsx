import React from "react";
import Two from "./Two";
import Hundred from "./hundred";
import Thousand from "./Thousand";
import TenThousand from "./TenThousand";

const One = ({asset}) => {
  return (
    <div className="border rounded-lg p-5">
      <h3 className="font-bold text-2xl border rounded-lg p-5 mb-2">One </h3>
      <section className=" flex gap-5">
        <Hundred asset={asset}></Hundred>
        <Thousand></Thousand>
        <TenThousand></TenThousand>
      </section>
    </div>
  );
};

export default One;
