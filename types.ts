
export type Screen = 'welcome' | 'register' | 'bookSelection' | 'textViewer' | 'addNote' | 'share' | 'searchResults' | 'settings';

export interface Book {
  name: string;
  chapters: number;
  testament: 'Old' | 'New';
}

export interface BibleVerse {
  book: string;
  chapter: number;
  verse: number;
  text: string;
}
