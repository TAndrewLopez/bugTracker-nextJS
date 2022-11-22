import { useSelector } from "react-redux";

const Dashboard = () => {
  const { sidebarOpen } = useSelector((state) => state.viewReducer);

  return (
    <div
      className={`absolute top-20 z-[-2] flex flex-col justify-center ease-in-out duration-300 p-4 bg-red-500
      ${sidebarOpen ? "md:pl-80 w-full" : "w-full"}`}>
      {/* <div className="w-full h-full bg-appLogo bg-cover bg-center bg-no-repeat">
        <div className="h-max"></div>
      </div> */}
    </div>
  );
};

export default Dashboard;
