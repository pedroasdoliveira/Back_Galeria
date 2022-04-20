import mongoose from 'mongoose';
import * as GalleriesService from '../services/galeria.service.js';
// --------------------------------------------------- Imports -------------------------------

export const findAllGalleriesController = async (req, res) => {
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

export const findByIdGalleriesController = async (req, res) => {
  try {
    const idParam = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(idParam)) {
      return res.status(400).send({ message: 'Id invalido' });
    }

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

export const createGalleryController = async (req, res) => {
  try {
    const gallery = req.body;

    if (
      !gallery ||
      !gallery.titulo ||
      !gallery.image ||
      !gallery.tema ||
      !gallery.descricao ||
      !gallery.ano
    ) {
      return res.status(400).send({
        message:
          'Informações incompletas! Enviar todos os requisitos obrigatorios!',
      });
    }

    const newGallery = await GalleriesService.createGalleryService(gallery);

    res.status(201).send(newGallery);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const updateGalleryController = async (req, res) => {
  try {
    const idParam = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(idParam)) {
      return res.status(400).send({ message: 'Id não localizado!' });
    }

    const editGallery = req.body;

    if (
      !editGallery ||
      !editGallery.titulo ||
      !editGallery.image ||
      !editGallery.tema ||
      !editGallery.descricao ||
      !editGallery.ano
    ) {
      return res.status(400).send({
        message: 'Erro na verificação! Envie todos os campor requisitados!',
      });
    }

    const updateGallery = await GalleriesService.updateGalleryService(
      idParam,
      editGallery,
    );

    res.status(200).send(updateGallery);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const deleteGalleryController = async (req, res) => {
  try {
    const idParam = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(idParam)) {
      return res.status(400).send({ message: 'Id inválido' });
    }

    await GalleriesService.deleteGalleryService(idParam);

    res.status(200).send({ message: 'Galeria excluida com sucesso!' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
