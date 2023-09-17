import { useRef } from "react";
import React from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gqe7edd",
        "template_7czh3ui",
        form.current,
        "jTudNqaq1bMnsa6zz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#abf1ff94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          ></input>
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          ></input>
          <textarea
            name="message"
            className="user"
            placeholder="message"
          ></textarea>
          <input type="submit" value="send" className="button"></input>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
