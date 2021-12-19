/* eslint-disable prettier/prettier */
import React from "react";
import BioData from "../../common/BioData";
import Paragraph from "../../common/Paraghraph";
import SecTitle from "../../common/SecTitle";

class HomeAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bioInfo: "", avatar: "", address: "" };
  }

  componentDidMount() {
    this.bannerData();
  }

  bannerData = async () => {
    try {
      const res = await fetch("http://localhost:1337/biography", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const bData = await res.json();
      this.setState({
        bioInfo: bData.biography,
        avatar: bData.biography.Avatar,
        address: bData.address,
      });
      // console.log("About data",bData);
      // console.log(this.state.avatar.url);
    } catch (error) {
      console.log(error);
    }
  };

  getAge = (dateString) => {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  render() {
    const baseUrl = "http://localhost:1337";
    const {
      Name,
      DOB,
      Phone,
      Email,
      Designation,
      Introduction,
    } = this.state.bioInfo;
    const { url } = this.state.avatar;
    const { city } = this.state.address;
    return (
      <div className="row align-items-center justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="about-me">
            <div className="img">
              <div className="img-in">
                <img src={baseUrl + url} title="" alt="" />
              </div>
              <div className="nav social-icons justify-content-center">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-pinterest" />
                </a>
              </div>
            </div>
            <div className="info">
              <p>{Designation}</p>
              <h3>{Name}</h3>
            </div>
          </div>
        </div>
        <div className="col-lg-7 ml-auto">
          <div className="about-info">
            <div className="about-text">
              <SecTitle text="Biography" />
              <Paragraph paraInfo={Introduction} />
            </div>
            <div className="info-list">
              <div className="row">
                <div className="col-sm-5">
                  <ul>
                    <BioData bioLbl="Name" bioVal={Name} />
                    <BioData bioLbl="Birthday" bioVal={DOB} />
                    <BioData bioLbl="Age" bioVal={this.getAge(DOB)} />
                    <BioData bioLbl="Address" bioVal={city} />
                  </ul>
                </div>
                <div className="col-sm-7">
                  <ul>
                    <BioData bioLbl="Phone" bioVal={`+91-${Phone}`} />
                    <BioData bioLbl="Email" bioVal={Email} />
                    <BioData
                      bioLbl="Linkedin"
                      bioVal="https://www.linkedin.com/in/surabhi-nayak/"
                    />
                    <BioData bioLbl="Freelance" bioVal="Available" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// HomeAbout.propTypes = {
//   Name: PropTypes.string.isRequired,
//   DOB: PropTypes.string.isRequired,
//   Phone: PropTypes.string.isRequired,
//   Email: PropTypes.string.isRequired,
//   Designation: PropTypes.string.isRequired,
//   Introduction: PropTypes.string.isRequired,
//   url: PropTypes.string.isRequired,
//   city: PropTypes.string.isRequired,
// };

export default HomeAbout;
