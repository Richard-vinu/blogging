const express = require('express')

const router = express.Router()
const {createAuthor,loginAuthor}= require('../controller/authorController.js')
const {createblog,getBlogByQuery}= require("../controller/blogcontroller")


router.post('/authors',createAuthor)
router.post("/login",loginAuthor)
router.post('/createblog',createblog)
router.get('/blogs',getBlogByQuery)
module.exports = router