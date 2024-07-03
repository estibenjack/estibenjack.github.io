import React from "react";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-container">
          <div className="about-img-container">
            <img
              src="/public/images/about-pic.jpg"
              alt="steven jackson"
              className="about-img"
            />
          </div>
          <div className="about-text">
            <h2 className="about-title">ABOUT ME</h2>
            <p className="about-desc">
              Hi, I'm Steven, a self-taught frontend developer based in Belfast,
              Ireland.
              <br />
              <br />
              With a degree in Spanish and French Studies, I've always had a
              passion for languages, which extends beyond the spoken word to the
              language of code.
              <br />
              <br />
              In addition to my fluency in Spanish, French, and Portuguese, I
              have developed proficiency in HTML, CSS, and JavaScript - and
              React is my focus at the moment. My journey into the world of web
              development was driven by a desire to create visually appealing
              and user-friendly interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
