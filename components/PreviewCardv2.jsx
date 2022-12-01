import { useSelector } from "react-redux";
import { ThumbtackIcon, StarIcon, EllipsisIcon } from "../assets/faIcons";
import {
  ticketPriorityLevel,
  returnUserInitials,
} from "../controllers/ticketController";

const PreviewCardv2 = ({ data }) => {
  const {
    id,
    name,
    details,
    steps,
    status,
    version,
    priority,
    assignee,
    creator,
  } = data;

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

  return (
    <div className="border border-black rounded-lg shadow-1xl">
      <div className="flex">
        <div className="flex flex-col gap-1 justify-center min-w-[200px] my-3">
          <p className="text-center">#{id}</p>
          <p
            className={`text-center mr-3 py-1 rounded-r text-darkBlueGrey ${ticketStatusColor(
              status
            )}`}>
            {status}
          </p>
        </div>
        <div className="flex flex-col gap-1 justify-center my-3">
          <p className="font-semibold text-darkBlueGrey">{name}</p>
          <p className="text-sm text-blueGrey">{details}</p>
        </div>
      </div>
      <div className="flex">
        <div className="flex justify-center gap-8 min-w-[200px]">
          <ThumbtackIcon twClass={"w-4"} />
          <StarIcon twClass={"w-5"} />
          <EllipsisIcon twClass={"w-4"} />
        </div>
        <div className="flex w-full my-3">
          {/* ASSIGNEE */}
          <div className="flex items-center mx-3">
            <div className="flex items-center mr-2">
              <p className="text-xs bg-red-200 rounded-full p-1">
                {returnUserInitials(assignee)}
              </p>
            </div>
            <div>
              <p className="text-xs text-blueGrey opacity-70">assignee</p>
              <p className="text-xs text-darkBlueGrey">{assignee}</p>
            </div>
          </div>
          {/* RAISED BY */}
          <div className="flex items-center mx-3">
            <div className="flex items-center mr-2">
              <p className="text-xs bg-red-200 rounded-full p-1">
                {returnUserInitials(creator)}
              </p>
            </div>
            <div>
              <p className="text-xs text-blueGrey opacity-70">raised by</p>
              <p className="text-xs">{creator}</p>
            </div>
          </div>
          {/* PRIORITY */}
          <div className="flex items-center mx-3">
            <div>
              <p className="text-xs text-blueGrey opacity-70">priority</p>
              <p
                className={`text-xs ${
                  priority === 1 ? "text-errorRed font-semibold" : ""
                }`}>
                {ticketPriorityLevel(priority)}
              </p>
            </div>
          </div>
          {/* CATEGORY */}
          <div className="flex items-center mx-3">
            <div>
              <p className="text-xs text-blueGrey opacity-70">category</p>
              <p className="text-xs">HappyFox Sales</p>
            </div>
          </div>
          {/* OVERDUE */}
          <div className="flex items-center mx-3">
            <div>
              <p className="text-xs text-blueGrey opacity-70">overdue by</p>
              <p className="text-xs">Set Due Date</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewCardv2;
