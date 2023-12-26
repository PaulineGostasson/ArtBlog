import React from "react";
import { useNavigate } from "react-router-dom";
import "./Blog.css"; 
import roadImage from "../../assets/road.jpg"

function MyspaceBlog() {
  const navigate = useNavigate();

  function backToHome() {
    navigate("/");
  }

  return (
    <div className="blog">
      <title> Blog</title>
      <header className="breadcrumbs" role="heading" aria-level="1">
        <article className="breadcrumbs__back" onClick={backToHome}>
        {"HOME "}
  </article>{" "}
  {"> Blog"}
      </header>
      <main className="blog__main" role="main">
        <article className="blog__post">
          <h2 className="blog__title">My First Blog Post</h2>
          <p className="blog__date">Published on December 1, 2023</p>
          <p className="blog__content">
            Hey everyone! This is my first blog post on my awesome Myspace
            blog. I'm so excited to share my thoughts and experiences with you
            all. Stay tuned for more amazing content!
          </p>
        </article>
        <article className="blog__post">
          <h2 className="blog__title">A Day in the Life</h2>
          <p className="blog__date">Published on December 3, 2023</p>
          <p className="blog__content">
            Today was such an interesting day! I went for a walk, took some
            photos for references to my digital art. Life is good!
          </p>
          <img src={roadImage} alt="Image of a road" />
        </article>
        
      </main>
    </div>
  );
}

export default MyspaceBlog;
