import { useSelector } from "react-redux";

export default () => {
  const { sidebarOpen } = useSelector((state) => state.viewReducer);

  return (
    <div
      className={`absolute top-[76px] z-[-2] flex flex-col justify-center ease-in-out duration-300 p-4
      ${sidebarOpen ? "md:pl-80 w-full" : "w-full"}`}>
      <h1>Welcome to Squash CRM</h1>
    </div>
  );
};
