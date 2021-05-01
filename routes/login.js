const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');

router.post('/login', [
  check('username')
    .notEmpty()
    .withMessage('username should not be null'),
  check('password')
    .notEmpty()
    .withMessage('price should not be null')
  ], async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    res.status(400).json({ msg: errors.array()[0].msg });
  }
  try {
    const { username, password } = req.body;
    if(username === 'admin' && password === 'qwerty') res.status(200).send({ token: '12345' });
    else res.status(401).send({ msg: 'Unauthorized'});
  } catch (e) {
    console.log(e);
    res.status(500).send({ msg: 'DB Connection Error' });
  }
})

module.exports = router;