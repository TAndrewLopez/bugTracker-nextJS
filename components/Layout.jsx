import { useSelector } from "react-redux";
import Login from "../pages/login";
import { Menubar, Sidebar } from "./";

const Layout = ({ children }) => {
  const { loggedIn } = useSelector((state) => state.authReducer);

  return (
    <>
      {!loggedIn ? (
        <Login />
      ) : (
        <>
          <Menubar />
          <Sidebar />
          {children}
        </>
      )}
    </>
  );
};

export default Layout;
