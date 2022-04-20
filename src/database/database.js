import mongoose from 'mongoose';

export const connectToDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/galeria-db', {
      // encontrar na documentação
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDb Connect!');
    })
    .catch((err) => {
      console.log(`Erro ao conectar ao servidor. Erro: ${err}.`);
    });
};
