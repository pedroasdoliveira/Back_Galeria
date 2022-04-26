import mongoose from 'mongoose';
// --------------------------------------------------- Imports -------------------------------


export const connectToDatabase = () => {
  mongoose
    .connect(process.env.URI_DATABASE, {
      // encontrar na documentação
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDb Atlas Connect!');
    })
    .catch((err) => {
      console.log(`Erro ao conectar ao servidor. Erro: ${err}.`);
    });
};
