import { ticketPriorityLevel } from "../controllers/ticketController";

const PreviewCard = ({ data }) => {
  const { name, details, steps, version, assigned, creator, priority } = data;

  const ticketPriorityBorderColor = (num) => {
    switch (num) {
      case 1:
        return "border-t-4 border-t-errorRed";
      case 2:
        return "border-t-4 border-t-cautionOrange";
      case 3:
        return "border-t-4 border-t-signalGreen";
      default:
        return "";
    }
  };

  const clicked = (e) => {
    console.log(data);
  };

  return (
    <div
      className={`min-h-48 shadow-3xl rounded text-center m-5 p-8 hover:scale-105 transition ease-in-out duration-300 text-darkGrey flex flex-col justify-between cursor-pointer 
      ${ticketPriorityBorderColor(priority)}`}
      onClick={clicked}>
      <p className="text-xl font-semibold">{name}</p>
      <p>{details}</p>
      <p className="text-grey">{`Priority: 
      ${ticketPriorityLevel(priority)}`}</p>
      <p>{`Application Version: ${version}`}</p>
      <p>{`Assigned to: ${assigned}`}</p>
      <p>{`Creator: ${creator}`}</p>
    </div>
  );
};

export default PreviewCard;
