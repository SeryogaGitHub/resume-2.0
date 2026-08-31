import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import productsRoutes from './routes/products.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/products', productsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
});