import React from "react";
import SecTitle from "../../common/SecTitle";

class HomePortfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = { portfolio: [] };
  }

  componentDidMount() {
    this.portfolio();
  }

  portfolio = async () => {
    try {
      const res = await fetch("http://localhost:1337/portfolio", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const bData = await res.json();
      this.setState({
        portfolio: bData.portfolio,
      });
      // console.log("About data",bData);
      // console.log(this.state.avatar.url);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const baseUrl = "http://localhost:1337";
    const portfolioDets = this.state.portfolio;
    return (
      <>
        <section id="work" className="section dark-bg clearfix">
          <div className="container">
            <SecTitle text="My Portfolio." />
            {/* <div className="portfolio-filter-01">
              <ul className="filter nav">
                <li className="active" data-filter="*">
                  All
                </li>
                <li data-filter=".branding">Branding</li>
                <li data-filter=".photoshop">Photoshop</li>
                <li data-filter=".fashion">Fashion</li>
                <li data-filter=".product">Product</li>
              </ul>
            </div> */}
            <div className="portfolio-content grid-gutter-lg grid-col-3 lightbox-gallery">
              {portfolioDets.map((portfolio, index) => {
                return (
                  <div
                    className="grid-item product branding fashion"
                    key={index}
                  >
                    <div className="portfolio-box-01">
                      <a href={portfolio.website} className="gallery-link" target="_blank">
                        <div className="portfolio-info">
                          <h5 className="white-color font-weight-bold">
                            {portfolio.title}
                          </h5>
                          <span>{portfolio.subTitle}</span>
                        </div>

                        {portfolio.image !== null && (
                          <div className="portfolio-img">
                            <img
                              src={baseUrl + portfolio.image.url}
                              title=""
                              alt=""
                            />
                            {/* <div className="portfolio-icon">
                            <a href="#" className="gallery-link">
                              <span className="ti-plus"></span>
                            </a>
                          </div> */}
                          </div>
                        )}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default HomePortfolio;
