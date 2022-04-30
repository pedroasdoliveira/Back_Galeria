const Purchases = require('../models/Purchases.js');

const findPurchasesService = async () => {
  const allPurchases = await Purchases.find();
  return allPurchases;
};

const createPurchasesService = async (newPurchases) => {
  const createdPurchases = await Purchases.insertMany(newPurchases);
  return createdPurchases;
};

const finishPurchasesService = async () => {
  return await Purchases.deleteMany();
};

module.exports = {
  findPurchasesService,
  createPurchasesService,
  finishPurchasesService
}
