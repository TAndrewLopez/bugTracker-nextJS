import { useState } from "react";

const CreateAccountForm = ({ toggle }) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!form.username || !form.email || !form.password || !form.confirm) {
      //SOMETHING WAS MISSING FROM THE FORM
      return;
    }
    if (form.password !== form.confirm) {
      //PASSWORDS DON'T MATCH
      return;
    }

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    };

    const { token } = await fetch("api/auth/signUp", options)
      .then((response) => response.json())
      .catch((err) => console.error(err));

    console.log("response from create account form: ", token);
    //TODO: RESET FORM AFTER SUBMISSION
    // setForm({
    //   username: "",
    //   email: "",
    //   password: "",
    //   confirm: "",
    // });
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
            required
            id="username"
            name="username"
            className="w-full p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-accent border-2"
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
          required
          id="email"
          type="email"
          name="email"
          className="w-full p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-accent border-2"
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
            required
            id="password"
            name="password"
            type="password"
            className="w-full p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-accent border-2"
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
            required
            id="confirm"
            name="confirm"
            type="password"
            className="w-full p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-accent border-2"
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
