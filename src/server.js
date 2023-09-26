// server.js

const express = require('express');
const twilio = require('twilio');

const app = express();
const port = process.env.PORT || 3000;

const accountSid = 'ACfe2499d7565a8c9af415c5fd582634b8';
const authToken = '8cfd4604d39d5dd439a99871c1b16c37';

const client = new twilio(accountSid, authToken);

app.use(express.json());

app.post('/send-otp', (req, res) => {
  const otp = Math.floor(1000 + Math.random() * 9000);
  const to = '+919052519059'; // Replace with the recipient's phone number

  client.messages
    .create({
      body: `Your OTP is: ${otp}`,
      from: '+12564483383', // Replace with your Twilio phone number
      to: to,
    })
    .then((message) => {
      console.log(`OTP sent with message SID: ${message.sid}`);
      res.json({ success: true, message: 'OTP sent successfully' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ success: false, message: 'Failed to send OTP' });
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
