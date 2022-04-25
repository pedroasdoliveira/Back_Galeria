import mongoose from 'mongoose';
// --------------------------------------------------- Imports -------------------------------

const PurchasesSchema = new mongoose.Schema({
  galeriaId: {
    type: String,
    require: true,
  },
  quantidade: {
    type: Number,
    require: true,
  },
});

export const Purchases = mongoose.model('compras', PurchasesSchema);
