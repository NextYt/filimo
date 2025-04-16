# Filimo Movie Streaming Platform

A React-based movie streaming platform inspired by the Filimo streaming service.

## Features

- Browse movies by categories
- Filter movies by various criteria (HD, age rating, language, country, genre)
- Sort movies by different options
- Responsive design for all screen sizes
- Dynamic content loading with pagination
- User authentication

## Technologies Used

- React 18
- TypeScript
- React Router v6
- Context API for state management
- CSS for styling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/filimo.git
cd filimo
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
src/
├── assets/         # Images, fonts, and other static files
├── components/     # Reusable UI components
├── context/        # React Context for state management
├── data/           # Mock data and API service
├── layouts/        # Page layout components
├── pages/          # Page components
│   ├── Home/       # Home page
│   ├── Movies/     # Movies page
│   └── ...         # Other pages
├── services/       # API services and utilities
├── style/          # Global styles and theme
├── types/          # TypeScript type definitions
├── App.tsx         # Main App component
└── main.tsx        # Entry point
```

## Pages

### Home Page
- Featured content carousel
- Category-based content sections
- Promotional banners

### Movies Page
- Filter and sort functionality
- Category-based movie listings
- Responsive grid layout

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
