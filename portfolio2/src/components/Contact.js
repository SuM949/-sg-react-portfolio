import React, { useState } from "react";
import validator from "validator";
import parse from "html-react-parser";
import $ from "jquery";

const styles = {
  formContainerStyle: {
  width: "50%",
  margin: "auto",
  },

  validationMessage: {
    color: 'red',
    fontStyle: 'oblique'
  }
};

function Contact() {
  let [validationMessage, setMessage] = useState("");
  let [buttonDisabled, setButton] = useState(true);

  function focusLost(e) {
    if (e.target.value === "") {
      setMessage("*This is a required field");
      $(e.target).css('background-color', '#ff00002e')
    }
    if (e.target.type === "email") {
      if (validator.isEmail(e.target.value)) {
        return;
      } else {
        $(e.target).css('background-color', '#ff00002e')
        setMessage("Please enter a valid email address");
      }
    }
  }

  function removeMessage(e) {
    $(e.target).css('background-color', 'white')
    setMessage("");
    if (
      $("#nameInput").val().length > 0 &&
      $("#emailInput").val().length > 0 &&
      $("#messageInput").val().length > 0 &&
      validator.isEmail($("#emailInput").val())
    ) {
      setButton(false);
    } else setButton(true);
  }

  function notImplemented(e) {
    e.preventDefault();
    setMessage(
      `Sorry, the functionality of this form is not implemented, 
      but please email me directly: sumayabile8@gmail.com
      `
    );
  }

  return (
    <section className="formContainer" style={styles.formContainerStyle}>
      <form>
        <div className="form-group">
          <label htmlFor="nameInput">Name*</label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            onBlur={focusLost}
            onChange={removeMessage}
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailInput">Email address*</label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="name@example.com"
            onBlur={focusLost}
            onChange={removeMessage}
          />
        </div>
        <div className="form-group">
          <label htmlFor="messageInput">Message*</label>
          <textarea
            onBlur={focusLost}
            onChange={removeMessage}
            className="form-control"
            id="messageInput"
            rows="3"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={buttonDisabled}
          onClick={notImplemented}
        >
          Send
        </button>
        <div style={styles.validationMessage} className="message">{validationMessage}</div>
      </form>
    </section>
  );
}

export default Contact;
