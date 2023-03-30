import React from "react";
import './Contact.css'

const Contact = () => {
  return (
    
    <div className="contact" id="contact">

      <div className="contactChild">
        <div className="form">
          <form className="form1">
            <h3>Fill Out The Form Below</h3>
            <div>
              <input
                className="formInput"
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            <div>
              <input
                className="formInput"
                type="email"
                aria-describedby="emailHelp"
                placeholder="Enter Email-Id"
              />
            </div>
            <div>
              <textarea
                className="formInput"
                rows="5"
                placeholder="Enter Your Message Here"
              ></textarea>
            </div>
            <button className="formButton" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="contactChild">
        <div className="socials">
          <div className="numEma">
        <h4>Phone: 9989876512</h4>
        <h4>Email: iamofficial@gmail.com</h4>
        </div>
        <div className="links">
        <a href="https://www.linkedin.com/in/siddharth-bhattacharjee-99b8a224a/">
          <h1>LinkedIn</h1>
        </a>

        <a href="https://github.com/Official-sidd">
          <h1>Github</h1>
        </a>
        <a href="https://unsplash.com/@i_enigma">
          <h1>Unsplash</h1>
        </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
