import {use} from "react";
import {MyMoney} from "./FamilyTree";

const TenThousand = () => {
  const [moneyss, setMoneyss] = use(MyMoney);

  return (
    <div className="border p-2 rounded-lg">
      <h1>TenThousand</h1>
      <button onClick={() => setMoneyss(moneyss + 1000)} className="btn btn-secondary">
        Add 1000
      </button>
    </div>
  );
};

export default TenThousand;
