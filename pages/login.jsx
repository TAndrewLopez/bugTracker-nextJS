import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/features/authSlice";
import {
  ErrorIcon,
  LockIcon,
  ProfileIcon,
  UsersIcon,
  AddUserIcon,
  AdminIcon,
} from "../assets/faIcons";

export default function Login() {
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState({
    name: "",
    password: "",
  });

  //FORM STATE STATE
  const [nameFocused, setNameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [nameFieldValidation, setNameFieldValidation] = useState(false);
  const [passwordFieldValidation, setPasswordFieldValidation] = useState(false);

  //LOGIN ICON STATE
  const [adminHover, setAdminHover] = useState(false);
  const [employeeHover, setEmployeeHover] = useState(false);
  const [newUserHover, setNewUserHover] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (loginForm.name && loginForm.password) {
      setLoginForm({
        name: "",
        password: "",
      });
      dispatch(signIn(loginForm));
    }
  };

  return (
    <div className="w-full h-full absolute bg-loginBG bg-cover bg-center bg-no-repeat bg-black/[.5] bg-blend-multiply flex">
      <div className="h-full w-full flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <h1 className="w-full text-4xl font-semibold text-light text-center mb-4">
            Account Login
          </h1>

          {/* USERNAME INPUT */}
          <label className="relative text-light" htmlFor="username">
            Username
            <ProfileIcon
              twClass={`absolute w-5 top-[40px] left-[5px] z-20 ease-in-out duration-300 
              ${nameFocused ? "scale-[.75]" : ""} 
              ${nameFocused ? "fill-accent" : "fill-blueGrey"}`}
            />
          </label>

          <input
            onFocus={() => {
              setNameFocused(true);
              if (nameFieldValidation) {
                setNameFieldValidation(!nameFieldValidation);
              }
            }}
            onBlur={(evt) => {
              if (!loginForm.name) {
                setNameFieldValidation(!nameFieldValidation);
                setNameFocused(false);
              }
            }}
            id="username"
            className="relative z-10 w-full pl-8 p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-none"
            onChange={(evt) =>
              setLoginForm({ ...loginForm, name: evt.target.value })
            }
            onClick={() => setNameFocused(true)}
            value={loginForm.name}
            name="name"
            placeholder="Username"
          />
          <p
            onClick={() => setNameFieldValidation(false)}
            className={`relative z-5 top-[-35px] rounded-sm text-errorRed bg-white flex justify-center items-center gap-2 cursor-pointer
            ${
              nameFieldValidation
                ? "translate-y-[35px] opacity-100"
                : "opacity-0"
            }
            ease-in-out duration-500`}>
            Please enter your username
            <ErrorIcon twClass="w-5 fill-errorRed" />
          </p>

          {/* PASSWORD INPUT */}
          <label
            className="relative text-light flex flex-col mt-1"
            htmlFor="password">
            Password
            <LockIcon
              twClass={`absolute w-5 top-[40px] left-[5px] z-20 
              ${passwordFocused ? "scale-[.75]" : ""} ease-in-out duration-300
              ${passwordFocused ? "fill-accent" : "fill-blueGrey"}`}
            />
          </label>

          <input
            onFocus={() => {
              setPasswordFocused(true);
              if (passwordFieldValidation) {
                setPasswordFieldValidation(!passwordFieldValidation);
              }
            }}
            onBlur={(evt) => {
              if (!loginForm.password) {
                setPasswordFieldValidation(!passwordFieldValidation);
                setPasswordFocused(false);
              }
            }}
            id="password"
            className="relative z-10 w-full pl-8 p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-none"
            onChange={(evt) =>
              setLoginForm({ ...loginForm, password: evt.target.value })
            }
            onClick={() => setPasswordFocused(true)}
            value={loginForm.password}
            name="password"
            placeholder="Password"
            type="password"
          />

          <p
            onClick={() => setPasswordFieldValidation(false)}
            className={`relative z-5 top-[-35px] rounded-sm text-errorRed bg-white flex justify-center items-center gap-2 cursor-pointer
            ${
              passwordFieldValidation
                ? "translate-y-[35px] opacity-100"
                : "opacity-0"
            }
            ease-in-out duration-500`}>
            {/* <ErrorIcon twClass="w-5 fill-errorRed" /> */}
            Please enter your password
            <ErrorIcon twClass="w-5 fill-errorRed" />
          </p>

          {/* FORM SUBMISSION BUTTON */}
          <button
            className={`w-full mt-2 px-6 py-2 rounded ${
              loginForm.name && loginForm.password
                ? "bg-accent text-white"
                : "bg-blueGrey cursor-default "
            }`}
            type="submit">
            Sign In
          </button>
        </form>
      </div>

      {/* DEMO LOGIN BUTTON */}
      <div className="w-full fixed bottom-3 flex justify-center gap-16 md:gap-24">
        <div
          onClick={() =>
            dispatch(
              signIn({
                name: "admin",
                password: "password",
              })
            )
          }
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
          onClick={() =>
            dispatch(
              signIn({
                name: "employee",
                password: "password",
              })
            )
          }
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
          onClick={() => console.log("open create new user modal")}
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
    </div>
  );
}
