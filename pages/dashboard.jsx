import { useSelector } from "react-redux";
import { ThumbtackIcon, StarIcon, EllipsisIcon } from "../assets/faIcons";

const Dashboard = () => {
  const { sidebarOpen } = useSelector((state) => state.viewReducer);

  const ticketStatusColor = (str) => {
    switch (str) {
      case "OPEN":
        return "bg-blue-500";
      case "SOLVED":
        return "bg-green-500";
      case "NEW":
        return "bg-orange-500";
      case "NEEDS RESPONSE":
        return "bg-orange-600";
      case "FEATURE REQUEST":
        return "bg-amber-500";
      case "CLOSED":
        return "bg-slate-400";
      default:
        return;
    }
  };

  const status = "CLOSED";

  return (
    <div
      className={`absolute top-[76px] z-[-2] flex flex-col justify-center ease-in-out duration-300 p-4
      ${sidebarOpen ? "md:pl-[340px] w-full" : "w-full"}`}>
      <div className="border border-black rounded-lg shadow-1xl">
        <div className="flex">
          <div className="flex flex-col gap-1 justify-center min-w-[200px] my-3">
            <p className="text-center">#IT00006790</p>
            <p className={`text-center mr-3 ${ticketStatusColor(status)}`}>
              {status}
            </p>
          </div>
          <div className="flex flex-col gap-1 justify-center my-3">
            <p className="font-semibold">
              Editing the Staff reply should reload the ticket section
            </p>
            <p className="text-sm">
              A combination of intuitive automation and self service tools, both
              key components of an efficient...
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex justify-center gap-8 min-w-[200px]">
            <ThumbtackIcon twClass={"w-4"} />
            <StarIcon twClass={"w-5"} />
            <EllipsisIcon twClass={"w-4"} />
          </div>
          <div className="flex w-full">
            {/* ASSIGNEE */}
            <div className="flex items-center mx-3">
              <div className="flex items-center mr-2">
                <p className="bg-red-200 rounded-full p-1 my-1">SM</p>
              </div>
              <div>
                <p className="text-xs">assignee</p>
                <p className="text-xs">Shawn Max</p>
              </div>
            </div>
            {/* RAISED BY */}
            <div className="flex items-center mx-3">
              <div className="flex items-center mr-2">
                <p className="bg-red-200 rounded-full p-1 my-1">SM</p>
              </div>
              <div>
                <p className="text-xs">raised by</p>
                <p className="text-xs">Shadow Matt</p>
              </div>
            </div>
            {/* PRIORITY */}
            <div className="flex items-center mx-3">
              <div>
                <p className="text-xs">priority</p>
                <p className="text-xs">Critical</p>
              </div>
            </div>
            {/* CATEGORY */}
            <div className="flex items-center mx-3">
              <div>
                <p className="text-xs">category</p>
                <p className="text-xs">HappyFox Sales</p>
              </div>
            </div>
            {/* OVERDUE */}
            <div className="flex items-center mx-3">
              <div>
                <p className="text-xs">overdue by</p>
                <p className="text-xs">Set Due Date</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

/*
        <div className="flex border-box border border-black m-5 shadow-1xl rounded-lg">
        <div className="flex flex-col justify-between p-4 m-3">
          <h6>#IT00006790</h6>
          <h2>OPEN</h2>
          <div className="flex justify-around">
            <ThumbtackIcon twClass={"w-4 inline-block"} />
            <StarIcon twClass={"w-5 inline-block"} />
            <EllipsisIcon twClass={"w-4 inline-block"} />
          </div>
        </div>
        <div className="right m-3">
          <div className="top">
            <p>Editing the Staff reply should reload the ticket section</p>
            <p>
              A combination of intuitive automation and self service tools, both
              key components of an efficient...
            </p>
          </div>
          <div className="flex text-xs">
            <div>
              <p>assigned to</p>
              <p>Shawn Max</p>
            </div>
            <div>
              <p>raised by</p>
              <p>Shadow Matt</p>
            </div>
            <div>
              <p>priority</p>
              <p>Critical</p>
            </div>
            <div>
              <p>category</p>
              <p>HappyFox Sales</p>
            </div>
            <div>
              <p>overdue by</p>
              <p>Set Due Date</p>
            </div>
          </div>
        </div>
      </div>
*/
