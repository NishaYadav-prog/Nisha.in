import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        width: "100%",
        background: "#111",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 40px",
        zIndex: "1000",
      }}
    >
      <h2>Nisha Portfolio</h2>

      <div>
        <Link style={{ color: "white", marginRight: "20px" }} to="/">
          Home
        </Link>
        <Link style={{ color: "white", marginRight: "20px" }} to="/login">
          Login
        </Link>
        <Link style={{ color: "white" }} to="/signup">
          Signup
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
