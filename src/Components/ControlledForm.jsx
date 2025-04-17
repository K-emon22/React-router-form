import React, {useState} from "react";

const ControlledForm = () => {
  const handleSubmit = (subData) => {
    subData.preventDefault();
    console.log("name  //////", subData.target.password.value);
    console.log("email//////", subData.target.email.value);
    console.log("number;;;;;;", subData.target.phoneNum.value);
  };

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState();

  const setEmails = (emaiData) => {
    const emailStemail = emaiData.target.value;
    setEmail(emailStemail);
    console.log("Email loggging:  ", emailStemail);

    if (!emailStemail.includes("@") || !emailStemail.includes(".")) {
      setEmailError("use valid email");
    } else {
      setEmailError("");
    }
  };

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorNum, setErrorNum] = useState("");

  const handleNum = (num) => {
    num.preventDefault();
    const PhoneNumData = num.target.value;
    setPhoneNumber(PhoneNumData);
    console.log(typeof PhoneNumData);

    if (!PhoneNumData.startsWith("01")) {
      setErrorNum("Number must be starts with  01");
    } else if (PhoneNumData.length != 11) {
      setErrorNum("number shoud be 11 digit long");
    } else {
      setErrorNum("");
    }
  };

  const setPasswords = (passData) => {
    const inpValue = passData.target.value;
    setPassword(inpValue);
    console.log("Password logging: ", inpValue);

    if (inpValue.length < 6) {
      setError("password must be 6 digit or more.");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-2 mt-10 border-2 border-black p-5 text-center"
      >
        <label className="flex justify-start" htmlFor="nameInput">
          Enter Phn no:
        </label>

        <br />
        <input
          className="border-2"
          type="text"
          name="phoneNum"
          defaultValue={phoneNumber}
          onChange={handleNum}
          id="nameInput"
        />
        <br />
        <small className="text-red-500 ">{errorNum}</small>
        <br />
        <input
          className="border-2 border-red-600"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          defaultValue={email}
          onChange={setEmails}
        />
        <br />
        <small className="text-red-600">{emailError}</small>
        <br />
        <input
          className="border-2 border-red-600 text-center"
          type="password"
          name="password"
          onChange={setPasswords}
          defaultValue={password}
          placeholder="Enter your password..."
          required
        />
        <br />
        <small className="text-red-500 ">{error}</small>
        <br />

        <div className="text-center">
          <input
            className="btn mt-5 border-3 border-red-800"
            type="submit"
            value="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default ControlledForm;
