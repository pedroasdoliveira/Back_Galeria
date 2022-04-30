const mongoose = require('mongoose');
const GalleriesService = require('../services/galeria.service.js');
// --------------------------------------------------- Imports -------------------------------

const findAllGalleriesController = async (req, res) => {
  try {
    const gallery = await GalleriesService.findAllGalleriesService();

    if (gallery.length == undefined || gallery.length == null) {
      return res.status(404).send({ message: 'Essa galeria não existe!' });
    }

    res.status(200).send(gallery);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findByIdGalleriesController = async (req, res) => {
  try {
    const idParam = req.params.id;

    const chosenGallery = await GalleriesService.findByIdGalleriesService(
      idParam,
    );

    if (chosenGallery == undefined) {
      res.status(404).send({ message: 'Galeria não encontrada.' });
      return;
    }

    res.status(202).send(chosenGallery);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const createGalleryController = async (req, res) => {
  try {
    const gallery = req.body;

    const newGallery = await GalleriesService.createGalleryService(gallery);

    res.status(201).send(newGallery);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const updateGalleryController = async (req, res) => {
  try {
    const idParam = req.params.id;

    const editGallery = req.body;

    const updateGallery = await GalleriesService.updateGalleryService(
      idParam,
      editGallery,
    );

    res.status(200).send(updateGallery);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const deleteGalleryController = async (req, res) => {
  try {
    const idParam = req.params.id;

    await GalleriesService.deleteGalleryService(idParam);

    res.status(200).send({ message: 'Galeria excluida com sucesso!' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = {
  findAllGalleriesController,
  findByIdGalleriesController,
  createGalleryController,
  updateGalleryController,
  deleteGalleryController
}
