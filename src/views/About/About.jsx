import "./About.css";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  function backToHome() {
    navigate("/");
  }

  function contact() {
    navigate("/contact");
  }

  return (
    <main className="about" role="main">
      <title>About Me</title>
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
      <article role="article" className="about__container">
        <h1 className="about__title">Pauline Holgersson Götasson</h1>
        <h2 className="about__undertitle">25-Year-Old Hobby Digital Artist</h2>
        <p className="about__paragraph">
          Hey there, I'm Pauline Holgersson Götasson, a 25-year-old on a digital art journey! I embarked on this creative adventure just three months ago, but my passion for art has been a constant in my life, especially in the realm of traditional art.
        </p>
        <p className="about__paragraph">
          Exploring the vast possibilities of digital art has been an exciting endeavor for me. From traditional mediums to digital canvases, I find joy in bringing my imagination to life. Whether it's creating vibrant illustrations or diving into the world of fantasy, every stroke is a step into my artistic expression.
        </p>
        <article
          className="contact__link"
          role="button"
          onClick={contact}
        >
          Feel free to send away an art commission, and I'll get back to you as soon as I can!{" "}
        </article>
        
        <p>
          Here's a <a href="src/assets/video.mp4">link to download</a> the video
        </p>
      </article>

      <section className="about__imgcontainer">
        <video className="about__video" controls width="700">
          <source src="src/assets/video.mp4" type="video/mp4" />
          <track
            kind="captions"
            src="src/assets/captions.vtt"
            srcLang="eng"
            label="English"
          />
        </video>
      </section>
    </main>
  );
}

export default About;
