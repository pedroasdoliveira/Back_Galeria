const mongoose = require('mongoose');
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

const Purchases = mongoose.model('compras', PurchasesSchema);

module.exports = Purchases;
