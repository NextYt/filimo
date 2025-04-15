export interface SubMenuItem {
  label: string;
  href: string;
}

export interface MenuItem {
  label: string;
  href: string;
  icon?: string;
  iconWidth?: string;
  iconHeight?: string;
  hasDropdown?: boolean;
  dropdownClass?: string;
  subMenuItems?: SubMenuItem[];
}

export interface HeroDetailItem {
  text: string;
}

export interface MovieEpisode {
  id: number;
  title: string;
  posterSrc: string;
  isFree?: boolean;
  duration?: string;
  isLocked?: boolean;
}

export interface MovieDetail {
  id: number;
  title: string;
  englishTitle: string;
  director: string;
  rating: number;
  categories: string[];
  description: string;
  episodes: MovieEpisode[];
}

export interface DeviceItem {
  icon: string;
  title: string;
  description: string;
}

export interface TvDevice {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export interface FreeMovieItem {
  id: number;
  title: string;
  poster: string;
  href: string;
}

export interface ChildButton {
  label: string;
  className: string;
}

export interface OnlineFeature {
  text: string;
}

export interface OnlineMovie {
  id: number;
  title: string;
  director: string;
  likePercentage: number;
  categories: string[];
  poster: string;
}

export interface UserFeedback {
  id: number;
  name: string;
  avatar: string;
  feedback: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer?: string;
}

export interface TabFeature {
  text: string;
}

export interface TabSection {
  buttonText: string;
  features: TabFeature[];
}

export interface FooterDropdownLink {
  text: string;
  href: string;
}

export interface FooterLink {
  text: string;
  href: string;
  className: string;
  icon?: string;
  dropdownLinks?: FooterDropdownLink[];
}

export interface SocialMediaItem {
  name: string;
  icon: string;
  href: string;
}
