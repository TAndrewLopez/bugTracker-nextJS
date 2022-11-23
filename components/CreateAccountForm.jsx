import { useState, useEffect } from "react";
import { validateCreateForm } from "../controllers/createFormController";

const CreateAccountForm = ({ toggle }) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    validateCreateForm(form) ? console.log("submit form") : "";

    //TODO: SEND DATA OVER SERVER
    const response = await fetch("api/users", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (data) {
      console.log(data, "data returned needs to be a jwt token");
      setForm({
        username: "",
        email: "",
        password: "",
        confirm: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="w-full text-4xl font-semibold text-light  text-center mb-4">
        Create Account
      </h1>
      {/* TOP CONTAINER */}
      <div className="md:flex md:gap-3">
        <div className="w-full px-3">
          <label className="text-light" htmlFor="username">
            Username
            <span className="ml-2 text-xs text-errorRed">*</span>
            <span className="ml-1 text-xs text-light">Required</span>
          </label>
          <input
            id="username"
            name="username"
            className="w-full p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-none border-2"
            onChange={(evt) => setForm({ ...form, username: evt.target.value })}
            value={form.username}
          />
        </div>
      </div>

      {/* MIDDLE CONTAINER */}
      <div className="w-full px-3">
        <label className="text-light" htmlFor="email">
          Email
          <span className="ml-2 text-xs text-errorRed">*</span>
          <span className="ml-1 text-xs text-light">Required</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-none border-2"
          onChange={(evt) => setForm({ ...form, email: evt.target.value })}
          value={form.email}
        />
      </div>

      {/* BOTTOM CONTAINER */}
      <div className="md:flex md:gap-3">
        <div className="w-full px-3">
          <label className="text-light" htmlFor="password">
            Password
            <span className="ml-2 text-xs text-errorRed">*</span>
            <span className="ml-1 text-xs text-light">Required</span>
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-none border-2"
            onChange={(evt) => setForm({ ...form, password: evt.target.value })}
            value={form.password}
          />
        </div>
        <div className="w-full px-3">
          <label className="text-light" htmlFor="confirm">
            Confirm
            <span className="ml-2 text-xs text-errorRed">*</span>
            <span className="ml-1 text-xs text-light">Required</span>
          </label>
          <input
            id="confirm"
            name="confirm"
            type="password"
            className="w-full p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-none border-2"
            onChange={(evt) => setForm({ ...form, confirm: evt.target.value })}
            value={form.confirm}
          />
        </div>
      </div>
      <div className="w-full px-3 flex items-center justify-between">
        <p
          onClick={() => toggle(true)}
          className="text-accent cursor-pointer p-2">
          Sign in instead
        </p>
        <button
          className={`md:w-32 mt-2 px-6 py-2 rounded 
          ${
            form.username && form.email && form.password && form.confirm
              ? "bg-accent text-white"
              : "bg-blueGrey cursor-default "
          }
          `}
          type="submit">
          Create
        </button>
      </div>
    </form>
  );
};

export default CreateAccountForm;

// {/* <span className="fixed top-20 left-0 w-full md:w-auto md:left-[50%] md:translate-x-[-50%] bg-errorRed text-light text-center px-3">
// {/* PASSWORDS DO NOT MATCH */}
// {/* USERNAME IS UNAVAILABLE */}
// USERNAME CAN ONLY USE LETTERS, NUMBERS, & PERIODS.
// </span> */}
