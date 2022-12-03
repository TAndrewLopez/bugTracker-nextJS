import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTicket } from "../redux/features/ticketSlice";

const AddTicketForm = ({ names, assignees }) => {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.authReducer);
  const [form, setForm] = useState({
    name: "",
    details: "",
    steps: "",
    status: "",
    priority: "",
    assignee: "",
    version: "",
    userId: username,
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const { payload } = await dispatch(createTicket(form));
    console.log(payload, "payload");
    // setForm({
    //   name: "",
    //   details: "",
    //   steps: "",
    //   status: "",
    //   priority: "",
    //   assignee: "",
    //   version: "",
    //   userId: username,
    // });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      {/* NAME INPUT */}
      <label className="text-darkBlueGrey" htmlFor="name">
        Name:
      </label>
      <input
        required
        id="name"
        name="name"
        className="p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-accent border-2"
        onChange={(evt) => setForm({ ...form, name: evt.target.value })}
        value={form.name}
      />

      {/* DETAILS INPUT */}
      <label className="text-darkBlueGrey" htmlFor="details">
        Details:
      </label>
      <input
        required
        id="details"
        name="details"
        className="p-2 my-2 rounded-sm text-blueGrey outline-accent border-2"
        onChange={(evt) => setForm({ ...form, details: evt.target.value })}
        value={form.details}
      />

      {/* STEPS INPUTS */}
      <label className="text-darkBlueGrey" htmlFor="steps">
        Steps:
      </label>
      <input
        required
        id="steps"
        name="steps"
        className="p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-accent border-2"
        onChange={(evt) => setForm({ ...form, steps: evt.target.value })}
        value={form.steps}
      />

      {/* STATUS INPUT */}
      <label htmlFor="status">Status:</label>
      <select
        required
        className="text-slate-400 p-2 my-2"
        name="status"
        id="status"
        onChange={(evt) => setForm({ ...form, status: evt.target.value })}
        value={form.status}>
        <option value="">None</option>
        <option value="new">New</option>
        <option value="open">Open</option>
        <option value="solved">Solved</option>
        <option value="closed">Closed</option>
        <option value="needs response">Needs Response</option>
        <option value="feature request">Feature Request</option>
      </select>

      {/* PRIORITY INPUT */}
      <label htmlFor="status">Priority:</label>
      <select
        required
        className="text-slate-400 p-2 my-2"
        name="status"
        id="status"
        onChange={(evt) => setForm({ ...form, priority: evt.target.value })}
        value={form.priority}>
        <option value="">None</option>
        <option value="3">Low</option>
        <option value="2">Medium</option>
        <option value="1">Critical</option>
      </select>

      {/* ASSIGNEE INPUT */}
      <label htmlFor="assignee">Assignee:</label>
      <select
        required
        className="text-slate-400 p-2 my-2"
        id="assignee"
        onChange={(evt) => setForm({ ...form, assignee: evt.target.value })}
        value={form.assignee}>
        <option value="">select assignee</option>
        {assignees.map((user) => (
          <option key={user.id} value={user.username}>
            {user.username}
          </option>
        ))}
      </select>

      {/* VERSION INPUT */}
      <label htmlFor="version">Version:</label>
      <input
        required
        id="version"
        name="version"
        type="number"
        placeholder="version"
        className="text-slate-400 p-2 my-2"
        onChange={(evt) =>
          setForm({ ...form, version: Number(evt.target.value) })
        }
        value={form.version}
      />

      {/* CREATOR INPUT */}
      <label>Creator:</label>
      <input
        className="max-w-xs p-2 my-2"
        name="creator"
        placeholder={username}
        disabled
      />

      {/* SUBMIT FORM BUTTON */}
      <button
        disabled={
          form.name &&
          form.details &&
          form.steps &&
          form.status &&
          form.priority &&
          form.assignee &&
          form.version &&
          form.userId
            ? false
            : true
        }
        className={`w-full mt-2 px-6 py-2 rounded
        ${
          form.name &&
          form.details &&
          form.steps &&
          form.status &&
          form.priority &&
          form.assignee &&
          form.version &&
          form.userId
            ? "bg-accent text-white"
            : "bg-blueGrey cursor-default"
        }`}
        type="submit">
        Submit
      </button>
    </form>
  );
};

export default AddTicketForm;

/*
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

*/
