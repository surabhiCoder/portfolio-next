import React from "react";
import SecTitle from "../../common/SecTitle";

const HomeBlog = () => {
  return (
    <section id="blog" className="section">
      <div className="container">
        <SecTitle text="Latest Blog." />
        <div className="row">
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <a href="single-blog.html">
                  <img src="static/img/blog-1.jpg" title="" alt="" />
                </a>
              </div>
              <div className="blog-info">
                <div className="meta">29/FEB/2020 - WEBSITE - 1 COMMENT</div>
                <h6>
                  <a href="single-blog.html">
                    Five Solid Evidences Attending Design Is Good For Your
                    Career Development.
                  </a>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <a href="single-blog.html">
                  <img src="static/img/blog-2.jpg" title="" alt="" />
                </a>
              </div>
              <div className="blog-info">
                <div className="meta">29/FEB/2020 - WEBSITE - 1 COMMENT</div>
                <h6>
                  <a href="single-blog.html">
                    Ten Mind-Blowing Reasons Why Design Is Using This Technique
                    For Exposure.
                  </a>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <a href="single-blog.html">
                  <img src="static/img/blog-3.jpg" title="" alt="" />
                </a>
              </div>
              <div className="blog-info">
                <div className="meta">29/FEB/2020 - WEBSITE - 1 COMMENT</div>
                <h6>
                  <a href="single-blog.html">
                    I Will Tell You The Truth About Design In The Next 60
                    Seconds.
                  </a>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <a href="single-blog.html">
                  <img src="static/img/blog-4.jpg" title="" alt="" />
                </a>
              </div>
              <div className="blog-info">
                <div className="meta">29/FEB/2020 - WEBSITE - 1 COMMENT</div>
                <h6>
                  <a href="single-blog.html">
                    What You Know About Design And What You Don't Know About
                    Design.
                  </a>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-12 read-more-blog text-center">
            <a className="px-btn px-btn-white" href="blog.html">
              More Blogs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
