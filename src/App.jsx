import "./App.css";
import ControlledForm from "./Components/ControlledForm";
import FormAction from "./Components/FormAction";
import FormUsingHook from "./Components/FormUsingHook";
import SimpleForm from "./Components/SimpleForm";
import FamilyTree from "./FamilyTree/FamilyTree";
import ProductManagement from "./Product/ProductManagement";

function App() {
  return (
    <>
      {/* <h1 className="font-bold text-5xl text-center"> Explore React Form</h1> */}
      <div className=" justify-center flex">
      {/* <SimpleForm> </SimpleForm> */}
      {/* <FormAction> </FormAction> */}
      {/* <ControlledForm></ControlledForm> */}
      {/* <FormUsingHook> </FormUsingHook> */}
      {/* <ProductManagement></ProductManagement> */}
<FamilyTree></FamilyTree>
      </div>
    </>
  );
}

export default App;
// className=" flex justify-center mt-20"