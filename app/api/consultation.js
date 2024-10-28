// pages/api/consultation.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  const response = await fetch('https://officialwfhcouple.systeme.io/consultation');
  const data = await response.text();

  res.setHeader('Content-Type', 'text/html');
  res.send(data);
}
