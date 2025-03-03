import sguLogo from "../assets/img/sgu.png";
import educationLogo from "../assets/img/education.png";

export const Education = () => {
  const education = [
    {
      img: sguLogo,
      title: "Bachelor of Information Technology",
      school: "Saigon University",
      year: "2022-2027",
    },
    
    // Thêm các mục giáo dục khác nếu có
  ];

  return (
    <section className="education" id="education">
      <div className="container">
        <div className="row header">
          <h1>
            <img src={educationLogo} alt="icon" /> My Education
          </h1>
          <p>
            Education is not the learning of facts, but the training of the
            mind to think.
          </p>
        </div>
        {education.map((edu, index) => (
          <div className="row education-item" key={index}>
            <div className="image-container">
              <img src={edu.img} alt={edu.school} />
            </div>
            <div className="text-content">
              <h2>{edu.title}</h2>
              <h4>{edu.school}</h4>
              <h3>{edu.year}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
