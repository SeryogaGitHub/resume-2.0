import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from '../services/products.service.js';

export const getProductsController = async (req, res) => {
  try {
    const products = await getProducts();

    res.json(products);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Не вдалося отримати товари'
    });
  }
};

export const getProductController = async (req, res) => {
  try {
    const product = await getProductById(
        req.params.id
    );

    if (!product) {
      return res.status(404).json({
        message: 'Товар не знайдено'
      });
    }

    res.json(product);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Не вдалося отримати товар'
    });
  }
};

export const createProductController = async (req, res) => {
  try {
    const { name, price } = req.body;

    if (!name || price === undefined) {
      return res.status(400).json({
        message: 'Потрібні ім\'я та ціна'
      });
    }

    const product = await createProduct(
        name,
        price
    );

    res.status(201).json(product);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Не вдалося створити продукт'
    });
  }
};

export const updateProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;

    if (!name || price === undefined) {
      return res.status(400).json({
        message: 'Потрібні ім\'я та ціна'
      });
    }

    const product = await updateProduct(
        id,
        name,
        price
    );

    if (!product) {
      return res.status(404).json({
        message: 'Товар не знайдено'
      });
    }

    res.json(product);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Не вдалося оновити продукт'
    });
  }
};

export const deleteProductController = async (req, res) => {
  try {
    const deleted = await deleteProduct(
        req.params.id
    );

    if (!deleted) {
      return res.status(404).json({
        message: 'Товар не знайдено'
      });
    }

    res.json({
      message: 'Продукт видалено'
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Не вдалося видалити товар'
    });
  }
};