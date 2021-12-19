import React from "react";
import SecTitle from "../../common/SecTitle";
class HomeExperience extends React.Component {
  constructor(props) {
    super(props);

    this.state = { exp: [] };
  }

  componentDidMount() {
    this.experience();
  }

  experience = async () => {
    try {
      const res = await fetch("http://localhost:1337/experience", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const bData = await res.json();
      this.setState({
        exp: bData.experience,
      });
      // console.log("exp", this.state.exp);
      // console.log(this.state.avatar.url);
    } catch (error) {
      console.log(error);
    }
  };

  expYear = (date) => {
    // const [dayfromDate, monthfromDate, yearfromDate] = accountStatementForm.value.fromDate.split("-")
    let paramDate = new Date(date);
    // console.log(date);
    let MMM = paramDate.toLocaleString("default", { month: "short" });
    let YYYY = paramDate.getFullYear();

    if (date == null) {
      return "Present";
    } else {
      return MMM + " " + YYYY;
    }
  };

  render() {
    const expDets = this.state.exp;
    return (
      <>
        <SecTitle text="Experience" />
        <div className="resume-box">
          {expDets.map((exp, index) => {
            return (
              <div className="resume-row" key={index}>
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{exp.position}</h6>
                      <label>{exp.companyName}</label>
                      <p>
                        {this.expYear(exp.startYear) + " - " + this.expYear(exp.endYear)}
                      </p>
                      <div className="rb-time">{exp.workType}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>About My Role</h6>
                      <p> {exp.aboutCompany} </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default HomeExperience;
