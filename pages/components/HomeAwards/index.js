import React from "react";
import SecTitle from "../../common/SecTitle";

const HomeAwards = () => {
  return (
    <>
      <SecTitle text="Awards" />
      <div className="row">
        <div className="col-lg-4 m-15px-tb">
          <div className="feature-box-02 media align-items-center">
            <div className="icon">
              <img src="static/img/a1.png" title="" alt="" />
            </div>
            <div className="media-body">
              <h6>Honorable mension</h6>
              <p>Site of the day</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 m-15px-tb">
          <div className="feature-box-02 media align-items-center">
            <div className="icon">
              <img src="static/img/a2.png" title="" alt="" />
            </div>
            <div className="media-body">
              <h6>Honorable mension</h6>
              <p>Site of the day</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 m-15px-tb">
          <div className="feature-box-02 media align-items-center">
            <div className="icon">
              <img src="static/img/a3.png" title="" alt="" />
            </div>
            <div className="media-body">
              <h6>Honorable mension</h6>
              <p>Site of the day</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAwards;
