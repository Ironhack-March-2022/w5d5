const router = require("express").Router();
const Movie = require('../models/Movie')
const uploader = require('../config/cloudinary')

/* GET home page */
router.get("/", (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('index', { movies })
    })
    .catch(err => {
      next(err)
    })
});

router.get('/movie/add', (req, res, next) => {
  res.render('movie-add')
});

router.post('/movies', uploader.single('poster'), (req, res, next) => {
  const { title, description } = req.body
  console.log(req.file)
  const imgName = req.file.originalname
  const imgPath = req.file.path
  Movie.create({ title, description, imgName, imgPath })
    .then(movie => {
      console.log(movie)
      res.redirect('/')
    })
    .catch(err => next(err))
});


module.exports = router;
