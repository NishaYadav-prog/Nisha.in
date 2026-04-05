const router = require("express").Router();
const Analytics = require("../models/Analytics");

// VISIT TRACK
router.post("/visit", async (req, res) => {
  try {
    await Analytics.create({
      type: "visit",
      data: req.body,
    });

    res.json({ msg: "visit tracked" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "visit error" });
  }
});

// COPY EVENT
router.post("/copy", async (req, res) => {
  try {
    await Analytics.create({
      type: "copy",
      data: req.body,
    });

    res.json({ msg: "copy tracked" });
  } catch (err) {
    res.status(500).json({ msg: "copy error" });
  }
});

// PROJECT CLICK
router.post("/project", async (req, res) => {
  try {
    await Analytics.create({
      type: "project_click",
      data: req.body,
    });

    res.json({ msg: "project tracked" });
  } catch (err) {
    res.status(500).json({ msg: "project error" });
  }
});

// RESUME DOWNLOAD
router.post("/resume", async (req, res) => {
  try {
    await Analytics.create({
      type: "resume_download",
    });

    res.json({ msg: "resume tracked" });
  } catch (err) {
    res.status(500).json({ msg: "resume error" });
  }
});

// LOGIN TRACK
router.post("/login", async (req, res) => {
  try {
    await Analytics.create({
      type: "login",
      data: req.body,
    });

    res.json({ msg: "login tracked" });
  } catch (err) {
    res.status(500).json({ msg: "login error" });
  }
});

// STATS API
router.get("/stats", async (req, res) => {
  try {
    const visitors = await Analytics.countDocuments({ type: "visit" });

    const projects = await Analytics.countDocuments({ type: "project_click" });

    const resume = await Analytics.countDocuments({ type: "resume_download" });

    const logins = await Analytics.countDocuments({ type: "login" });

    res.json({
      visitors,
      projects,
      resume,
      logins,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to load stats" });
  }
});

module.exports = router;
