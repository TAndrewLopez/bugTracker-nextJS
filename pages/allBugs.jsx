import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBugs } from "../redux/features/bugSlice";
import { BugCard } from "../components";

const BugsView = () => {
  const dispatch = useDispatch();
  const bugs = useSelector((state) => state.bugReducer);
  const { sidebarOpen } = useSelector((state) => state.viewReducer);

  //TODO://REMOVE FAKE FETCH DATA WITH FETCH FROM DATA BASE. POSSIBLY WITH SERVER SIDE PROPS?
  useEffect(() => {
    dispatch(getBugs());
  }, []);

  // TODO: ADD LINK TO EACH TICKET/BUG SO IT WILL DIRECT TO NESTED ROUTE
  return (
    <div
      className={`absolute top-20 z-[-2] flex flex-col justify-center ease-in-out duration-300 p-4
      ${sidebarOpen ? "md:pl-80 w-full" : "w-full"}`}>
      {bugs.map((bug) => {
        return <BugCard key={bug._id} data={bug} />;
      })}
    </div>
  );
};

export default BugsView;
