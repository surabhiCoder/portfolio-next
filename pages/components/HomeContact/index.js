import React, { useMemo, useEffect, useState } from "react";
import biodata from "../../api/commonAPI";

const HomeContact = () => {
  const [contacts, setContacts] = useState([]);

  const getContactDets = () => {
    biodata().then((res) => {
      const contDets = [];
      contDets.push(res);
      setContacts(contDets);

      console.log(contacts);
    });
  };

  useEffect(() => {
    getContactDets();
  }, []);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <section id="contactus" className="section dark-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xl-4 m-15px-tb">
            <div className="contact-info">
              <h4>What’s your story? Get in touch</h4>
              <p>
                Always available for freelancing if the right project comes
                along, Feel free to contact me.
              </p>

              {contacts &&
                contacts.map((contact) => {
                  return (
                    <ul key={contact.id}>
                      <li className="media">
                        <i className="ti-map"></i>
                        <span className="media-body">
                          {contact.address.city}
                        </span>
                      </li>
                      <li className="media">
                        <i className="ti-email"></i>
                        <span className="media-body">
                          {contact.biography.Email}
                        </span>
                      </li>
                      <li className="media">
                        <i className="ti-mobile"></i>
                        <span className="media-body">
                          +91-{contact.biography.Phone}
                        </span>
                      </li>
                    </ul>
                  );
                })}
            </div>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="contact-form">
              <h4>Say Something</h4>
              <form id="contact-form" method="POST">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="Name"
                        id="name"
                        placeholder="Name *"
                        className="form-control"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="Email"
                        id="email"
                        placeholder="Email *"
                        className="form-control"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        name="Subject"
                        id="subject"
                        placeholder="Subject *"
                        className="form-control"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Your message *"
                        rows="5"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="send">
                      <button
                        className="px-btn px-btn-white"
                        type="button"
                        value="Send"
                      >
                        send message
                      </button>
                    </div>
                    <span
                      id="suce_message"
                      className="text-success"
                      // style="display: none"
                    >
                      Message Sent Successfully
                    </span>
                    <span
                      id="err_message"
                      className="text-danger"
                      // style="display: none"
                    >
                      Message Sending Failed
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12">
            <div className="google-map">
              <div className="embed-responsive embed-responsive-21by9">
                {/* <iframe
                  className="embed-responsive-item"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3151.840107317064!2d144.955925!3d-37.817214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1520156366883"
                  allowfullscreen=""
                ></iframe> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
