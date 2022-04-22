import mongoose from 'mongoose';

export const validId = (req, res, next) => {
  const idParam = req.params.id;

  // erro idParam == undefined
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id invalido' });
  }

  next();
};

export const validIdObjectBody = (req, res, next) => {
  const gallery = req.body;

  if (
    !gallery ||
    !gallery.titulo ||
    !gallery.imagem ||
    !gallery.tema ||
    !gallery.descricao ||
    !gallery.ano
  ) {
    return res.status(400).send({ message: 'Preencha todos os requisitos!' });
  }

  next();
};
