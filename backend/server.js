// server.js
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const GUAC_BASE = process.env.GUAC_BASE || "http://20.24.65.164:8443";
const GUAC_USER = process.env.GUAC_USER || "guacadmin";
const GUAC_PASS = process.env.GUAC_PASS || "guacadmin";
const GUAC_DEFAULT_CONN = process.env.GUAC_DEFAULT_CONN || "Imaged";

app.post('/api/connect', async (req, res) => {
  try {
    // Get credentials from request body or use defaults from env
    const username = req.body.username || GUAC_USER;
    const password = req.body.password || GUAC_PASS;

    // Step 1: Get token
    const tokenResp = await axios.post(
      `${GUAC_BASE}/guacamole/api/tokens`,
      new URLSearchParams({ username, password }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    const token = tokenResp.data.authToken;

    // Step 2: Get connection ID for the default connection
    const connResp = await axios.get(
      `${GUAC_BASE}/guacamole/api/session/data/mysql/connections?token=${token}`
    );

    // Find the connection by name
    const connections = connResp.data;
    const connection = Object.values(connections).find(conn => conn.name === GUAC_DEFAULT_CONN);
    
    if (!connection) {
      throw new Error(`Connection "${GUAC_DEFAULT_CONN}" not found`);
    }

    // Step 3: Build direct RDP URL that opens the connection immediately
    const clientUrl = `${GUAC_BASE}/guacamole/#/client/${connection.identifier}?token=${token}`;

    res.json({ clientUrl });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Failed to connect to Guacamole", details: err.response?.data || err.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
