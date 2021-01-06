const ApiController = require('../Controller/ApiController')
const { upload } = require('../helpers/grid')
const { verifyAccessToken } = require('../helpers/jwt')

const express = require("express")
const router = express.Router()

router.get('/image/:filename', ApiController.images);

router.post('/upload', verifyAccessToken, upload.single('file'), ApiController.upload)

router.get('/', ApiController.main)

router.delete('/remove', verifyAccessToken, ApiController.delete)

module.exports = router