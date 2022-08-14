
export interface IIntro {
  thumb: string,
  title: string,
  author: string,
  category: string,
  totalChaps: number,
  views: number,
  like: number,
  hashTags: string[],
}

export interface IPricing {
  freeChaps: number,
  lockedChaps: number,
  pricePerChap: number,
  discount: number,
}

export interface IChapter {
  id: number,
  thumb: string,
  chapNum: number,
}

export interface ICredit {
  avatar: string,
  author: string,
  role: string
}

export interface IAbout {
  genres: string[],
  summary: string,
  thumbs: string[],
  credits: ICredit[],
  facts: { title: string, info: string }[]
}

export interface IRelated {
  id: number,
  thumb: string,
  title: string,
  type: string,
  type2: string,
  views: number,
}


export interface IComment {
  id: number,
  avatar: string,
  name: string,
  commentChap: number,
  datetime: number,
  comment: string,
  like: number,
  threads: number,
}

export interface IUserManga {
  lastReadId: number,
  lastReadDate: number
}
export interface IUserData {
  [mangaId: string]: IUserManga;
}
export interface IManga {
  id: string,
  intro: IIntro,
  pricing: IPricing,
  publishDay: string,
  chapters: IChapter[],
  about: IAbout,
  related: IRelated[],
  comments: IComment[]
}

export const USER_MOCK_DATA: IUserData = {
  kasane: {
    lastReadId: 1,
    lastReadDate: 1660374681000
  },
  kasane1: {
    lastReadId: 3,
    lastReadDate: 1660374681000
  },
};

interface IMockManga {
  [mangaId: string]: IManga;
}

export const MANGA_MOCK_DATA: IMockManga = {
  kasane: {
    id: 'kasane',
    intro: {
      thumb: 'images/thumb/kasane.png',
      title: 'Kasane',
      author: 'Kodansha',
      category: 'Drama',
      totalChaps: 10,
      views: 74483,
      like: 15863,
      hashTags: ['18+', 'NEW', 'TRENDING', 'BESTSELLER', 'MANGA'],
    },
    pricing: {
      freeChaps: 3,
      lockedChaps: 7,
      pricePerChap: 5,
      discount: 50, // %
    },
    publishDay: 'Thursday',
    chapters: [
      { id: 1, thumb: 'images/thumb/thumb_chapter.png', chapNum: 1 },
      { id: 2, thumb: 'images/thumb/thumb_chapter.png', chapNum: 2 },
      { id: 3, thumb: 'images/thumb/thumb_chapter.png', chapNum: 3 },
      { id: 4, thumb: 'images/thumb/thumb_chapter.png', chapNum: 4 },
      { id: 5, thumb: 'images/thumb/thumb_chapter.png', chapNum: 5 },
      { id: 6, thumb: 'images/thumb/thumb_chapter.png', chapNum: 6 },
      { id: 7, thumb: 'images/thumb/thumb_chapter.png', chapNum: 7 },
      { id: 8, thumb: 'images/thumb/thumb_chapter.png', chapNum: 8 },
      { id: 9, thumb: 'images/thumb/thumb_chapter.png', chapNum: 9 },
      { id: 10, thumb: 'images/thumb/thumb_chapter.png', chapNum: 10 }
    ],
    about: {
      genres: ['Horror', 'Psychological', 'Seinen'],
      summary: `Kasane is an ugly girl who is severely bullied by her classmates because of her appearance; making things worse, Kasane's mother was a beautiful actress to whom Kasane is a dark contrast, even though she is as talented as her mother. However, there is nothing to do with this.`,
      thumbs: [
        'images/thumb/kasane1.png',
        'images/thumb/kasane2.png',
        'images/thumb/kasane3.png',
        'images/thumb/kasane4.png',
        'images/thumb/kasane4.png',
      ],
      credits: [
        { avatar: 'images/avatar/kodansha.png', author: 'Kodansha', role: 'Publisher' },
        { avatar: 'images/avatar/johnnie.png', author: 'Johnnie Christmas', role: 'Story' },
        { avatar: 'images/avatar/default.png', author: 'Jack T.Cole', role: 'Art' },
      ],
      facts: [
        { title: 'Last Updated', info: '2 days ago' },
        { title: 'Age Rating', info: 'Mature (18+)' },
        { title: 'Color', info: 'Black & White' },
        { title: 'Origin Media', info: 'Print' },
        { title: 'Style Origin', info: 'Japanese Comics (Manga)' },
        { title: 'Copyright', info: '© Daruma Matsuura / Kodansha Ltd.' },
        { title: 'Other Names', info: 'Kasane -voleuse de visage' },
      ]
    },
    related: [
      { id: 1, thumb: 'images/thumb/related.png', title: 'Title Name 1', type: 'EXCLUSIVE', type2: 'PREQUEL', views: 45645 },
      { id: 2, thumb: 'images/thumb/related.png', title: 'Title Name 2', type: 'EXCLUSIVE', type2: 'PREQUEL', views: 45645 },
      { id: 3, thumb: 'images/thumb/related.png', title: 'Title Name 3', type: 'EXCLUSIVE', type2: 'PREQUEL', views: 45645 },
    ],
    comments: [
      {
        id: 1,
        avatar: 'images/avatar/user1.png',
        name: 'Han Solo',
        commentChap: 35,
        // datetime: 1660465789925,
        datetime: 1660468974849,
        comment: `I had no idea such a sequel was coming as I thought the show had ended and Kyoto Animation took a hard hit from the tragedy but currently 4 episodes in as of writing this review, and I love every second of it.`,
        like: 61,
        threads: 12,
      }
    ]
  }
}