import { useSelector } from "react-redux";
import { AddTicketForm } from "../components";

const createBug = ({ names, userInformation }) => {
  const { sidebarOpen } = useSelector((state) => state.viewReducer);

  return (
    <div
      className={`absolute top-[76px] z-[-2] flex flex-col justify-center ease-in-out duration-300 p-4 
    ${sidebarOpen ? "md:pl-80 w-full" : "w-full"}`}>
      <AddTicketForm names={names} assignees={userInformation} />
    </div>
  );
};

export default createBug;

export async function getServerSideProps(context) {
  const { SquashCRM } = context.req.cookies;
  const usersFromDb = await fetch("http://localhost:3000/api/users", {
    method: "GET",
    headers: {
      SquashCRM,
    },
  }).then((res) => res.json().catch((err) => console.error(err)));

  const userInformation = usersFromDb.map((user) => {
    return { username: user.username, id: user.id };
  });
  const names = usersFromDb.map((name) => name.username);
  return {
    props: { names, userInformation },
  };
}
