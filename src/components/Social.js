import React, { useState } from "react";
import { Formik, Form, Field,} from "formik";
import "../App.scss";
import facebook from "./img/icons/001-facebook.svg";
import twitter from "./img/icons/002-twitter.svg";
import linkedIn from "./img/icons/010-linkedin.svg";
import youTube from "./img/icons/008-youtube.svg";
import tcflogo from "./img/tc_logo.svg";

const mailRoute = "https://tclnodemailer.herokuapp.com/send";

const Social = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="socialDiv">
      <div className="modalButton">
        <button
          id="connectWithUs"
          className="contactButton"
          onClick={() => setModalShow(true)}
        >
          Contact Us Today
        </button>
        <div>Contact us today for more information.</div>
        {modalShow ? (
          <Formik
            initialValues={{ name: "", email: "", phone: "", message: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "An Email is Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                const sendPost = {
                  name: values.name,
                  email: values.email,
                  phone: values.phone,
                  message: values.message,
                };
                fetch(mailRoute, {
                  method: "POST",
                  body: JSON.stringify(sendPost),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }).then(window.location.reload());
                setSubmitting(false)
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <div>
                <Form onSubmit={handleSubmit} className="formikDiv">
                  <label className="fieldLabel">Name</label>
                  <Field
                    type="name"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  <label className="errorLabel">
                    {errors.name && touched.name && errors.name}
                  </label>
                  <label className="fieldLabel">Email</label>
                  <Field
                    placeholder="Your Email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  
                    {errors.email && touched.email}
                
                  <label className="fieldLabel">Phone</label>
                  <Field
                    placeholder="Phone #"
                    type="phone"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                  <label className="errorLabel">
                    {errors.phone && touched.phone}
                  </label>
                  <label className="fieldLabel">Message</label>
                  <textarea
                    placeholder="Type a message"
                    type="message"
                    name="message"
                    rows="4"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                  />
                  <label className="errorLabel">
                    {errors.message && touched.message}
                  </label>
                  <div className="submitButtonDiv">
                    <button
                      className="contactButton"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        ) : null}
      </div>
      <div className="socialWrapper">
        <div className="socialContact">
          <img className="socialLogo" src={tcflogo}></img>
          <div className="contactLinks">
            <div className="socialButton">
              <a href="/">HOME </a>
            </div>
            <div className="socialButton">
              <a onClick={() => setModalShow(true)}>CONTACT</a>
            </div>
          </div>
          <div className="socialIcons">
            <a href="https://www.facebook.com/TCHFTally/">
              <img className="socialImg" src={facebook} alt="Facebook Icon" />
            </a>
            <a href="http://twitter.com">
              <img className="socialImg" src={twitter} alt="Twitter Icon"/>
            </a>
            <a href="http://linkedin.com">
              {" "}
              <img className="socialImg" src={linkedIn} alt="LinkedIn Icon"/>
            </a>
            <a href="http://youtube.com">
              {" "}
              <img className="socialImg" src={youTube} alt="Youtube Icon"/>
            </a>
          </div>
        </div>
        <div style={{ paddingBottom: "20px" }}>
          <div className="addressList">Town Center Fitness</div>
          <div className="addressList">
            3196 Merchants Row Blvd, Tallahassee, FL, 32311
          </div>
        </div>
      </div>
    </div>
  );
};
export default Social;
