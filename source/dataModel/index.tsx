import { FILTER_TYPE } from '../utils/contants/enumerations';

// to keep data models for various parts for app.
export interface TopCarouselDataItem {
  name: string;
  imageUrl: string;
  type: FILTER_TYPE;
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

export interface GenreData {
  imageUrl: string;
  name: string;
  count: number;
}

export interface LanguageData {
  imageUrl: string;
  name: string;
  count: number;
}

export interface NetworkData {
  imageUrl: string;
  name: string;
  count: number;
}

export interface CountryData {
  imageUrl: string;
  name: string;
  count: number;
}
