import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/features/viewSlice";
import {
  DropDownIcon,
  BugIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  ProfileIcon,
  BellIcon,
} from "../assets/faIcons";

/*
    <div
      className={`fixed top-0 z-[-1] h-full w-full md:w-80 pt-20 pb-4 text-xl flex flex-col justify-between text-light bg-blueGrey ease-in-out duration-300 
      ${sidebarOpen ? "translate-x-0" : "translate-x-[-100%]"}`}>



       <div className="flex justify-between text-light py-4 px-4 md:px-8 bg-darkBlueGrey gap-4">
*/
const Menubar = () => {
  const dispatch = useDispatch();
  const { sidebarOpen } = useSelector((state) => state.viewReducer);
  return (
    <div className="fixed w-full flex justify-between text-light py-4 px-4 md:px-8 bg-darkBlueGrey gap-4">
      {/* NAVIGATION TOGGLE AND DROPDOWN */}
      <div className="flex gap-4">
        <BugIcon
          event={() => dispatch(toggleSidebar())}
          twClass="w-5 cursor-pointer fill-light hover:fill-accent ease-in-out duration-300"
        />
        <div className="flex gap-2 items-center group cursor-pointer">
          <p className="text-2xl group-hover:text-accent ease-in-out duration-300">
            Tickets
          </p>
          <DropDownIcon twClass="w-4 fill-light group-hover:fill-accent ease-in-out duration-300" />
        </div>
      </div>

      {/* MIDDLE SEARCH FEATURE */}
      <form
        className="hidden md:relative md:flex flex-1 max-w-[500px]"
        onSubmit={(evt) => {
          evt.preventDefault();
          console.log(evt.target[0].value);
          evt.target.reset();
        }}>
        <div className="flex items-center justify-center px-4 bg-blueGrey">
          <MagnifyingGlassIcon twClass="w-4 fill-light" />
        </div>
        <input
          className="py-2 w-full bg-blueGrey outline-none"
          name="search"
          placeholder="Search Tickets and Contacts"
        />
        <div className="flex items-center justify-center px-4 ml-2 bg-blueGrey group hover:bg-light ease-in-out duration-300 cursor-pointer">
          <PlusIcon twClass="w-4 fill-light ease-in-out duration-300 group-hover:fill-darkBlueGrey" />
        </div>
      </form>

      {/* PROFILE AND NOTIFICATIONS */}
      <div className="flex gap-4">
        <MagnifyingGlassIcon twClass="w-4 md:hidden cursor-pointer fill-light hover:fill-accent" />
        <ProfileIcon twClass="w-4 cursor-pointer fill-light hover:fill-accent ease-in-out duration-300" />
        <BellIcon twClass="w-4 cursor-pointer fill-light hover:fill-accent ease-in-out duration-300" />
      </div>
    </div>
  );
};

export default Menubar;
