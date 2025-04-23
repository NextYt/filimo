export interface KidsContent {
  id: string;
  title: string;
  description: string;
  posterUrl: string;
  type: "movie" | "series";
  rating: number;
  duration?: string;
  episodeCount?: number;
  currentSeason?: number;
  currentEpisode?: number;
  ageRating: string;
  isFree: boolean;
}

interface KidsCategries {
  watchForFree: KidsContent[];
  NightStories: KidsContent[];
  ListenWithMe: KidsContent[];
  ChildrensMusical: KidsContent[];
  SpecialForTheDeaf: KidsContent[];
  LookAndLaugh: KidsContent[];
  Adventure: KidsContent[];
  Series: KidsContent[];
  TrainingBell: KidsContent[];
}

interface KidsEspode {
  id: string;
  title: string;
  backgroundImage: string;
  category: string[] | string;
  posterUrl: string;
  ageRestriction: number;
  hd: boolean;
  country: string;
  minutes: number;
}

export interface KidsData {
  whatisNew: KidsContent[];
  categories: KidsCategries;
  episodes: KidsEspode[];
}
