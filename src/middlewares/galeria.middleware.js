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

export const validObjectBodyPurchases = (req, res, next) => {
  const purchases = req.body;

  purchases.forEach((item) => {
    if (!item || !item.galeriaId || !item.quantidade) {
      return res.status(400).send({ message: 'Envie todos os campos!' });
    }
  });

  next();
};
