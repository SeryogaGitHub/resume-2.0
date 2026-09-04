import express from 'express';

import {
  getProductsController,
  getProductController,
  createProductController,
  updateProductController,
  deleteProductController
} from '@scss/controllers/products.controller.js';

const router = express.Router();

router.get('/', getProductsController);

router.get('/:id', getProductController);

router.post('/', createProductController);

router.put('/:id', updateProductController);

router.delete('/:id', deleteProductController);

export default router;