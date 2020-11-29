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

// @desc download
// @route Get /download
router.get('/download', (req, res) => {
  res.render('download')
})

// @desc download1
// @route Get /download1
router.get('/download1', (req, res) => {
  res.render('download1')
})


// @desc download2
// @route Get /download2
router.get('/download2', (req, res) => {
  res.render('download2')
})

// @desc download3
// @route Get /download3
router.get('/download3', (req, res) => {
  res.render('download3')
})

// @desc download4
// @route Get /download4
router.get('/download4', (req, res) => {
  res.render('download4')
})

// @desc download5
// @route Get /download5
router.get('/download5', (req, res) => {
  res.render('download5')
})

// @desc download6
// @route Get /download6
router.get('/download6', (req, res) => {
  res.render('download6')
})

// @desc download7
// @route Get /download7
router.get('/download7', (req, res) => {
  res.render('download7')
})

// @desc download8
// @route Get /download8
router.get('/download8', (req, res) => {
  res.render('download8')
})


// @desc download9
// @route Get /download9   
router.get('/download9', (req, res) => {
  res.render('download9')
})

// @desc download10
// @route Get /download10
router.get('/download10', (req, res) => {
  res.render('download10')
})

// @desc download11
// @route Get /download11
router.get('/download11', (req, res) => {
  res.render('download11')
})

// @desc download12
// @route Get /download12 
router.get('/download12', (req, res) => {
  res.render('download12')
})

// @desc download1
// @route Get /download1
router.get('/download13', (req, res) => {
  res.render('download13')
})

// @desc download1
// @route Get /download1
router.get('/download14', (req, res) => {
  res.render('download14')
})

// @desc download1
// @route Get /download1
router.get('/download15', (req, res) => {
  res.render('download15')
})

// @desc download1
// @route Get /download1
router.get('/download16', (req, res) => {
  res.render('download16')
})

// @desc download1
// @route Get /download1
router.get('/download17', (req, res) => {
  res.render('download17')
})

// @desc download1
// @route Get /download1
router.get('/download18', (req, res) => {
  res.render('download18')
})

// @desc download1
// @route Get /download1
router.get('/download19', (req, res) => {
  res.render('download19')
})

// @desc download1
// @route Get /download1
router.get('/download20', (req, res) => {
  res.render('download20')
})

// @desc download1
// @route Get /download1
router.get('/download21', (req, res) => {
  res.render('download21')
})





module.exports = router