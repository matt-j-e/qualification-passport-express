const express = require('express');
const workerRouter = require("./routes/worker");
const qualificationRouter = require("./routes/qualification");
const awardRouter = require("./routes/award");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use(express.json());
app.use('/workers', workerRouter);
app.use('/qualifications', qualificationRouter);
app.use('/awards', awardRouter);

module.exports = app;
