import React from "react";
import Three from "./Three";
import TwoHundred from "./TwoHundred";
import TwoThousand from "./TwoThousand";

const Two = () => {
  return (
    <div className="border rounded-lg p-5 space-y-2">
      <h3 className="font-bold text-2xl border rounded-lg p-5   ">Two </h3>
      <span className="flex gap-5">
        <TwoHundred></TwoHundred>
        <TwoThousand></TwoThousand>
      </span>
    </div>
  );
};

export default Two;
