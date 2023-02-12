var express = require('express');
var router = express.Router();

const { addOneImage, storeOneImage, detailOneImage, addMultipleImages, storeMultipleImages, detailMultipleImages } = require('../controllers/productsController')

const {uploadProductImages} = require('../middlewares/upload')

/* /products */
router
  .get('/add-one-image', addOneImage)
  .post('/add-one-image', uploadProductImages.single('image'), storeOneImage)
  .get('/detail-one-image/:id', detailOneImage)

  .get('/add-multiple-images', addMultipleImages)
  .post('/add-multiple-images', uploadProductImages.array('images'), storeMultipleImages)
  .get('/detail-multiple-images/1', detailMultipleImages)

module.exports = router;
