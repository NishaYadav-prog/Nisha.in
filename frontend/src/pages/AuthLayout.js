import profile from "../assets/nisha.jpeg";

function AuthLayout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        height: "80vh",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "100px",
      }}
    >
      {/* LEFT SIDE (FIXED) */}

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
          applications using React, Node.js, MongoDB and Express.
        </p>
      </div>

      {/* RIGHT SIDE FORM */}

      <div
        style={{
          width: "320px",
          padding: "30px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          background: "#fff",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
