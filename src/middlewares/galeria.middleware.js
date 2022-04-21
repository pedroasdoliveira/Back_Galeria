import mongoose from 'mongoose';

export const validId = (req, res, next) => {
  const idParam = req.param.id;
  console.log(idParam)

  // erro idParam == undefined
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id invalido' });
  }

  next();
};
