import { useState } from "react";
import { validateEmail } from "/utils/helpers";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    height: "100%",
  },
  content: {
    
  }


}
function ContactPage() {
  // Creating and setting initial values the state variables for the fields in the form
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {

    e.preventDefault();


    if (!validateEmail(email) || !userName) {
      setErrorMessage(" No Email entered ");
      if (!userName || !message) {
        setErrorMessage(" No username entered ");
        if (!message) {

          setErrorMessage(" No Message entered ");
          return;
        }
      }
    }

    setUserName("");
    setMessage("");
    setEmail("");

  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h3> Contact Me </h3>
        <form className="form" onSubmit={handleFormSubmit}>
          <div className="container text-left">
            Name:
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              placeholder="Enter your name here"
            />
            <br/>
            Email:
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="Enter your email here"
            />
            <br/>
            Message:
            <input
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              placeholder="Enter a short message here"
            />
          </div>
          <br/>
          <button type="submit" id="btnResume">
            Send Message
          </button>

          {errorMessage && (
            <div>
              <h4 className="error-text">{errorMessage}</h4>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactPage;