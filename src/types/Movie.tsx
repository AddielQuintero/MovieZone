import { ClassNameProps } from '@types'

export interface TMovie {
  id: number
  title: string
  start: string
  time: string
  categories: string[]
  linkImg: string
  description: string
}

export interface MovieProps {
  movie: TMovie
}
export interface MovieListProps {
  title: string
  redirect?: string
  movies?: TMovie[]
}

export interface MovieInfoProps extends ClassNameProps {
  start: string
  time: string
}

export interface MovieImageProps extends ClassNameProps {
  url?: string
}

export const data = [
  {
    id: 1,
    title: 'John Wick: Chapter 4',
    start: '7.9',
    time: '2h 50m',
    categories: ['Action', 'Thriller', 'Crime'],
    linkImg: 'https://image.tmdb.org/t/p/original//1inZm0xxXrpRfN0LxwE2TXzyLN6.jpg',
    description:
      'With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.',
  },
  {
    id: 2,
    title: 'The Super Mario Bros - Movie',
    start: '7.3',
    time: '1h 35m',
    categories: ['Animation', 'Adventure'],
    linkImg: 'https://image.tmdb.org/t/p/original//9n2tJBplPbgR2ca05hS5CKXwP2c.jpg',
    description:
      "A Brooklyn Plumber named Mario, travels through the Mushroom Kingdom with a Princess named Peach and an Anthropomorphic Mushroom named Toad to find Mario's Brother, Luigi, and to save the world from a ruthless fire breathing Koopa named Bowser",
  },
  {
    id: 3,
    title: 'Extraction 2',
    start: '7.9',
    time: '2h 02m',
    categories: ['Action', 'Thriller'],
    linkImg: 'https://image.tmdb.org/t/p/original//wRxLAw4l17LqiFcPLkobriPTZAw.jpg',
    description:
      "Tasked with extracting a family who is at the mercy of a Georgian gangster, Tyler Rake infiltrates one of the world's deadliest prisons in order to save them. But when the extraction gets hot, and the gangster dies in the heat of battle, his equally ruthless brother tracks down Rake and his team to Sydney, in order to get revenge.",
  },
  {
    id: 4,
    title: 'The Flash',
    start: '6.8',
    time: '2h 23m',
    categories: ['Action', 'Science Fiction', 'Adventure'],
    linkImg: 'https://image.tmdb.org/t/p/original//7e9MVGg8efOhoA2R9XhZcGWTC5Z.jpg',
    description:
      "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
  },
  {
    id: 5,
    title: 'Fast X',
    start: '7.3',
    time: '2h 22m',
    categories: ['Action', 'Thriller', 'Crime'],
    linkImg: 'https://image.tmdb.org/t/p/original//6l1SV3CWkbbe0DcAK1lyOG8aZ4K.jpg',
    description:
      "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
  },
  {
    id: 6,
    title: 'Transformers: Rise of the Beasts',
    start: '7.2',
    time: '2h 07m',
    categories: ['Action', 'Adventure', 'Science Fiction'],
    linkImg: 'https://image.tmdb.org/t/p/original//qWQSnedj0LCUjWNp9fLcMtfgadp.jpg',
    description:
      'When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.',
  },
]
