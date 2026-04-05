import { useEffect, useState } from "react";
import axios from "axios";
import profile from "../assets/nisha.jpeg";
import { useNavigate } from "react-router-dom";

function Portfolio() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    visitors: 0,
    projects: 0,
    resume: 0,
    logins: 0,
  });

  useEffect(() => {
    const loadStats = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/analytics/stats",
        );

        setStats(res.data);
      } catch (err) {
        console.log("analytics error");
      }
    };

    axios.post("http://localhost:5000/api/analytics/visit", {
      page: "portfolio",
      browser: navigator.userAgent,
    });

    loadStats();
  }, []);

  const projectClick = async (name) => {
    try {
      await axios.post("http://localhost:5000/api/analytics/project", {
        project: name,
      });
    } catch (err) {
      console.log("tracking error");
    }
  };

  const resumeDownload = async () => {
    try {
      await axios.post("http://localhost:5000/api/analytics/resume");
    } catch (err) {
      console.log("tracking error");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "120px",
        gap: "80px",
      }}
    >
      {/* LEFT SIDE */}

      <div style={{ width: "300px", textAlign: "center" }}>
        <img
          src={profile}
          alt="Nisha"
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />

        <h2>Nisha Yadav</h2>

        <p>
          MERN Stack Developer passionate about building modern web applications
          using React, Node.js and MongoDB.
        </p>

        {/* ANALYTICS */}

        <div style={{ marginTop: "30px" }}>
          <div style={cardStyle}>
            <h4>Visitors</h4>
            <p>{stats.visitors}</p>
          </div>

          <div style={cardStyle}>
            <h4>Project Clicks</h4>
            <p>{stats.projects}</p>
          </div>

          <div style={cardStyle}>
            <h4>Resume Downloads</h4>
            <p>{stats.resume}</p>
          </div>

          <div style={cardStyle}>
            <h4>Login History</h4>
            <p>{stats.logins}</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}

      <div style={{ flex: 1 }}>
        <h2>Projects</h2>

        <div style={gridStyle}>
          {/* AI VIRTUAL MOUSE */}

          <div
            style={hoverCard}
            onClick={() => {
              projectClick("AI Virtual Mouse");
              navigate("/ai-virtual-mouse");
            }}
          >
            <h3>AI Virtual Mouse</h3>

            <p>
              Gesture controlled mouse system built using OpenCV and MediaPipe.
            </p>
          </div>

          {/* AI WARDROBE */}

          <div
            style={hoverCard}
            onClick={() => {
              projectClick("AI Wardrobe");
              navigate("/ai-wardrobe");
            }}
          >
            <h3>AI Wardrobe</h3>

            <p>AI based wardrobe recommendation system using ML.</p>
          </div>

          {/* TRAVEL APP */}

          <div
            style={hoverCard}
            onClick={() => {
              projectClick("Travel Booking App");
              navigate("/travel-app");
            }}
          >
            <h3>Travel Booking App</h3>

            <p>Full stack MERN based travel booking platform.</p>
          </div>
        </div>

        {/* EDUCATION */}

        <h2 style={{ marginTop: "40px" }}>Education</h2>

        <div style={hoverCard}>
          <h3>B.Tech Computer Science</h3>

          <p>Pranveer Singh Institute of Technology</p>

          <p>CGPA: 7.4</p>
        </div>

        {/* SKILLS */}

        <h2 style={{ marginTop: "40px" }}>Technical Skills</h2>

        <div style={skillGrid}>
          <span>Java</span>
          <span>Python</span>
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Express</span>
          <span>Docker</span>
        </div>

        {/* RESUME */}

        <h2 style={{ marginTop: "40px" }}>Resume</h2>

        <a
          href="/resume.pdf"
          download
          onClick={resumeDownload}
          style={downloadBtn}
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

const cardStyle = {
  border: "1px solid #ddd",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "8px",
  background: "#f5f5f5",
};

const hoverCard = {
  border: "1px solid #ddd",
  padding: "20px",
  borderRadius: "10px",
  background: "#fff",
  cursor: "pointer",
  transition: "0.3s",
  marginBottom: "20px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
  gap: "20px",
};

const skillGrid = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
};

const downloadBtn = {
  display: "inline-block",
  padding: "10px 20px",
  background: "#111",
  color: "#fff",
  borderRadius: "6px",
  textDecoration: "none",
};

export default Portfolio;
