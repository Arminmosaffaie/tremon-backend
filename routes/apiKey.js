const express = require('express');
const router = express.Router();

router.get('/get-headers', async (req, res) => {
  try {
    const headers = {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'OpenAI-Project': process.env.OPENAI_PROJECT_ID
    };

    res.json({ headers });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Serverfel - kunde inte hämta headers' });
  }
});

module.exports = router;