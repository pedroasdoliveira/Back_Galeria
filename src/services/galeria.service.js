import { Galeria } from '../models/Galeria.js';

export const findAllGalleriesService = async () => {
  const galeria = await Galeria.find();
  return galeria;
};

export const findByIdGalleriesService = async (idParam) => {
  const galeria = await Galeria.findById(idParam);
  return galeria;
};

export const createGalleryService = async (novaGaleria) => {
  const addGaleria = await Galeria.create(novaGaleria);
  return addGaleria;
};

export const updateGalleryService = async (id, editarGaleria) => {
  const atualizarGaleria = await Galeria.findByIdAndUpdate(id, editarGaleria);
  return atualizarGaleria;
};

export const deleteGalleryService = async (id) => {
  return await Galeria.findByIdAndDelete(id);
};
