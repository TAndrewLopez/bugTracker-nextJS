import { bugPriorityLevel, bugBorderColor } from "../controllers/bugController";

const BugCard = ({ data }) => {
  const { name, details, steps, version, assigned, creator, priority } = data;

  const clicked = (e) => {
    console.log(data);
  };
  // TODO:ADD A NECESSARY FIELDS FOR TICKETS
  return (
    <div
      className={`h-48 shadow-3xl rounded text-center m-5 p-8 hover:scale-105 transition ease-in-out duration-300 text-darkGrey flex flex-col justify-between cursor-pointer ${bugBorderColor(
        priority
      )}`}
      onClick={clicked}>
      <p className="text-xl font-semibold">{name}</p>
      <p>{details}</p>
      <p className="text-grey">{`Priority: ${bugPriorityLevel(priority)}`}</p>
      <p>{`Application Version: ${version}`}</p>
    </div>
  );
};

export default BugCard;
