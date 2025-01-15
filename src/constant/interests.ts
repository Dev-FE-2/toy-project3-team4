interface Interest {
  id: number;
  name: string;
}

export const INTERESTS: Interest[] = [
  { id: 0, name: '강아지' },
  { id: 1, name: '고양이' },
  { id: 2, name: '물개' },
  { id: 3, name: '토끼' },
  { id: 4, name: '햄스터' },
  { id: 5, name: '앵무새' },
  { id: 6, name: '거북이' },
  { id: 7, name: '펭귄' },
  { id: 8, name: '팬더' },
  { id: 9, name: '새' },
  { id: 10, name: '야생동물' },
  { id: 11, name: '코알라' },
  { id: 12, name: '귀여움' },
  { id: 13, name: '힐링' },
  { id: 14, name: '재미' },
  { id: 15, name: '일상' },
  { id: 16, name: '감동' },
  { id: 17, name: '산책' },
] as const;
