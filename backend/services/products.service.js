import db from '../db/database.js';

export const getProducts = async () => {
  const [rows] = await db.query(
      'SELECT * FROM products'
  );

  return rows;
};

export const getProductById = async (id) => {
  const [rows] = await db.query(
      'SELECT * FROM products WHERE id = ?',
      [id]
  );

  return rows[0];
};

export const createProduct = async (name, price) => {
  const [result] = await db.query(
      `INSERT INTO products (name, price)
     VALUES (?, ?)`,
      [name, price]
  );

  return getProductById(result.insertId);
};

export const updateProduct = async (id, name, price) => {
  const [result] = await db.query(
      `UPDATE products
     SET name = ?, price = ?
     WHERE id = ?`,
      [name, price, id]
  );

  if (result.affectedRows === 0) {
    return null;
  }

  return getProductById(id);
};

export const deleteProduct = async (id) => {
  const [result] = await db.query(
      'DELETE FROM products WHERE id = ?',
      [id]
  );

  return result.affectedRows > 0;
};