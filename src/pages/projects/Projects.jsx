import "./projects.css";
import project1 from "./project1.jpg";
import project2 from "./project2.png";
import project3 from "./project3.jpg";
import AnimatedPage from "../AnimatedPage";
import { RiExternalLinkLine, RiGithubLine } from "react-icons/ri";
import Reveal from "../Reveal";

const Projects = () => {
  const InfoProjects = [
    {
      id: "project1",
      src_img: project1,

      projectTitle: "MTK GYM",
      date: "Nov 2023",
      description:
        "A gym website is a comprehensive resource for fitness information,class schedules, membership options, and tools to help usersachieve their fitness goals. ",
      skill_1: "React js",
      skill_2: "Tailwind Css",
      link_Demo: "https://mtk-gym-app.netlify.app",
      link_Code: "https://github.com/yassmtk21/mtkgym-app",
    },
    {
      id: "project2",
      src_img: project2,
      projectTitle: "QuickAnnonce",
      date: "Jun 2023",
      description:
        "This site aims to provide easy functional tools such as viewing advertisements, registering on the site and the publication of advertisements, with simplicity for the user.",
      skill_1: "React js",
      skill_2: "Laravel",
      link_Demo: null,
      link_Code: "https://github.com/yassmtk21/QuickAnnonce",
    },
    {
      id: "project3",
      src_img: project3,
      projectTitle: "portfolio",
      date: "Jan 2024",
      description:
        "My portfolio website serves as a centralized platform where I showcase my expertise in web development. that demonstrate my skills, for creating online experiences.",
      skill_1: "React js",
      skill_2: "CSS3",
      link_Demo: "home",
      link_Code: "https://github.com/yassmtk21/QuickAnnonce",
    },
  ];
  return (
    <AnimatedPage>
      <div className="project-container">
        <div className="poject-title">
          <Reveal>
            <h2>My Work</h2>
          </Reveal>
          <Reveal>
            <h3>Each project is a unique piece of development</h3>
          </Reveal>
        </div>
        {InfoProjects.map(
          (
            {
              id,
              src_img,
              projectTitle,
              date,
              description,
              skill_1,
              skill_2,
              link_Demo,
              link_Code,
            },
            i
          ) => (
            <div className="content-project" id={id} key={i}>
              <div className="imgs-projects">
                <img className="img" src={src_img} alt="" />
              </div>
              <div className="description-project">
                <h2>
                  <Reveal>{projectTitle}</Reveal>
                </h2>
                <span className="span">
                  <Reveal>{date}</Reveal>
                </span>
                <Reveal>
                  <p>{description}</p>
                </Reveal>
                <div className="project-skills">
                  <Reveal>
                    <span>{skill_1}</span>
                  </Reveal>
                  <Reveal>
                    <span>{skill_2}</span>
                  </Reveal>
                </div>
                <Reveal>
                  <div className="website">
                    <a
                      href={link_Demo}
                      target="blank"
                      style={
                        link_Demo === null ? { pointerEvents: "none" } : {}
                      }
                    >
                      Vist WebSite <RiExternalLinkLine />
                    </a>
                    <a
                      href={link_Code}
                      target="blank"
                      style={
                        link_Code === null ? { pointerEvents: "none" } : {}
                      }
                    >
                      Code <RiGithubLine />
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          )
        )}
      </div>
    </AnimatedPage>
  );
};

export default Projects;
