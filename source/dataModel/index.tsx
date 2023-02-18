// to keep data models for various parts for app.
export interface TopCarouselDataItem {
  name: string;
  imageUrl: string;
}

export interface SongItemData {
  name: string;
  imageUrl: string;
  isPlaying: boolean;
}

export interface SongDetailsData {
  name: string;
  singer: string;
  trackLength: string;
}
