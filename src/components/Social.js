import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Formik, Form, Field, setNestedObjectValues } from "formik";
import * as Yup from "yup";
import "../App.scss";
import facebook from "./img/icons/001-facebook.svg";
import twitter from "./img/icons/002-twitter.svg";
import linkedIn from "./img/icons/010-linkedin.svg";
import youTube from "./img/icons/008-youtube.svg";
import tcflogo from "./img/TCF_CLEAN.svg";

const Social = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const handleShowContact = () => {
    console.log("election Jesus");
    setModalShow(true);
  };

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
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
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
            <form onSubmit={handleSubmit} className="formikDiv">
              <label className="fieldLabel">Name</label>
              <input
                type="name"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <label className="errorLabel">{errors.message && touched.message && errors.message}</label>
              <label className="fieldLabel">Email</label>
              <input
                placeholder="Your Email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <label className="errorLabel">{errors.message && touched.message && errors.message}</label>
              <label className="fieldLabel">Phone</label>
              <input
                placeholder="Phone #"
                type="phone"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              <label className="errorLabel">{errors.message && touched.message && errors.message}</label>
              <label className="fieldLabel">Message</label>
              <input
                placeholder="Type a message"
                type="message"
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              <label className="errorLabel">{errors.message && touched.message && errors.message}</label>
              <div className="submitButtonDiv">
                <button
                  className="contactButton"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </form>
            </div>
          )}
        </Formik> ): null} 
      </div>
      <div className="socialWrapper">
        <div className="socialContact">
          <img className="socialLogo" src={tcflogo}></img>
          <div className="contactLinks">
            <div className="socialButton">
              <a href="/">HOME </a>
            </div>
            <div className="socialButton">
              <a>CONTACT</a>
            </div>
          </div>
          <div className="socialIcons">
            <a href="http://facebook.com">
              <img className="socialImg" src={facebook} />
            </a>
            <a href="http://facebook.com">
              <img className="socialImg" src={twitter} />
            </a>
            <a href="http://facebook.com">
              {" "}
              <img className="socialImg" src={linkedIn} />
            </a>
            <a href="http://facebook.com">
              {" "}
              <img className="socialImg" src={youTube} />
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
