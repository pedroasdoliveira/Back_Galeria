const Gallery = require('../models/Galeria.js');
// --------------------------------------------------- Imports -------------------------------

const findAllGalleriesService = async () => {
  const gallery = await Gallery.find();
  return gallery;
};

const findByIdGalleriesService = async (idParam) => {
  const gallery = await Gallery.findById(idParam);
  return gallery;
};

const createGalleryService = async (novaGaleria) => {
  const addGallery = await Gallery.create(novaGaleria);
  return addGallery;
};

const updateGalleryService = async (id, editarGaleria) => {
  const updateGallery = await Gallery.findByIdAndUpdate(id, editarGaleria);
  return updateGallery;
};

const deleteGalleryService = async (id) => {
  return await Gallery.findByIdAndDelete(id);
};

module.exports = {
  findAllGalleriesService,
  findByIdGalleriesService,
  createGalleryService,
  updateGalleryService,
  deleteGalleryService
};
