import Snowman from '../assets/images/1.jpg';
import CharlieBrown from '../assets/images/2.jpg';
import ChristmasTree from '../assets/images/3.jpg';
import SnowBall from '../assets/images/4.jpg';
import Fireplace from '../assets/images/5.jpg';
import Grinch from '../assets/images/6.jpg';
import MummiJoulu from '../assets/images/7.jpg';
import MummiJoulu2 from '../assets/images/8.jpg';
import Kitty from '../assets/images/9.jpg';
import JouluTonttu from '../assets/images/10.jpg';
import Card from '../assets/images/card.jpg';

export type ICard = {
  name: string
  pic: any
  flipped: boolean
  match: boolean
}

const imgArray: Array<ICard> = [
  {
    name: 'Snowman',
    pic: Snowman,
    flipped: false,
    match: false,
  },
  {
    name: 'CharlieBrown',
    pic: CharlieBrown,
    flipped: false,
    match: false,
  },
  {
    name: 'ChristmasTree',
    pic: ChristmasTree,
    flipped: false,
    match: false,
  },
  {
    name: 'SnowBall',
    pic: SnowBall,
    flipped: false,
    match: false,
  },
  {
    name: 'Fireplace',
    pic: Fireplace,
    flipped: false,
    match: false,
  },
  {
    name: 'Grinch',
    pic: Grinch,
    flipped: false,
    match: false,
  },
  {
    name: 'MummiJoulu',
    pic: MummiJoulu,
    flipped: false,
    match: false,
  },
  {
    name: 'MummiJoulu2',
    pic: MummiJoulu2,
    flipped: false,
    match: false,
  },
  {
    name: 'Kitty',
    pic: Kitty,
    flipped: false,
    match: false,
  },
  {
    name: 'JouluTonttu',
    pic: JouluTonttu,
    flipped: false,
    match: false,
  },
];

const imagesCopy: ICard[] = JSON.parse(JSON.stringify(imgArray));

export const images: ICard[] = imgArray.concat(imagesCopy);

export const cover = [
  {
    name: 'card',
    pic: Card,
    flipped: false,
  },
];