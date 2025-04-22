// Define the Sections state type

export interface SectionsState {
  deviceSection: typeof DEVICE_SECTION;
  tvSection: typeof TV_SECTION;
  freeMoviesSection: typeof FREE_MOVIES_SECTION;
  childSection: typeof CHILD_SECTION;
  onlineSection: typeof ONLINE_SECTION;
  userFeedbackSection: typeof USER_FEEDBACK_SECTION;
  faqSection: typeof FAQ_SECTION;
  tabSection: typeof TAB_SECTION;
  expandedFaqId: number | null;
}
