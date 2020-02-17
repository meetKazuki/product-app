const { Router } = require('express');
const ProductController = require('../controllers/product');

const router = Router();

router.post(
  '/create',
  ProductController.createProduct,
);

router.get(
  '/test',
  ProductController.test,
);

router.get(
  '/:id',
  ProductController.getProduct,
);

router.put(
  '/:id',
  ProductController.updateProduct,
);

module.exports = router;
