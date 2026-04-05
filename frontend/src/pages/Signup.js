import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const sendOtp = async () => {
    if (!emailRegex.test(email)) {
      alert("Invalid email format");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/auth/send-otp", {
        email,
      });

      alert("OTP sent to your email");

      setOtpSent(true);
    } catch (err) {
      alert("Failed to send OTP");
    }
  };

  const verifyOtp = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/verify-otp", {
        name,
        email,
        password,
        otp,
      });

      alert("Registration successful");
    } catch (err) {
      alert("OTP verification failed");
    }
  };

  return (
    <AuthLayout>
      <h2>Signup</h2>

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      {!otpSent && (
        <button
          onClick={sendOtp}
          style={{
            width: "100%",
            padding: "10px",
            background: "#111",
            color: "white",
            border: "none",
          }}
        >
          Send OTP
        </button>
      )}

      {otpSent && (
        <>
          <input
            placeholder="Enter OTP"
            onChange={(e) => setOtp(e.target.value)}
            style={{ width: "100%", padding: "10px", marginTop: "10px" }}
          />

          <button
            onClick={verifyOtp}
            style={{
              width: "100%",
              padding: "10px",
              background: "#111",
              color: "white",
              border: "none",
              marginTop: "10px",
            }}
          >
            Verify OTP
          </button>
        </>
      )}

      <p style={{ marginTop: "15px" }}>
        Already have an account?
        <Link to="/login"> Login</Link>
      </p>
    </AuthLayout>
  );
}

export default Signup;
