// Contact.js

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [artDescription, setArtDescription] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [artStyle, setArtStyle] = useState("");
  const [showWarningPhone, setShowWarningPhone] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem("contact_name");
    const storedPhone = localStorage.getItem("contact_phone");
    const storedEmail = localStorage.getItem("contact_email");
    const storedArtDescription = localStorage.getItem("contact_art_description");

    if (storedName) setName(storedName);
    if (storedPhone) setPhone(storedPhone);
    if (storedEmail) setEmail(storedEmail);
    if (storedArtDescription) setArtDescription(storedArtDescription);

    const handleBeforeUnload = (event) => {
      if (name || phone || email || artDescription) {
        const message =
          "Are you sure you want to leave? Your changes may not be saved.";
        event.returnValue = message;
        return message;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [name, phone, email, artDescription]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const regex = /^[0-9\b]+$/;

    if (name === "phone") {
      if (value === "" || regex.test(value)) {
        setPhone(value);
        setShowWarningPhone(false);
      } else {
        setShowWarningPhone(true);
      }
    } else if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "artDescription") {
      setArtDescription(value);
    } else if (name === "priceRange") {
      setPriceRange(value);
    } else if (name === "artStyle") {
      setArtStyle(value);
    }

    localStorage.setItem(`contact_${name}`, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.trim() !== "" &&
      phone.trim() !== "" &&
      email.trim() !== "" &&
      artDescription.trim() !== "" &&
      priceRange !== "" &&
      artStyle !== ""
    ) {
      console.log("Form submitted:", {
        name,
        phone,
        email,
        artDescription,
        priceRange,
        artStyle,
      });
      setShowWarning(false);
      setSubmitted(true);

      localStorage.removeItem("contact_name");
      localStorage.removeItem("contact_phone");
      localStorage.removeItem("contact_email");
      localStorage.removeItem("contact_art_description");
    } else {
      setShowWarning(true);
      console.log("Please fill in all fields.");
    }
  };

  function backToHome() {
    navigate("/");
  }

  return (
    <main className="contact__main" role="main">
      <title>Contact</title>
      <section className="breadcrumbs">
        <article
          className="breadcrumbs__back"
          onClick={backToHome}
          role="button"
        >
          {"HOME "}
        </article>{" "}
        {"> About Me"}
      </section>
      {submitted && (
        <p className="message__submit">
          Thank you for your message! I'll get back to you as soon as possible!
        </p>
      )}
      {showWarning && (
        <p className="message__fill">
          Please fill in all fields in the form, including price range and art
          style!
        </p>
      )}
      <form
        className="contact__inputs"
        role="form"
        aria-label="Contact information"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          className="contact__input"
          type="text"
          id="name"
          name="name"
          aria-label="Enter your name here"
          placeholder="Your name"
          value={name}
          onChange={handleChange}
        />

        <label htmlFor="phone">Phone</label>
        <input
          className="contact__input"
          type="text"
          id="phone"
          name="phone"
          aria-label="Enter your phone number here"
          placeholder="Phone"
          value={phone}
          onChange={handleChange}
        />
        {showWarningPhone && (
          <p className="message-phone">Please enter numbers in the field</p>
        )}

        <label htmlFor="email">Email</label>
        <input
          className="contact__input"
          type="text"
          id="email"
          name="email"
          aria-label="Enter your email here"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />

        <label htmlFor="artDescription">Art Description</label>
        <textarea
          className="contact__textarea"
          id="artDescription"
          name="artDescription"
          placeholder="Describe the art you'd like me to create for you"
          aria-label="Describe your art here"
          value={artDescription}
          onChange={handleChange}
        />
<div className="dropdown-container">
  <label htmlFor="priceRange">Price Range</label>
  <select
    className="contact__select"
    id="priceRange"
    name="priceRange"
    aria-label="Select price range"
    value={priceRange}
    onChange={(e) => handleChange(e)}
  >
    <option value="" disabled>
      Select
    </option>
    <option value="$">Low ($)</option>
    <option value="$$">Medium ($$)</option>
    <option value="$$$">High ($$$)</option>
    <option value="$$$$">Very High ($$$$)</option>
  </select>
</div>

<div className="dropdown-container">
  <label htmlFor="artStyle">Art Style</label>
  <select
    className="contact__select"
    id="artStyle"
    name="artStyle"
    aria-label="Select art style"
    value={artStyle}
    onChange={(e) => handleChange(e)}
  >
    <option value="" disabled>
      Select
    </option>
    <option value="Chibi">Chibi</option>
    <option value="Regular Art">Regular Art</option>
    <option value="Full Body Portrait">Full Body Portrait</option>
    <option value="Other">Other</option>
  </select>
</div>

    <input
      className="contact__submit"
      aria-label="Submit message"
      type="submit"
      value="Submit"
    />
  </form>
</main>
  );
}

export default Contact;
