import bugModel from "./models/bugModel";

export const bugPriorityLevel = (num) => {
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

export const bugBorderColor = (num) => {
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

//TEMP DATA RETRIEVER
//TODO: REPLACE WHEN DATABASE IS SETUP

export const retrieveBugs = () => {
  let data = [];
  data.push(
    new bugModel({
      _id: Math.floor(Math.random() * 1000),
      name: "Won't Load",
      details: "Crashes after 3 seconds",
      steps: "Open application and it will crash",
      version: "v1.0",
      assigned: "Drew Dobson",
      creator: "John Doe",
      priority: 2,
      time: "17:59",
    })
  );

  data.push(
    new bugModel({
      _id: Math.floor(Math.random() * 1000),
      name: "Duplicates Entries",
      details: "Running retrieve bugs seems to run twice on each execution",
      steps: "Call retrieveBugs()",
      version: "v1.0",
      assigned: "Drew Dobson",
      creator: "Mary Jane",
      priority: 1,
      time: "11:37",
    })
  );
  data = data.map((item) => {
    const {
      _id,
      name,
      details,
      steps,
      version,
      assigned,
      creator,
      priority,
      time,
    } = item;

    return {
      _id,
      name,
      details,
      steps,
      version,
      assigned,
      creator,
      priority,
      time,
    };
  });
  let sorted = data.sort((a, b) => a.priority - b.priority);
  return sorted;
};

// export const retrieveBugs = () => {
//   let data = [];
//   data.push(
//   new bugModel({
//     _id: 123456789,
//     name: "Won't Load",
//     details: "Crashes after 3 seconds",
//     steps: "Open application and it will crash",
//     version: "V1",
//     assigned: "Drew Dobson",
//     creator: "John Doe",
//     priority: 4,
//     time: "17:59",
//   })
// );
//   let sorted = data.sort((a, b) => a.priority - b.priority);
//   return sorted;
// };
