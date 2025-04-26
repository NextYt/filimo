// Define the UI state type

export interface UIState {
  navigationItems: typeof NAVIGATION_ITEMS;
  headerButtons: typeof HEADER_BUTTONS;
  isMenuOpen: boolean;
  likedFeedbacks: string[]; // Keep this for the feedback feature
  activeCategories: Record<string, number>; // Track active categories by category ID
}
