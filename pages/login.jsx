import { useState } from "react";
import { useDispatch } from "react-redux";
import { UsersIcon, AddUserIcon, AdminIcon } from "../assets/faIcons";
import { LoginForm, SignUpForm } from "../components";
import { getUser } from "../redux/features/authSlice";

export default function Login() {
  const dispatch = useDispatch();

  //LOGIN ICON STATE
  const [toggleIcons, setToggleIcons] = useState(true);

  const [adminHover, setAdminHover] = useState(false);
  const [employeeHover, setEmployeeHover] = useState(false);
  const [newUserHover, setNewUserHover] = useState(false);

  return (
    <div className="w-full h-full absolute bg-loginBG bg-cover bg-center bg-no-repeat bg-black/[.5] bg-blend-multiply flex">
      <div className="h-full w-full flex justify-center items-center">
        {toggleIcons ? <LoginForm /> : <SignUpForm toggle={setToggleIcons} />}
      </div>

      {/* DEMO LOGIN BUTTON */}
      {toggleIcons ? (
        <div className="w-full fixed bottom-3 flex justify-center gap-16 md:gap-24">
          <div
            onClick={async () => {
              await fetch("api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  username: "admin",
                  password: "password",
                }),
              })
                .then((response) => response.json())
                .catch((err) => console.error(err));

              dispatch(getUser());
            }}
            onMouseEnter={() => {
              if (!adminHover) setAdminHover(true);
            }}
            onMouseLeave={() => {
              if (adminHover) {
                setTimeout(() => {
                  setAdminHover(false);
                }, 200);
              }
            }}
            className="bg-light hover:bg-darkBlueGrey cursor-pointer rounded-full flex flex-col justify-center items-center p-4 relative ease-in-out duration-500">
            <span
              className={`absolute z-[-1] bottom-8 min-w-max text-light bg-darkBlueGrey ease-in-out duration-500 px-2 py-1 pointer-events-none rounded-sm
            ${adminHover ? "translate-y-[-35px] opacity-100" : "opacity-0"} `}>
              Sign in as Admin
            </span>
            <AdminIcon
              twClass={`w-6 ${adminHover ? "fill-light" : "fill-accent"}`}
            />
          </div>

          <div
            onClick={async () => {
              await fetch("api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  username: "employee",
                  password: "password",
                }),
              })
                .then((response) => response.json())
                .catch((err) => console.error(err));

              dispatch(getUser());
            }}
            onMouseEnter={() => {
              if (!employeeHover) setEmployeeHover(true);
            }}
            onMouseLeave={() => {
              if (employeeHover) {
                setTimeout(() => {
                  setEmployeeHover(false);
                }, 200);
              }
            }}
            className="bg-light hover:bg-darkBlueGrey cursor-pointer rounded-full flex flex-col justify-center items-center p-4 relative ease-in-out duration-500">
            <span
              className={`absolute z-[-1] bottom-8 min-w-max text-light bg-darkBlueGrey ease-in-out duration-500 px-2 py-1 pointer-events-none rounded-sm
            ${
              employeeHover ? "translate-y-[-35px] opacity-100" : "opacity-0"
            } `}>
              Sign in as Employee
            </span>
            <UsersIcon
              twClass={`w-6 ${employeeHover ? "fill-light" : "fill-accent"}`}
            />
          </div>

          <div
            onClick={() => {
              setToggleIcons(false);
              setNewUserHover(false);
            }}
            onMouseEnter={() => {
              if (!newUserHover) setNewUserHover(true);
            }}
            onMouseLeave={() => {
              if (newUserHover) {
                setTimeout(() => {
                  setNewUserHover(false);
                }, 200);
              }
            }}
            className="bg-light hover:bg-darkBlueGrey cursor-pointer rounded-full flex flex-col justify-center items-center p-4 relative ease-in-out duration-500">
            <span
              className={`absolute z-[-1] bottom-8 min-w-max text-light bg-darkBlueGrey ease-in-out duration-500 px-2 py-1 pointer-events-none rounded-sm
            ${
              newUserHover ? "translate-y-[-35px] opacity-100" : "opacity-0"
            } `}>
              Create New User
            </span>
            <AddUserIcon
              twClass={`w-6 ${newUserHover ? "fill-light" : "fill-accent"}`}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
