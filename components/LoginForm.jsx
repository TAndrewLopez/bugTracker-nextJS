import { useState } from "react";

//ICONS
import { ErrorIcon, LockIcon, ProfileIcon } from "../assets/faIcons";

const LoginForm = () => {
  const [nameFocused, setNameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [nameFieldValidation, setNameFieldValidation] = useState(false);
  const [passwordFieldValidation, setPasswordFieldValidation] = useState(false);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (form.username && form.password) {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      };

      const { token } = await fetch("api/auth/login", options)
        .then((response) => response.json())
        .catch((err) => console.error(err));

      console.log("response from login form: ", token);
    }

    // TODO: RESET FORM AFTER SUBMISSION
    // setForm({
    //   username: "",
    //   password: "",
    // });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="w-full text-4xl font-semibold text-light text-center mb-4">
        Account Login
      </h1>

      {/* USERNAME INPUT */}
      <label className="relative text-light" htmlFor="username">
        Username
        <ProfileIcon
          twClass={`absolute w-5 top-[40px] left-[5px] z-20 ease-in-out duration-300 
          ${nameFocused ? "scale-[.75] fill-accent" : "fill-blueGrey"}`}
        />
      </label>

      <input
        onFocus={() => {
          setNameFocused(true);
          if (nameFieldValidation) {
            setNameFieldValidation(!nameFieldValidation);
          }
        }}
        onBlur={() => {
          if (!form.username) {
            setNameFieldValidation(!nameFieldValidation);
            setNameFocused(false);
          }
        }}
        required
        id="username"
        className="relative z-10 w-full pl-8 p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-none"
        onChange={(evt) => setForm({ ...form, username: evt.target.value })}
        onClick={() => setNameFocused(true)}
        value={form.username}
        name="name"
        placeholder="Username"
      />
      <p
        onClick={() => setNameFieldValidation(false)}
        className={`relative z-5 top-[-35px] rounded-sm text-errorRed bg-white flex justify-center items-center gap-2 cursor-pointer 
        ease-in-out duration-500 ${
          nameFieldValidation ? "translate-y-[35px] opacity-100" : "opacity-0"
        }`}>
        Please enter your username
        <ErrorIcon twClass="w-5 fill-errorRed" />
      </p>

      {/* PASSWORD INPUT */}
      <label
        className="relative text-light flex flex-col mt-1"
        htmlFor="password">
        Password
        <LockIcon
          twClass={`absolute w-5 top-[40px] left-[5px] z-20 ease-in-out duration-300
          ${passwordFocused ? "scale-[.75] fill-accent" : "fill-blueGrey"}`}
        />
      </label>

      <input
        onFocus={() => {
          setPasswordFocused(true);
          if (passwordFieldValidation) {
            setPasswordFieldValidation(!passwordFieldValidation);
          }
        }}
        onBlur={(evt) => {
          if (!form.password) {
            setPasswordFieldValidation(!passwordFieldValidation);
            setPasswordFocused(false);
          }
        }}
        required
        id="password"
        className="relative z-10 w-full pl-8 p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-none"
        onChange={(evt) => setForm({ ...form, password: evt.target.value })}
        onClick={() => setPasswordFocused(true)}
        value={form.password}
        name="password"
        placeholder="Password"
        type="password"
      />

      <p
        onClick={() => setPasswordFieldValidation(false)}
        className={`relative z-5 top-[-35px] rounded-sm text-errorRed bg-white flex justify-center items-center gap-2 cursor-pointer ease-in-out duration-500
        ${
          passwordFieldValidation
            ? "translate-y-[35px] opacity-100"
            : "opacity-0"
        }`}>
        Please enter your password
        <ErrorIcon twClass="w-5 fill-errorRed" />
      </p>

      {/* FORM SUBMISSION BUTTON */}
      <button
        className={`w-full mt-2 px-6 py-2 rounded ${
          form.username && form.password
            ? "bg-accent text-white"
            : "bg-blueGrey cursor-default "
        }`}
        type="submit">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
