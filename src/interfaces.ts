export interface SerialI {
  id: number;
  url: string;
  name: string;
  language: string;
  type: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: ScheduleI;
  rating: RatingI;
  weight: number;
  network: NetworkI;
  webChannel: NetworkI;
  dvdCountry: string;
  externals: ExternalsI;
  image: ImageI;
  summary: string;
  updated: number;
  _links: LinksI;
}

export interface ScheduleI {
  time: string;
  days: string[];
}

export interface RatingI {
  average: number;
}

export interface NetworkI {
  id: number;
  name: string;
  country: CountryI;
}

export interface CountryI {
  name: string;
  code: string;
  timezone: string;
}

export interface ExternalsI {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}

export interface ImageI {
  medium: string;
  original: string;
}

export interface LinksI {
  self: HrefI;
  previousepisode: HrefI;
}

export interface HrefI {
  href: string;
}
