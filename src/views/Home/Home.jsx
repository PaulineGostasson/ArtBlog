// Home.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  function handleAboutMeClick() {
    navigate("/about");
  }

  function handleBlogClick() {
    navigate("/blog");
  }

  function handleContactClick() {
    navigate("/contact");
  }

  useEffect(() => {
    // Add the 'home' class to the body element when the component mounts
    document.body.classList.add("home");

    // Remove the 'home' class from the body element when the component unmounts
    return () => {
      document.body.classList.remove("home");
    };
  }, []);

  return (
    <main className="main" role="main">
      <title>Artist Pauline</title>
      <section className="main__background">
        <section className="main__section">
          <h1 className="main__title">Artist Pauline</h1>
        </section>
        <section className="flex">
          <section className="links" role="navigation">
            <button
              className="button"
              aria-label="about me"
              onClick={handleAboutMeClick}
            >
              ABOUT ME
            </button>
            <button
              className="button"
              aria-label="blog"
              onClick={handleBlogClick}
            >
              BLOG
            </button>
            <button
              className="button"
              aria-label="contact"
              onClick={handleContactClick}
            >
              CONTACT
            </button>
          </section>
        </section>
      </section>
    </main>
  );
}

export default Home;
