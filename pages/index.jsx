import { useSelector } from "react-redux";

export default () => {
  const {
    authReducer: { firstName },
    viewReducer: { sidebarOpen },
  } = useSelector((state) => state);

  return (
    <div
      className={`absolute top-[76px] z-[-2] flex flex-col justify-center ease-in-out duration-300 p-4
      ${sidebarOpen ? "md:pl-80 w-full" : "w-full"}`}>
      <h1>
        Greetings <span className="font-semibold">{firstName}</span>, welcome to
        Squash CRM!
      </h1>
    </div>
  );
};
