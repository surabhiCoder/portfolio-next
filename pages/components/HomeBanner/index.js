/* eslint-disable prettier/prettier */
import React from "react";
// import bannerData from "../../api/homeBanner"

class HomeBanner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {response: '', download: '', avatar: ''};
  }

  componentDidMount() {
    this.bannerData();  
  }

  bannerData = async () => {
    try {
      const res = await fetch("http://localhost:1337/home", {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      });
      const bData = await res.json();
      this.setState({response : bData.bioinfo, download : bData.DownloadCV, avatar : bData.bioinfo.Avatar});
      // console.log(bData);
      // console.log(this.state.avatar.url);
    } catch (error) {
      console.log(error);
    }
  };

  render(){
    const baseUrl = 'http://localhost:1337';
    // console.log(this.state.avatar)
    const {Name, Designation, Introduction, Email, Phone} = this.state.response;
    const {url: avatarUrl} = this.state.avatar;
    const {name,url: cvUrl} = this.state.download;
    // console.log({bgImage})
    return (
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <label>{Phone}</label>
            <label>{Email}</label>
          </div>
          {/* <div className="hb-lang">
            <ul className="nav">
              <li className="active">
                <a href="#">EN</a>
              </li>
              <li>
                <a href="#">FR</a>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6>Hello, My name is</h6>
                <h1 className="font-alt">{Name}</h1>
                <p className="lead">
                  {Designation}
                </p>
                <p className="desc">
                 { Introduction}
                </p>
                <div className="btn-bar">
                  <a className="font-alt" href={baseUrl + cvUrl} download={name} target="_blank">
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hb-me" style={{backgroundImage : `url(${baseUrl+ avatarUrl})`}} />
      </section>
    );
  }
  
};

export default HomeBanner;
