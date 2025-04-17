import React from "react";
import UseInputHooks from "../Hooks/UseInputHooks";

const FormUsingHook = () => {
  const [name, setName] = UseInputHooks("");
  const [email, setEmail] = UseInputHooks("");
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email);
  };

  return (
    <form onSubmit={handleSubmit} className="border-3 p-5 mt-10 space-y-5">
      <label htmlFor="name" className="text-2xl font-bold">
        Name:
      </label>
      <br />
      <input
        className="border-2 border-red-600"
        type="text"
        id="name"
        defaultValue={name}
        onChange={setName}
        placeholder="Enter name "
        required
      />
      <br />
      <input
        type="email"
        className="border-2 border-red-600"
        onChange={setEmail}
        defaultValue={email}
        required
      />
      <br />
      <div className="text-center mt-3">
        <input className=" btn border-black " type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default FormUsingHook;
