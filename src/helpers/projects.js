// add latest projects on top

import trainingJournal from "../images/training-journal.png";
import engineerPathways from "../images/eps-screenshot.png";
import ecn from "../images/ecn.png";
import takeNotes from "../images/take-notes.png";
import checkWeather from "../images/check-the-weather.png";
import createPassword from "../images/create-a-password.png";
import planner from "../images/plan-your-day.png";
import quiz from "../images/quiz.png";

const projects = [
  {
    image: ecn,
    github: "https://github.com/mz0121coder/elite-coding-network",
    live: "https://elite-coding-network.herokuapp.com",
    desc: "Elite Coding Network",
    summary: "Social network for alumni of coding bootcamps",
    tech: "MERN | Nodemailer | Cloudinary",
  },
  {
    image: trainingJournal,
    github: "https://github.com/mz0121coder/Training-Journal",
    live: "https://training-journal-mz.herokuapp.com/",
    desc: "Training Journal",
    summary: "Workout tracker",
    tech: "MongoDB | Mongoose | Express",
  },
  {
    image: engineerPathways,
    github: "https://github.com/mz0121coder/Engineer-Pathways",
    live: "https://engineerpathways.herokuapp.com/",
    desc: "Engineer Pathways",
    summary: "Full stack team manager application",
    tech: "Node.js | Handlebars.js | MySQL",
  },
  {
    image: takeNotes,
    github: "https://github.com/mz0121coder/Take-notes",
    live: "https://take-notes-online.herokuapp.com/",
    desc: "Take Notes",
    summary: "Note taking app",
    tech: "Node.js | Express | JavaScript",
  },
  {
    image: checkWeather,
    github: "https://github.com/mz0121coder/Check-the-weather",
    live: "https://mz0121coder.github.io/Check-the-weather/",
    desc: "Check the Weather",
    summary: "Current conditions & 5 day forecast, using Open Weather API",
    tech: "CSS | API | Frontend JS",
  },
  {
    image: createPassword,
    github: "https://github.com/mz0121coder/Create-a-Password",
    live: "https://mz0121coder.github.io/Create-a-Password/",
    desc: "Create a Password",
    summary: "Using JavaScript to generate unique passwords",
    tech: "Vanilla JS",
  },
  {
    image: planner,
    github: "https://github.com/mz0121coder/Plan-your-day",
    live: "https://mz0121coder.github.io/Plan-your-day/",
    desc: "Plan your day",
    summary: "Colour coded planner for 9-5 activities",
    tech: "JavaScript | Local Storage",
  },
  {
    image: quiz,
    github: "https://github.com/mz0121coder/JS-multi-choice-quiz",
    live: "https://mz0121coder.github.io/JS-multi-choice-quiz",
    desc: "JS Quiz",
    summary: "A challenging, multi-choice tech quiz",
    tech: "HTML | CSS | JavaScript",
  },
];
export default projects;
