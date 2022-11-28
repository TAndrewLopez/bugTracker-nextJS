import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PreviewCard } from "../components";
import { getTickets } from "../redux/features/ticketSlice";

const BugsView = () => {
  const dispatch = useDispatch();
  let { tickets, loading } = useSelector((state) => state.ticketReducer);

  const { sidebarOpen } = useSelector((state) => state.viewReducer);

  //TODO://REMOVE FAKE FETCH DATA WITH FETCH FROM DATA BASE. POSSIBLY WITH SERVER SIDE PROPS?
  useEffect(() => {
    dispatch(getTickets());
  }, []);

  // TODO: ADD LINK TO EACH TICKET/BUG SO IT WILL DIRECT TO NESTED ROUTE
  return (
    <div
      className={`absolute top-20 z-[-2] flex flex-col justify-center ease-in-out duration-300 p-4
      ${sidebarOpen ? "md:pl-80 w-full" : "w-full"}`}>
      {loading
        ? "LOADING..."
        : tickets.map((ticket) => {
            return <PreviewCard key={ticket.id} data={ticket} />;
          })}
    </div>
  );
};

export default BugsView;
