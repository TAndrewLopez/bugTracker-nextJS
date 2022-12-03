import { ThumbtackIcon, StarIcon, EllipsisIcon } from "../assets/faIcons";
import {
  ticketPriorityLevel,
  returnUserInitials,
} from "../controllers/ticketController";

const PreviewCard3 = ({ data }) => {
  const { id, name, details, status, version, priority, assignee, creator } =
    data;

  return (
    <div
      className={`min-h-48 m-5 p-8 text-darkGrey cursor-pointer shadow-3xl rounded hover:scale-105 transition ease-in-out duration-300  
      ${ticketPriorityBorderColor(priority)}`}>
      {/* TICKET PANEL AND LOREM IPSUM */}
      <div className="flex border-2">
        {/* SMALL INFO PANEL */}
        <div>
          <p>#{id}</p>
          <p>{status}</p>
          {/* <div className="flex">
            <ThumbtackIcon twClass={"w-4"} />
            <StarIcon twClass={"w-5"} />
            <EllipsisIcon twClass={"w-4"} />
          </div> */}
        </div>
        {/* DETAIL SECTION */}
        <div>
          <p>{name}</p>
          <p>{details}</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* ASSIGNEE */}
        <div className="flex items-center">
          <p>{returnUserInitials(assignee)}</p>
          <div>
            <p>assignee</p>
            <p>{assignee}</p>
          </div>
        </div>
        {/* RAISED BY */}
        <div className="flex items-center">
          <p>{returnUserInitials(creator)}</p>
          <div>
            <p>raised by</p>
            <p>{creator}</p>
          </div>
        </div>
        {/* PRIORITY */}
        <div className="flex items-center">
          <p>priority</p>
          <p>{ticketPriorityLevel(priority)}</p>
        </div>
        {/* CATEGORY */}
        <div className="flex items-center">
          <p>category</p>
          <p>HappyFox Sales</p>
        </div>
        {/* OVERDUE */}
        <div className="flex items-center">
          <p>overdue by</p>
          <p>Set Due Date</p>
        </div>
      </div>
    </div>
  );
};

export default PreviewCard3;

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

const ticketStatusColor = (str) => {
  switch (str) {
    case "open":
      return "bg-blue-500";
    case "solved":
      return "bg-green-500";
    case "new":
      return "bg-orange-500";
    case "needs response":
      return "bg-orange-600";
    case "feature request":
      return "bg-amber-500";
    case "closed":
      return "bg-slate-400";
    default:
      return;
  }
};
