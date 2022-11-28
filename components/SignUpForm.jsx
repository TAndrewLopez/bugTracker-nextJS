import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/features/authSlice";
import { ErrorIcon } from "../assets/faIcons";

const CreateAccountForm = ({ toggle }) => {
  const dispatch = useDispatch();

  const [errMessage, setErrMessage] = useState("");
  const [formError, setFormError] = useState(false);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (form.password !== form.confirm) {
      setErrMessage("passwords must match");
      setFormError(true);
      return;
    }

    const { message, error } = await fetch("api/auth/signUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .catch((err) => console.error(err));

    if (error) {
      const message = error.errors[0].message;
      if (message.includes("username")) {
        setErrMessage("username is unavailable");
      }
      if (message.includes("email")) {
        setErrMessage("email is unavailable");
      }
      setFormError(true);
      return;
    }

    dispatch(getUser());
    setErrMessage("");
    setForm({
      username: "",
      email: "",
      password: "",
      confirm: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="w-full text-4xl font-semibold text-light text-center mb-2 after:content-[''] after:block after:h-[2px] after:bg-accent">
        Create Account
      </h1>
      <p
        onClick={() => setFormError(false)}
        className={`relative z-5 top-[-35px] rounded-sm text-errorRed bg-white flex justify-center items-center gap-2 cursor-pointer 
        ease-in-out duration-500 m-3 ${
          formError ? "translate-y-[35px] opacity-100" : "opacity-0"
        }`}>
        {errMessage}
        <ErrorIcon twClass="w-5 fill-errorRed" />
      </p>

      {/* TOP CONTAINER */}
      <div className="md:flex md:gap-3">
        <div className="w-full px-3">
          <label className="text-light" htmlFor="username">
            Username
            <span className="ml-2 text-xs text-errorRed">*</span>
            <span className="ml-1 text-xs text-light">Required</span>
          </label>
          <input
            required
            id="username"
            name="username"
            value={form.username}
            className="w-full p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-accent border-2"
            onChange={(evt) => setForm({ ...form, username: evt.target.value })}
            onFocus={() => setFormError(false)}
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
          required
          id="email"
          name="email"
          type="email"
          value={form.email}
          className="w-full p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-accent border-2"
          onChange={(evt) => setForm({ ...form, email: evt.target.value })}
          onFocus={() => setFormError(false)}
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
            required
            id="password"
            name="password"
            type="password"
            value={form.password}
            className="w-full p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-accent border-2"
            onChange={(evt) => setForm({ ...form, password: evt.target.value })}
            onFocus={() => setFormError(false)}
          />
        </div>
        <div className="w-full px-3">
          <label className="text-light" htmlFor="confirm">
            Confirm
            <span className="ml-2 text-xs text-errorRed">*</span>
            <span className="ml-1 text-xs text-light">Required</span>
          </label>
          <input
            required
            id="confirm"
            name="confirm"
            type="password"
            value={form.confirm}
            className="w-full p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-accent border-2"
            onChange={(evt) => setForm({ ...form, confirm: evt.target.value })}
            onFocus={() => setFormError(false)}
          />
        </div>
      </div>
      <div className="w-full px-3 flex items-center justify-between">
        <p
          onClick={() => toggle(true)}
          className="text-accent hover:text-light cursor-pointer p-2">
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
