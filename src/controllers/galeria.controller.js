import mongoose from 'mongoose';
import * as GalleriesService from '../services/galeria.service.js';

export const findAllGalleriesController = async (req, res) => {
  try {
    const galeria = await GalleriesService.findAllGalleriesService();

    if (galeria.length == undefined || galeria.length == null) {
      return res.status(404).send({ message: 'Essa galeria não existe!' });
    }

    res.status(200).send(galeria);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const findByIdGalleriesController = async (req, res) => {
  try {
    const idParametro = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(idParametro)) {
      return res.status(400).send({ message: 'Id invalido' });
    }

    const escolherGaleria = await GalleriesService.findByIdGalleriesService(
      idParametro,
    );

    if (escolherGaleria == undefined) {
      res.status(404).send({ message: 'Galeria não encontrada.' });
      return;
    }

    res.status(202).send(escolherGaleria);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const createGalleryController = async (req, res) => {
  try {
    const galeria = req.body;

    if (
      !galeria ||
      !galeria.titulo ||
      !galeria.image ||
      !galeria.tema ||
      !galeria.descricao ||
      !galeria.ano
    ) {
      return res.status(400).send({
        message:
          'Informações incompletas! Enviar todos os requisitos obrigatorios!',
      });
    }

    const novaGaleria = await GalleriesService.createGalleryService(galeria);

    res.status(201).send(novaGaleria);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const updateGalleryController = async (req, res) => {
  try {
    const idParametro = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(idParametro)) {
      return res.status(400).send({ message: 'Id não localizado!' });
    }

    const editarGaleria = req.body;

    if (
      !editarGaleria ||
      !editarGaleria.titulo ||
      !editarGaleria.image ||
      !editarGaleria.tema ||
      !editarGaleria.descricao ||
      !editarGaleria.ano
    ) {
      return res.status(400).send({
        message: 'Erro na verificação! Envie todos os campor requisitados!',
      });
    }

    const atualizarGaleria = await GalleriesService.updateGalleryService(
      idParametro,
      editarGaleria,
    );

    res.status(200).send(atualizarGaleria);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const deleteGalleryController = async (req, res) => {
  try {
    const idParametro = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(idParametro)) {
      return res.status(400).send({ message: 'Id inválido' });
    }

    await GalleriesService.deleteGalleryService(idParametro);

    res.status(200).send({ message: 'Galeria excluida com sucesso!' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
