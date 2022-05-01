const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../../swagger.json');
const galeryController = require('../controllers/galeria.controller.js');
const {
  validId,
  validIdObjectBody,
  validObjectBodyPurchases,
} = require('../middlewares/galeria.middleware.js');
const {
  findPurchasesController,
  createPurchasesController,
  finishPurchasesController,
} = require('../controllers/purchases.controller.js');
// --------------------------------------------------- Imports -------------------------------

const route = require("express").Router();

route.use('/api-docs', swaggerUi.serve);

route.get('/api-docs', swaggerUi.setup(swaggerDocument));

route.get('/catalog_images', galeryController.findAllGalleriesController);

route.get('/images/:id', validId, galeryController.findByIdGalleriesController);

route.post('/add', validIdObjectBody, galeryController.createGalleryController);

route.put('/edit/:id', validId, validIdObjectBody, galeryController.updateGalleryController);

route.delete('/delete/:id', validId, galeryController.deleteGalleryController);

// ---------------------------------------- Compras ----------------------------------
route.get('/all-purchases', findPurchasesController);

route.post(
  '/create-purchases',
  validObjectBodyPurchases,
  createPurchasesController,
);

route.delete('/finish-purchases', finishPurchasesController);

module.exports = route;
