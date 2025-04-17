import React from "react";

const FormAction = () => {
  const handleForm = (formDAta) => {
    formDAta.preventDefault();
    console.log(formDAta.target.name.value);
    console.log(formDAta.target.email.value);
  };

  return (
    <div className="border p-5">
      <form className="space-y-5" onSubmit={handleForm}>
        <input
          className="border"
          type="text"
          name="name"
          id=""
          placeholder="Enter name"
        />
        <br />
        <input
          className="border"
          type="email"
          name="email"
          id=""
          placeholder="Enter email"
        />
        <br />
        <div className="text-center">
          <input
            className="btn border-red-600 border-2"
            type="submit"
            value="Submit"
            id=""
          />
        </div>
      </form>
    </div>
  );
};

export default FormAction;