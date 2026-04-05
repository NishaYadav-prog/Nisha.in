import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import AdminDashboard from "./pages/AdminDashBoard";
import AIVirtualMouse from "./pages/AIVirtualMouse";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/ai-virtual-mouse" element={<AIVirtualMouse />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
