import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import javaLogo from "../assets/img/java-logo.png";
import htmlLogo from "../assets/img/html5-logo.png";
import cssLogo from "../assets/img/css3-logo.png";
import csharpLogo from "../assets/img/csharp.png";
import mysqlLogo from "../assets/img/mysql-logo.png";
import jsLogo from "../assets/img/javascript-logo.png";
import githubLogo from "../assets/img/github-mark-white.svg";
import gitLogo from "../assets/img/git-logo.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 4 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 3 },
  };

  // Danh sách kỹ năng
  const skills = [
    { img: javaLogo, title: "Java" },
    { img: htmlLogo, title: "HTML5" },
    { img: cssLogo, title: "CSS3"},
    { img: csharpLogo, title: "C#"},
    { img: mysqlLogo, title: "MySQL"},
    { img: jsLogo, title: "JavaScript" },
    { img: gitLogo, title: "Git"},
    { img: githubLogo, title: "GitHub"},
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>My Skills</h2>
              <p>Here are the technologies I have experience with:</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((skill, index) => (
                  <div className="item skill-item" key={index}>
                    <img src={skill.img} alt={skill.title} />
                    <h5>{skill.title}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
