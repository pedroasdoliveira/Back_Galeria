import { Gallery } from '../models/Galeria.js';
// --------------------------------------------------- Imports -------------------------------


export const findAllGalleriesService = async () => {
  const gallery = await Gallery.find();
  return gallery;
};

export const findByIdGalleriesService = async (idParam) => {
  const gallery = await Gallery.findById(idParam);
  return gallery;
};

export const createGalleryService = async (novaGaleria) => {
  const addGallery = await Gallery.create(novaGaleria);
  return addGallery;
};

export const updateGalleryService = async (id, editarGaleria) => {
  const updateGallery = await Gallery.findByIdAndUpdate(id, editarGaleria);
  return updateGallery;
};

export const deleteGalleryService = async (id) => {
  return await Gallery.findByIdAndDelete(id);
};
