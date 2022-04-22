import express from 'express';
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
} from '../middlewares/galeria.middleware.js';
// --------------------------------------------------- Imports -------------------------------

export const route = express.Router();

route.get('/catalog_images', findAllGalleriesController);

route.get('/images/:id', validId, findByIdGalleriesController);

route.post('/add', validIdObjectBody, createGalleryController);

route.put('/edit/:id', validId, validIdObjectBody, updateGalleryController);

route.delete('/delete/:id', validId, deleteGalleryController);
