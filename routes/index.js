const express = require('express')
const router = express.Router()


// @desc Landing Page 
// @route Get /
router.get('/', (req, res) => {
  res.render('index.hbs')
})



module.exports = router