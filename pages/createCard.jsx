import { useSelector } from "react-redux";

const createBug = ({ names }) => {
  const { sidebarOpen } = useSelector((state) => state.viewReducer);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("form");
  };

  return (
    <div
      className={`absolute top-[76px] z-[-2] flex flex-col justify-center ease-in-out duration-300 p-4 
    ${sidebarOpen ? "md:pl-80 w-full" : "w-full"}`}>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="text-darkBlueGrey" htmlFor="name">
            Name:
          </label>
          <input
            required
            id="name"
            name="name"
            className="p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-accent border-2"
            onChange={(evt) => {}}
            onFocus={() => {}}
          />

          <label className="text-darkBlueGrey" htmlFor="details">
            Details:
          </label>
          <input
            required
            id="details"
            name="details"
            className="p-2 my-2 rounded-sm text-blueGrey outline-accent border-2"
            onChange={(evt) => {}}
            onFocus={() => {}}
          />
          <label className="text-darkBlueGrey" htmlFor="steps">
            Steps:
          </label>
          <input
            required
            id="steps"
            name="steps"
            className="p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-accent border-2"
            onChange={(evt) => {}}
            onFocus={() => {}}
          />
          <label htmlFor="status">Status:</label>
          <select className="text-slate-400 p-2 my-2" name="status" id="status">
            <option value="new">New</option>
            <option value="open">Open</option>
            <option value="solved">Solved</option>
            <option value="closed">Closed</option>
            <option value="needs response">Needs Response</option>
            <option value="feature request">Feature Request</option>
          </select>
          <label htmlFor="status">Priority:</label>
          <select className="text-slate-400 p-2 my-2" name="status" id="status">
            <option value="null">None</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="critical">Critical</option>
          </select>
          <label htmlFor="assignee">Assignee:</label>
          <select className="text-slate-400 p-2 my-2" id="assignee">
            <option>select assignee</option>
            {names.map((name, i) => (
              <option key={name + i} value={name}>
                {name}
              </option>
            ))}
          </select>
          <label htmlFor="version">Version:</label>
          <input
            id="version"
            name="version"
            type="number"
            placeholder="version"
            className="text-slate-400 p-2 my-2"
          />
          <label>Creator:</label>
          <input
            className="max-w-xs p-2 my-2"
            name="creator"
            placeholder={"username"}
            disabled
          />

          <button
            className={`w-full mt-2 px-6 py-2 rounded 
            ${false ? "bg-accent text-white" : "bg-blueGrey cursor-default"}
            `}
            type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default createBug;

export async function getServerSideProps(context) {
  const { SquashCRM } = context.req.cookies;
  const users = await fetch("http://localhost:3000/api/users", {
    method: "GET",
    headers: {
      SquashCRM,
    },
  }).then((res) => res.json().catch((err) => console.error(err)));
  const names = users.map((name) => name.username);

  return {
    props: { names },
  };
}

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
