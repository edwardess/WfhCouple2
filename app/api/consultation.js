// pages/api/consultation.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const response = await fetch('https://officialwfhcouple.systeme.io/consultation');
    
    if (!response.ok) {
      res.status(response.status).end('Error fetching the page');
      return;
    }

    const data = await response.text();
    res.setHeader('Content-Type', 'text/html');
    res.send(data);
  } catch (error) {
    res.status(500).send('Server error');
  }
}
