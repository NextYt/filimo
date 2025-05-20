// Generic API response structure
export interface ApiResponse<T> {
  status: boolean;
  message: string;
  data: T;
}

// Paginated response wrapper
export interface PaginatedResponse<T> {
  current_page: number;
  data: T[];
  from: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
}

// User
export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// Movie
export interface Movie {
  id: number;
  name: string;
  description: string;
  poster_url: string;
  thumbnail_url: string;
  trailer_url?: string;
  type: string;
  language: string;
  IMDb_rating?: number;
  content_rating?: string;
  duration?: number;
  release_date: string;
  release_year?: number;
  is_restricted: boolean;
  is_watch_list?: boolean;
  genres?: Genre[];
  cast?: CastCrew[];
}

// TV Show
export interface TVShow {
  id: number;
  name: string;
  description: string;
  poster_url: string;
  thumbnail_url: string;
  trailer_url?: string;
  type: string;
  language: string;
  IMDb_rating?: number;
  content_rating?: string;
  release_date: string;
  release_year?: number;
  is_restricted: boolean;
  is_watch_list?: boolean;
  genres?: Genre[];
  seasons?: Season[];
  cast?: CastCrew[];
}

// Season
export interface Season {
  id: number;
  entertainment_id: number;
  season_number: number;
  name: string;
  episodes?: Episode[];
}

// Episode
export interface Episode {
  id: number;
  entertainment_id: number;
  season_id: number;
  title: string;
  description?: string;
  episode_number: number;
  duration?: number;
  thumbnail_url: string;
  is_restricted: boolean;
}

// Genre
export interface Genre {
  id: number;
  name: string;
}

// Cast/Crew
export interface CastCrew {
  id: number;
  name: string;
  type: string;
  profile_image?: string;
}

// Dashboard response
export interface DashboardResponse {
  slider: any[];
  continue_watch: any[];
  top_10: any[];
}

// Watchlist item
export interface WatchlistItem {
  id: number;
  entertainment_id: number;
  entertainment_type: string;
  entertainment: Movie | TVShow;
}

// Authentication
export interface LoginRequest {
  email: string;
  password: string;
  device_name?: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  device_name?: string;
} 