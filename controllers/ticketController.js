export const ticketPriorityLevel = (num) => {
  switch (num) {
    case 1:
      return "High";
    case 2:
      return "Medium";
    case 3:
      return "Low";
    default:
      return "";
  }
};
