import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "../App.scss";
import facebook from "./img/icons/001-facebook.svg"
import twitter from "./img/icons/002-twitter.svg"
import linkedIn from "./img/icons/010-linkedin.svg"
import youTube from "./img/icons/008-youtube.svg"

function ModalForContact(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Connect with us Today.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalDiv">
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Name" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="email@example.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="phone" placeholder="555-555-5555" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="contactButton" onClick={props.onHide}>Send Info</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Social = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="socialDiv">
      <div className="modalButton">
        <button id="connectWithUs" className="contactButton" onClick={() => setModalShow(true)}>
          Contact Us Today
        </button>
        <div>Contact us today for more information.</div>
        <ModalForContact show={modalShow} onHide={() => setModalShow(false)} />
      </div>
      <div className="socialWrapper">
        <div className="socialContact">
          {/* <img
            className="socialLogo"
            src={require("./img/svg/imc-logo.svg")}
          ></img> */}
          <div className="contactLinks">
            <div className="socialButton">
              <a href="/">HOME </a>
            </div>
            <div className="socialButton">
              <a onClick={() => setModalShow(true)}>CONTACT</a>
            </div>
          </div>
          <div className="socialIcons">
            <a href="http://facebook.com">
              <img
                className="socialImg"
                src={facebook}
              />
            </a>
            <a href="http://facebook.com">
              <img
                className="socialImg"
                src={twitter}
              />
            </a>
            <a href="http://facebook.com">
              {" "}
              <img
                className="socialImg"
                src={linkedIn}
              />
            </a>
            <a href="http://facebook.com">
              {" "}
              <img
                className="socialImg"
                src={youTube}
              />
            </a>
          </div>
        </div>
        <div style={{ paddingBottom: "20px" }}>
          <div className="addressList">Town Center Fitness</div>
          <div className="addressList">
          3196 Merchants Row Blvd, Tallahassee, FL, 32311 || Email: info@cospt.com{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Social;
