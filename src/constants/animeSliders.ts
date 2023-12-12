import {AnimeData} from '../components/AnimePoster';
import {BUNGO, CHAINSAW, MYDRESS, RANKING, VINLAND} from './imgs';
import {
  BERSERK,
  CODEGEASS,
  DEMON,
  DRSTONE,
  FAIRYTAIL,
  FRIEREN,
  GOBLIN,
  JUJUTSU,
  MUSHOKU,
  NARUTO,
  ONE_PIECE,
  PLAYTHROUGH,
  RETURNERS,
  SHANGRI,
  SHIELDHERO,
  SPYXFAMILY,
} from './imgs';

const onePiece: AnimeData = {
  source: ONE_PIECE,
  title: 'One Piece',
  audio: 'Dob | Sub',
};

const fairytail: AnimeData = {
  source: FAIRYTAIL,
  title: 'Fairy Tail',
  audio: 'Subtitulado',
};

const frieren: AnimeData = {
  source: FRIEREN,
  title: 'Frieren: Más allá del...',
  audio: 'Dob | Sub',
};

const jujutsu: AnimeData = {
  source: JUJUTSU,
  title: 'JUJUTSU KAISEN',
  audio: 'Dob | Sub',
};

const demonSlayer: AnimeData = {
  source: DEMON,
  title: 'Demon Slayer: Kime...',
  audio: 'Dob | Sub',
};

const naruto: AnimeData = {
  source: NARUTO,
  title: 'Naruto Shippuden',
  audio: 'Japonés',
};

const berserk: AnimeData = {
  source: BERSERK,
  title: 'Berserk of Gluttony',
  audio: 'Subtitulado',
};

const returners: AnimeData = {
  source: RETURNERS,
  title: "A Returner's Magic...",
  audio: 'Dob English | Sub',
};

const codeGeass: AnimeData = {
  source: CODEGEASS,
  title: 'Code Geass',
  audio: 'Dob English | Sub',
};

const spyxFamily: AnimeData = {
  source: SPYXFAMILY,
  title: 'SPY x FAMILY',
  audio: 'Dob | Sub',
};

const drStone: AnimeData = {
  source: DRSTONE,
  title: 'Dr. STONE',
  audio: 'Dob | Sub',
};

const shieldHero: AnimeData = {
  source: SHIELDHERO,
  title: 'The Rising of the Shi...',
  audio: 'Dob | Sub',
};

const goblinSlayer: AnimeData = {
  source: GOBLIN,
  title: 'GOBLIN SLAYER',
  audio: 'Dob | Sub',
};

const shangriLa: AnimeData = {
  source: SHANGRI,
  title: 'Shangri-La Frontier',
  audio: 'Dob | Sub',
};

const playthrough: AnimeData = {
  source: PLAYTHROUGH,
  title: 'A Playthrough of a...',
  audio: 'Subtitulado',
};

const mushoku: AnimeData = {
  source: MUSHOKU,
  title: 'Mushoku Tensei jobl...',
  audio: 'Dob | Sub',
};

const chainsawMan: AnimeData = {
  source: CHAINSAW,
  title: 'Chainsaw Man',
  audio: 'Dob | Sub',
};

const bungo: AnimeData = {
  source: BUNGO,
  title: 'Bungo Stray Dogs',
  audio: 'Dob | Sub',
};
const ranking: AnimeData = {
  source: RANKING,
  title: 'Ranking of Kings',
  audio: 'Japonés',
};
const vinland: AnimeData = {
  source: VINLAND,
  title: 'Vinland Saga',
  audio: 'Dob | Sub',
};
const mydress: AnimeData = {
  source: MYDRESS,
  title: 'My Dress-Up Darling',
  audio: 'Dob | Sub',
};

export const recommendations: AnimeData[] = [
  {...onePiece},
  {...fairytail},
  {...frieren},
  {...jujutsu},
  {...demonSlayer},
  {...naruto},
  {...berserk},
  {...returners},
  {...codeGeass},
];

export const simulcastOtono: AnimeData[] = [
  {...spyxFamily},
  {...drStone},
  {...frieren},
  {...shieldHero},
  {...goblinSlayer},
  {...shangriLa},
  {...jujutsu},
  {...berserk},
  {...onePiece},
  {...returners},
];

export const populares: AnimeData[] = [
  {...jujutsu},
  {...onePiece},
  {...shangriLa},
  {...playthrough},
  {...berserk},
  {...spyxFamily},
  {...shieldHero},
  {...frieren},
  {...mushoku},
  {...returners},
];

export const animesFree: AnimeData[] = [
  {...chainsawMan},
  {...jujutsu},
  {...bungo},
  {...ranking},
  {...onePiece},
  {...vinland},
  {...mydress},
  {...spyxFamily},
  {...codeGeass},
];
