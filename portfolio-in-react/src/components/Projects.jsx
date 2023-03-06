import PeachQE from "./Projects/PeachQE";
import ShackClone from "./Projects/ShackClone";
import SleepRx from "./Projects/SleepRx";
import "../css/Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <ul>
        <li>
          <PeachQE></PeachQE>
        </li>
        <li>
          <ShackClone></ShackClone>
        </li>
        <li>
          <SleepRx></SleepRx>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
