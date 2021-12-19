import React from "react";
import SecTitle from "../../common/SecTitle";

class HomeWork extends React.Component {
  constructor(props) {
    super(props);

    this.state = { whatido: [] };
  }

  componentDidMount() {
    this.whatIdo();
  }

  whatIdo = async () => {
    try {
      const res = await fetch("http://localhost:1337/what-i-do", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const bData = await res.json();
      this.setState({
        whatido: bData.work,
      });
      // console.log("whatido", this.state.whatido);
      // console.log(this.state.avatar.url);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const workDets = this.state.whatido;
    return (
      <>
        <SecTitle text="What I do?" />
        <div className="row">
          {workDets.map((work, index) => {
            return (
              <div className="col-lg-4 m-15px-tb" key={index}>
                <div className="feature-box-01">
                  <i className="icon theme-bg icon-mobile" />
                  <div className="feature-content" >
                    <h5>{work.workTitle}</h5>
                    <p>{work.WorkDescription}</p>
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

export default HomeWork;
