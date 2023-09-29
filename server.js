const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static('public'));

// Define routes
app.get('/api/whoami', (req, res) => {
  const ipAddress = req.ip;
  const language = req.get('accept-language');
  const software = req.get('user-agent');

  const responseObject = {
    ipaddress: ipAddress,
    language: language,
    software: software,
  };

  res.json(responseObject);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
