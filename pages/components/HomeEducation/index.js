import React from "react";
import SecTitle from "../../common/SecTitle";

class HomeEducation extends React.Component {
  constructor(props) {
    super(props);

    this.state = { edu: [], skills: [] };
  }

  componentDidMount() {
    this.eduSkills();
    
  }

  eduSkills = async () => {
    try {
      Promise.all([
        fetch("http://localhost:1337/education"),
        fetch("http://localhost:1337/skills"),
      ])
        .then((values) => Promise.all(values.map((value) => value.json())))
        .then((finalVals) => {
          const education = finalVals[0];
          const skills = finalVals[1];
          this.setState({ edu: education.educaton, skills: skills.Skills });
          console.log(this.state.edu);
          console.log(this.state.skills);
          this.progressBar();
        });
    } catch (error) {
      console.log(error);
    }
  };

  expYear = (date) => {
    // const [dayfromDate, monthfromDate, yearfromDate] = accountStatementForm.value.fromDate.split("-")
    let paramDate = new Date(date);
    // console.log(date);
    // let MMM = paramDate.toLocaleString("default", { month: "short" });
    let YYYY = paramDate.getFullYear();

    if (date == null) {
      return "Present";
    } else {
      return YYYY;
    }
  };

  progressBar = () => {
    const bar = document.querySelectorAll(".skill-bar-in");
    bar.forEach((el) => {
      const progressVal = el.getAttribute("aria-valuenow");
      el.style.width = `${progressVal}%`;
      console.log(el);
    });
  };

  render() {
    const eduDets = this.state.edu;
    const skillsDets = this.state.skills;
    return (
      <>
        <SecTitle text="Education & Skills" />
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              {eduDets.map((edu, index) => {
                return (
                  <li key={index}>
                    <span>
                      {this.expYear(edu.startDate) +
                        " - " +
                        this.expYear(edu.endDate)}
                    </span>
                    <h6>{edu.EducationTitle}</h6>
                    <p>{edu.University}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            {skillsDets.map((skill, index) => {
              return (
                <div className="skill-lt" key={index}>
                  <h6>{skill.skillType}</h6>
                  <span>{`${skill.ratings}%`}</span>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-in"
                      role="progressbar"
                      aria-valuenow={skill.ratings}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default HomeEducation;
