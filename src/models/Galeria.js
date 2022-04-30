const mongoose = require('mongoose')
// --------------------------------------------------- Imports -------------------------------

const GallerySchema = new mongoose.Schema({
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

const Gallery = mongoose.model('galerias', GallerySchema);

module.exports = Gallery;
