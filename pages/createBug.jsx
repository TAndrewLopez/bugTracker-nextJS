import { useDispatch, useSelector } from "react-redux";

const createBug = () => {
  const dispatch = useDispatch();
  const { sidebarOpen } = useSelector((state) => state.viewReducer);

  return (
    <div
      className={`absolute top-20 z-[-2] flex flex-col justify-center ease-in-out duration-300 p-4
      ${sidebarOpen ? "md:pl-80 w-full" : "w-full"}`}>
      <div className="p-8 flex flex-col border-2 ">
        <h1 className="w-full text-4xl font-semibold text-darkBlueGrey mb-4">
          Create your Account
        </h1>
        <form>
          {/* TOP CONTAINER */}
          <div>
            <div className="">
              <label className="text-darkBlueGrey" htmlFor="first-name">
                First Name
                <span className="ml-2 text-xs text-errorRed">* Required</span>
              </label>
              <input
                id="first-name"
                name="first-name"
                className="w-full p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-none border-2"
              />
            </div>

            <div className="">
              <label className="text-darkBlueGrey" htmlFor="last-name">
                Last Name
                <span className="ml-2 text-xs text-errorRed">* Required</span>
              </label>
              <input
                id="last-name"
                name="last-name"
                className="w-full p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-none border-2"
              />
            </div>
          </div>

          {/* MIDDLE CONTAINER */}
          <label className="text-darkBlueGrey" htmlFor="username">
            Username
            <span className="ml-2 text-xs text-errorRed">* Required</span>
          </label>
          <input
            id="username"
            name="username"
            className="w-full p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-none border-2"
          />

          <p className="invisible">Letters, numbers, & periods only.</p>

          {/* END CONTAINER */}
          <div>
            <div className="">
              <label className="text-darkBlueGrey" htmlFor="password">
                Password
                <span className="ml-2 text-xs text-errorRed">* Required</span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-none border-2"
              />
            </div>
            <div className="">
              <label className="text-darkBlueGrey" htmlFor="confirm">
                Confirm
                <span className="ml-2 text-xs text-errorRed">* Required</span>
              </label>
              <input
                id="confirm"
                name="confirm"
                type="password"
                className="w-full p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-none border-2"
              />
            </div>
          </div>
          <button
            className={`w-full mt-2 px-6 py-2 rounded 
            ${false ? "bg-accent text-white" : "bg-blueGrey cursor-default "}
            `}
            type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default createBug;
