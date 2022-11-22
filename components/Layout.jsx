import { useSelector } from "react-redux";

import Login from "../pages/login";
import { Menubar, Sidebar, Meta } from "./";

const Layout = ({ children }) => {
  const { loggedIn } = useSelector((state) => state.authReducer);

  return (
    <>
      <Meta />
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
