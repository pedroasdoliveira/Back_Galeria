import * as purchaseService from '../services/purchases.service.js';

export const findPurchasesController = async (req, res) => {
  const allPurchases = await purchaseService.findPurchasesService();

  if (!allPurchases) {
    return res.status(404).send({ message: 'Nenhuma compra encontrada!' });
  }
  res.send(allPurchases);
};

export const createPurchasesController = async (req, res) => {
  const purchases = req.body;
  const newPurchases = await purchaseService.createPurchasesService(purchases);
  res.status(201).send(newPurchases);
};

export const finishPurchasesController = async (req, res) => {
  await purchaseService.findPurchasesService();
  res.send({ message: 'Compras finalizadas com sucesso!' });
};
