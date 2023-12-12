import {ImageSourcePropType} from 'react-native';
import {
  ACTION,
  ACTIONICON,
  AVENTURA,
  AVENTURAICON,
  CF,
  CFICON,
  COMEDIA,
  COMEDIAICON,
  DEPORTES,
  DEPORTESICON,
  DRAMA,
  DRAMAICON,
  FANTASIA,
  FANTASIAICON,
  MUSICAL,
  MUSICALICON,
  RDLV,
  RDLVICON,
  ROMANCE,
  ROMANCEICON,
  SEINEN,
  SEINENICON,
  SHOUJO,
  SHOUJOICON,
  SHOUNEN,
  SHOUNENICON,
  SOBRENATURAL,
  SOBRENATURALICON,
  THRILLER,
  THRILLERICON,
} from './imgs';

interface AnimeGenresProps {
  image: ImageSourcePropType;
  icon: ImageSourcePropType;
  title: string;
}

export const animeGenres: AnimeGenresProps[] = [
  {
    image: ACTION,
    icon: ACTIONICON,
    title: 'ACCIÓN',
  },
  {
    image: AVENTURA,
    icon: AVENTURAICON,
    title: 'AVENTURA',
  },
  {
    image: COMEDIA,
    icon: COMEDIAICON,
    title: 'COMEDIA',
  },
  {
    image: DRAMA,
    icon: DRAMAICON,
    title: 'DRAMA',
  },
  {
    image: FANTASIA,
    icon: FANTASIAICON,
    title: 'FANTASIA',
  },
  {
    image: MUSICAL,
    icon: MUSICALICON,
    title: 'MUSICAL',
  },
  {
    image: ROMANCE,
    icon: ROMANCEICON,
    title: 'ROMANCE',
  },
  {
    image: CF,
    icon: CFICON,
    title: 'CIENCIA FICCIÓN',
  },
  {
    image: SEINEN,
    icon: SEINENICON,
    title: 'SEINEN',
  },
  {
    image: SHOUJO,
    icon: SHOUJOICON,
    title: 'SHOUJO',
  },
  {
    image: SHOUNEN,
    icon: SHOUNENICON,
    title: 'SHOUNEN',
  },
  {
    image: RDLV,
    icon: RDLVICON,
    title: 'RECUENTOS DE LA VIDA',
  },
  {
    image: DEPORTES,
    icon: DEPORTESICON,
    title: 'DEPORTES',
  },
  {
    image: SOBRENATURAL,
    icon: SOBRENATURALICON,
    title: 'SOBRENATURAL',
  },
  {
    image: THRILLER,
    icon: THRILLERICON,
    title: 'THRILLER',
  },
];
