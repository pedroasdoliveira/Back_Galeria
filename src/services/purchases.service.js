import { Purchases } from '../models/Purchases.js';

export const findPurchasesService = async () => {
  const allPurchases = await Purchases.find();
  return allPurchases;
};

export const createPurchasesService = async (newPurchases) => {
  const createdPurchases = await Purchases.insertMany(newPurchases);
  return createdPurchases;
};

export const finishPurchasesService = async () => {
  return await Purchases.deleteMany();
};
