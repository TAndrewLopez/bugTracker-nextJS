export default function (bug) {
  if (bug != undefined) {
    this._id = bug._id;
    this.name = bug.name;
    this.details = bug.details;
    this.steps = bug.steps;
    this.version = bug.version;
    this.priority = bug.priority;
    this.assigned = bug.assigned;
    this.creator = bug.creator;
    this.time = bug.time;
  }
}

/*
SECTION A
  ID
  STATUS - OPEN/SOLVED/NEW/NEEDS RESPONSE/FEATURE REQUEST
  PIN/STAR/MORE OPTIONS

SECTION B
  TITLE / TIME ELAPSED 
  MORE DETAILS
  ASSIGNED TO
  RAISED BY
  PRIORITY
  CATEGORY
  OVERDUE BY

*/
