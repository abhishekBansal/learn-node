const {getPosts, createPost} = require('../controllers/post')
const express = require ('express')
const validator = require('../validator')

const router = express.Router()

router.get('/', getPosts)
router.post('/post', validator.createPostValidator, createPost)

module.exports = router