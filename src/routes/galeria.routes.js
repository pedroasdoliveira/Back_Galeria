import express from 'express';
import {
  findAllGalleriesController,
  findByIdGalleriesController,
  createGalleryController,
  updateGalleryController,
  deleteGalleryController
} from '../controllers/galeria.controller.js';
// --------------------------------------------------- Imports -------------------------------


export const route = express.Router();

route.get('/catalogo_imagens', findAllGalleriesController);

route.get('/imagem/:id', findByIdGalleriesController);

route.post('/adicionar', createGalleryController);

route.put('/editar/:id', updateGalleryController);

route.delete('/apagar/:id', deleteGalleryController);
