const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// Get All Jobs
router.get('/jobs', (req, res) => {
  const { description, location, full_time } = req.query;
  let desc;
  let loc;
  let anyQuery = false;
  let url = `https://jobs.github.com/positions.json?`;

  if(description){
    desc = description.replace(' ', '+').trim();
    url += `description=${desc}`;
    anyQuery = true;
  }
  if(location){
    if(anyQuery) url += '&';
    loc = location.replace(' ', '+').trim();
    url += `location=${loc}`;
    anyQuery = true;
  }
  if(full_time){
    if(anyQuery) url += '&';
    url += 'full_time=on'
  }
  try {
    fetch(url)
    .then(res => res.json())
    .then(json => {
      res.status(200).send(json);
    })
  } catch(e) {
    console.log(e);
    res.status(500).send({ msg: 'DB Connection Error' });
  }
})

// Get job by ID
router.get('/jobs/:id', async (req, res) => {
  const url = `https://jobs.github.com/positions/${req.params.id}.json?`

  try {
    fetch(url)
    .then(res => res.json())
    .then(json => {
      res.status(200).send(json);
    })
  } catch(e) {
    console.log(e);
    res.status(500).send({ msg: 'DB Connection Error' });
  }
})

module.exports = router;