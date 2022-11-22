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
  const tempBugs = [
    {
      _id: Math.floor(Math.random() * 1000),
      name: "MOBILE STYLES",
      details: "Necessary for UX",
      steps: "Required for each page",
      version: "v1.0",
      assigned: "Edwin Stone",
      creator: "Squash CRM",
      priority: 3,
      time: new Date().toLocaleString(),
    },
    {
      _id: Math.floor(Math.random() * 1000),
      name: "TABLE STYLES",
      details: "Necessary for UX",
      steps: "Required for each page",
      version: "v1.0",
      assigned: "Logan Palmer",
      creator: "Squash CRM",
      priority: 3,
      time: "",
    },
    {
      _id: Math.floor(Math.random() * 1000),
      name: "DESKTOP STYLES",
      details: "Necessary for UX",
      steps: "Required for each page",
      version: "v1.0",
      assigned: "Hugh Mcdowell",
      creator: "Squash CRM",
      priority: 3,
      time: "",
    },
    {
      _id: Math.floor(Math.random() * 1000),
      name: "USER CRUD",
      details: "GET/POST/PUT/DEL user routes",
      steps: "N/A",
      version: "v1.0",
      assigned: "Lewis Hamilton",
      creator: "Squash CRM",
      priority: 2,
      time: "",
    },
    {
      _id: Math.floor(Math.random() * 1000),
      name: "TICKET CRUD",
      details: "GET/POST/PUT/DEL ticket routes",
      steps: "N/A",
      version: "v1.0",
      assigned: "Alejandro Knapp",
      creator: "Squash CRM",
      priority: 2,
      time: "",
    },
    {
      _id: Math.floor(Math.random() * 1000),
      name: "AUTHENTICATION",
      details: "Authenticate users and validate privileges",
      steps: "N/A",
      version: "v1.0",
      assigned: "Cheyenne Mccann",
      creator: "Squash CRM",
      priority: 1,
      time: "",
    },
    {
      _id: Math.floor(Math.random() * 1000),
      name: "USER NOTIFICATIONS",
      details: "N/A",
      steps: "N/A",
      version: "v1.0",
      assigned: "Camden Rodriguez",
      creator: "Squash CRM",
      priority: 2,
      time: "",
    },
    {
      _id: Math.floor(Math.random() * 1000),
      name: "CREATE PORT",
      details:
        "You started this project, but you still have to complete your portfolio.",
      steps: "Skills Sections. Projects Section. Hero Image.",
      version: "v1.0",
      assigned: "Drew Dobson",
      creator: "Drew Dobson",
      priority: 3,
      time: "",
    },
  ];

  return tempBugs;
};
