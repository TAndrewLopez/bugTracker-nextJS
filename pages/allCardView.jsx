import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PreviewCard, PreviewCard2, PreviewCard3 } from "../components";
import { getTickets } from "../redux/features/ticketSlice";

const allCardView = () => {
  const dispatch = useDispatch();
  const {
    ticketReducer: { tickets, loading },
    viewReducer: { sidebarOpen },
  } = useSelector((state) => state);

  //TODO://REMOVE FAKE FETCH DATA WITH FETCH FROM DATA BASE. POSSIBLY WITH SERVER SIDE PROPS?
  useEffect(() => {
    if (!tickets?.length) {
      dispatch(getTickets());
    }
  }, []);

  // TODO: ADD LINK TO EACH TICKET/BUG SO IT WILL DIRECT TO NESTED ROUTE
  return (
    <div
      className={`absolute top-[76px] z-[-2] flex flex-col gap-4 justify-center ease-in-out duration-300 p-4 
      ${sidebarOpen ? "md:pl-80 w-full" : "w-full"}`}>
      {loading
        ? "LOADING..."
        : tickets?.map((ticket) => {
            // return <PreviewCard key={ticket.id} data={ticket} />;
            // return <PreviewCard2 key={ticket.id} data={ticket} />;
            return <PreviewCard3 key={ticket.id} data={ticket} />;
          })}
    </div>
  );
};

export default allCardView;
