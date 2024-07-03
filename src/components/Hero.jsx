import React from "react";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-container">
          <div className="hero-text">
            {/* <h1 className="hero-title">
              Hi, I'm <span className="name">Steven Jackson</span> 👋🏻
            </h1>
            <p className="hero-desc">
              A passionate Frontend Developer based in Belfast, Ireland. 📍
            </p> */}
            <p className="hero-hi">Hi there! I'm</p>
            <h2 className="hero-name">Steven Jackson</h2>
            <p className="hero-job">Frontend Developer</p>
            <div className="typing-container"></div>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/steven-jackson-62b795193/"
                target="_blank"
                className="social-icon"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/estibenjack"
                target="_blank"
                className="social-icon"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="hero-img">
            <img
              src="/public/images/hero-pic.png"
              alt="Image of Steven"
              className="profile-pic"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
