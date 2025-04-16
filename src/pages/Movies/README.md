# Movies Page

The Movies page displays a collection of movies organized by categories with filter and sorting capabilities.

## Components

### MoviesPage

The main component that orchestrates the entire Movies page. It handles:

- Filtering movies based on user selections
- Managing sticky behavior for the filter bar
- Displaying movies organized by categories

### MovieFilter

Handles all filtering and sorting functionality, including:

- Content type filtering (Movie/Series)
- Genre filtering
- HD content toggle
- Age rating filter
- Language filter
- Country filter
- Sorting options

### MovieSection

Displays a category of movies including:

- Category title
- "View all" link for the category
- Grid of MovieCard components

### MovieCard

Represents an individual movie with:

- Movie poster
- Title
- Exclusive badge (when applicable)

## State Management

The Movies page uses the ContentContext for state management, including:

- Filter states
- Sort selections
- Movie data

## CSS

Styles are organized in:

- `Movies.css` - Main styles for the page
- `MovieFilter.css` - Styles for the filter component

## Functionality

1. **Filtering**: Users can filter movies by multiple criteria simultaneously
2. **Sorting**: Movies can be sorted by various attributes
3. **Sticky Filter**: The filter bar sticks to the top when scrolling
4. **Responsive Design**: The layout adapts to different screen sizes 