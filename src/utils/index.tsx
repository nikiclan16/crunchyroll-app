import {ONE_PIECE, CHAINSAW, DEMON, JUJUTSU, BORUTO} from '../constants/imgs';

export const randomImage = () => {
  const arrayImages = [ONE_PIECE, CHAINSAW, DEMON, JUJUTSU, BORUTO];

  const indiceAleatorio = Math.floor(Math.random() * arrayImages.length);

  return arrayImages[indiceAleatorio];
};
