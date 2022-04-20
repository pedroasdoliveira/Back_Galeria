import mongoose from 'mongoose';
// --------------------------------------------------- Imports -------------------------------

const GaleriaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    require: true,
  },
  imagem: {
    type: String,
    require: true,
  },
  tema: {
    type: String,
    require: true,
  },
  descricao: {
    type: String,
    require: true,
  },
  ano: {
    type: Number,
    require: true,
  }
});

export const Galeria = mongoose.model('galeria', GaleriaSchema);
