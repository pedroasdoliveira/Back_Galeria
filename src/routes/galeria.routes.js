import express from 'express';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs'
import {
  findAllGalleriesController,
  findByIdGalleriesController,
  createGalleryController,
  updateGalleryController,
  deleteGalleryController,
} from '../controllers/galeria.controller.js';
import {
  validId,
  validIdObjectBody,
  validObjectBodyPurchases,
} from '../middlewares/galeria.middleware.js';
import {
  findPurchasesController,
  createPurchasesController,
  finishPurchasesController,
} from '../controllers/purchases.controller.js';
// --------------------------------------------------- Imports -------------------------------
const swaggerDocument = JSON.parse(fs.readFileSync("../../swagger.json", "utf8"))

export const route = express.Router();

route.use('/api-docs', swaggerUi.serve);

route.get('/api-docs', swaggerUi.setup(swaggerDocument));

route.get('/catalog_images', findAllGalleriesController);

route.get('/images/:id', validId, findByIdGalleriesController);

route.post('/add', validIdObjectBody, createGalleryController);

route.put('/edit/:id', validId, validIdObjectBody, updateGalleryController);

route.delete('/delete/:id', validId, deleteGalleryController);

route.get('/all-purchases', findPurchasesController);

route.post(
  '/create-purchases',
  validObjectBodyPurchases,
  createPurchasesController,
);

route.delete('/finish-purchases', finishPurchasesController);
