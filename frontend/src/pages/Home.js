import { Link } from "react-router-dom";
import profile from "../assets/nisha.jpeg";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "120px 80px",
      }}
    >
      {/* LEFT SIDE */}
      <div style={{ width: "50%" }}>
        <img
          src={profile}
          alt="Nisha"
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "20px",
          }}
        />

        <h1>Nisha Yadav</h1>

        <p style={{ maxWidth: "400px" }}>
          I am a MERN Stack Developer passionate about building modern web
          applications. I have experience in React, Node.js, MongoDB and
          Express. I also enjoy working with AI/ML based projects.
        </p>
      </div>

      {/* RIGHT SIDE LOGIN BOX */}
      <div
        style={{
          width: "300px",
          padding: "30px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          background: "#fff",
        }}
      >
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "10px",
            background: "#111",
            color: "white",
            border: "none",
          }}
        >
          Login
        </button>

        <p style={{ marginTop: "10px" }}>
          Don't have an account?
          <Link to="/signup"> Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
