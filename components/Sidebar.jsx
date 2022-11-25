import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../redux/features/authSlice";
import { toggleSidebar } from "../redux/features/viewSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { admin } = useSelector((state) => state.authReducer);
  const { sidebarOpen } = useSelector((state) => state.viewReducer);

  const navLinks = [
    { path: "/dashboard", text: "Dashboard" },
    { path: "/allBugs", text: "View Bugs" },
  ];

  return (
    <div
      className={`fixed top-0 z-[5] h-full w-full md:w-80 pt-20 pb-4 text-xl flex flex-col justify-between text-light bg-blueGrey ease-in-out duration-300 
      ${sidebarOpen ? "translate-x-0" : "translate-x-[-100%]"}`}>
      <ul className="flex flex-col py-2">
        {navLinks.map((item, i) => (
          <Link
            onClick={() => {
              if (window.innerWidth < 600) {
                dispatch(toggleSidebar());
              }
            }}
            key={item.text + i}
            href={item.path}
            className="pl-8 py-2 hover:bg-accent transition-all ease-in-out duration-300">
            {item.text}
          </Link>
        ))}
        {admin && (
          <Link
            onClick={() => {
              if (window.innerWidth < 600) {
                dispatch(toggleSidebar());
              }
            }}
            href={"/createBug"}
            className="pl-8 py-2 hover:bg-accent transition-all ease-in-out duration-300">
            Create Bug
          </Link>
        )}
      </ul>
      <button
        onClick={() => dispatch(signOut())}
        className={`bg-accent md:bg-blueGrey hover:bg-accent px-6 py-2 transition-all ease-in-out duration-300`}>
        Sign Out
      </button>
    </div>
  );
};

export default Sidebar;
