export const ticketPriorityLevel = (num) => {
  switch (num) {
    case 1:
      return "Critical";
    case 2:
      return "Medium";
    case 3:
      return "Low";
    default:
      return "N/A";
  }
};

export const returnUserInitials = (str) => {
  if (str === "unassigned") {
    return "N/A";
  }
  const [fname, lname] = str.split(" ");
  return `${fname[0]}${lname[0]}`;
};
