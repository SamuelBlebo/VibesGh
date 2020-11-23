const express = require('express')
const router = express.Router()


// @desc Landing Page 
// @route Get /
router.get('/', (req, res) => {
  res.render('index')
})

// @desc Musics
// @route Get /music
router.get('/music', (req, res) => {
  res.render('music')
})

// @desc Albums
// @route Get /music
router.get('/albums', (req, res) => {
  res.render('albums')
})

// @desc Videos
// @route Get /videos
router.get('/videos', (req, res) => {
  res.render('videos')
})

// @desc Contact
// @route Get /contact
router.get('/contact', (req, res) => {
  res.render('contact')
})

// @desc Contact
// @route Get /contact
router.get('/download', (req, res) => {
  res.render('download')
})





module.exports = router