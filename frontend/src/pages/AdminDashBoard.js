import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [stats, setStats] = useState({
    visitors: 0,
    projects: 0,
    resume: 0,
    logins: 0,
  });

  useEffect(() => {
    const loadStats = async () => {
      const res = await axios.get("http://localhost:5000/api/analytics/stats");

      setStats(res.data);
    };

    loadStats();
  }, []);

  return (
    <div style={{ padding: "120px", textAlign: "center" }}>
      <h1>Portfolio Analytics Dashboard</h1>

      <div style={{ marginTop: "40px" }}>
        <h2>Total Visitors</h2>
        <p>{stats.visitors}</p>

        <h2>Project Clicks</h2>
        <p>{stats.projects}</p>

        <h2>Resume Downloads</h2>
        <p>{stats.resume}</p>

        <h2>Login History</h2>
        <p>{stats.logins}</p>
      </div>
    </div>
  );
}

export default AdminDashboard;
