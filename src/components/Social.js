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
    setModalShow(true);
  };

  return (
    <div className="socialDiv">
      <div className="modalButton">
        <button
          id="connectWithUs"
          className="contactButton"
          onClick={() => handleShowContact}
        >
          Contact Us Today
        </button>
        <div>Contact us today for more information.</div>

        <Formik
          initialValues={{ name: "", email: "", phone: "", message: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
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
            <form onSubmit={handleSubmit} className="formikDiv">
              <label>Name</label>
              <input
                type="name"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
              <label>Email</label>
              <input
              placeholder="Your Email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <label>Phone</label>
              <input
               placeholder="Phone #"
                type="phone"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              {errors.phone && touched.phone && errors.phone}
              <label>Message</label>
              <input
              placeholder="Type a message"
                type="message"
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              {errors.message && touched.message && errors.message}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
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
