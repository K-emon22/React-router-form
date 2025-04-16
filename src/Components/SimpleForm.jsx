import React from "react";

const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border w-full p-2 rounded"
          type="text"
          name="name"
          placeholder="Enter your name"
        />
        <input
          className="border w-full p-2 rounded"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <div className="flex justify-center">
          <input
            className="btn btn-primary"
            type="submit"
            value="Submityftdgyt"
          />
        </div>
      </form>
    </div>
  );
};

export default SimpleForm;
