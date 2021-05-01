const express = require('express');

// middleware
const cors = require('cors');

// routes
const jobsRoutes = require('./routes/jobs');
const loginRoutes = require('./routes/login');
// set up express app
const app = express();

// Cors
app.use(cors());

// middleware for parsing request body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// import routes
app.use(jobsRoutes);
app.use(loginRoutes);

// listen request on specific port (from .env and local = 9000)
const portNumber =process.env.PORT || 8000;
app.listen(portNumber, () => {
  console.log(`Server is Running on Port ${portNumber}`);
});
