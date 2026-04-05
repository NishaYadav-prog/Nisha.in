// import { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import AuthLayout from "./AuthLayout";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const login = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", {
//         email,
//         password,
//       });

//       localStorage.setItem("token", res.data.token);

//       navigate("/portfolio");
//     } catch (err) {
//       console.log(err);
//       alert("Invalid email or password");
//     }
//   };

//   return (
//     <AuthLayout>
//       <h2>Login</h2>

//       <input
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//         style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//         style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
//       />

//       <button
//         onClick={login}
//         style={{
//           width: "100%",
//           padding: "10px",
//           background: "#111",
//           color: "white",
//           border: "none",
//           cursor: "pointer",
//         }}
//       >
//         Login
//       </button>

//       <p style={{ marginTop: "15px" }}>
//         Don't have an account?
//         <Link to="/signup"> Signup</Link>
//       </p>
//     </AuthLayout>
//   );
// }

// export default Login;

import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      await axios.post("http://localhost:5000/api/analytics/login", {
        email,
      });

      navigate("/portfolio");
    } catch (err) {
      alert("Invalid email or password");
    }
  };

  return (
    <AuthLayout>
      <h2>Login</h2>

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={login}>Login</button>

      <p>
        Don't have an account?
        <Link to="/signup"> Signup</Link>
      </p>
    </AuthLayout>
  );
}

export default Login;
