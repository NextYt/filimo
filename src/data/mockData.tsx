/** @jsxImportSource react */
import { type ReactNode, createElement } from 'react';

// Base interfaces
interface Link {
  href: string;
  label: string;
}

interface SocialLink extends Link {
  icon: ReactNode;
}

// Specialized type for footer links
interface FooterLinks {
  navigation: Link[];
  support: Link[];
  legal: Link[];
  social: SocialLink[];
}

export interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  category: string;
  rating?: number;
  year?: number;
  isNew?: boolean;
  language?: string;
  duration?: string;
}

export interface Device {
  icon: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const FEATURED_MOVIES: Movie[] = [
  {
    id: 1,
    title: "The Latest Movie",
    posterUrl: "https://placehold.co/300x450/141414/e50914?text=Movie+1",
    category: "Action",
    isNew: true,
    year: 2025,
    rating: 4.8,
    language: "English",
    duration: "2h 15m"
  },
  {
    id: 2,
    title: "Popular Series",
    posterUrl: "https://placehold.co/300x450/141414/e50914?text=Movie+2",
    category: "Drama",
    rating: 4.5,
    year: 2024,
    language: "Persian",
    duration: "45m per episode"
  },
  {
    id: 3,
    title: "New Release",
    posterUrl: "https://placehold.co/300x450/141414/e50914?text=Movie+3",
    category: "Thriller",
    isNew: true,
    year: 2025,
    rating: 4.3,
    language: "English",
    duration: "1h 55m"
  },
  {
    id: 4,
    title: "Family Adventure",
    posterUrl: "https://placehold.co/300x450/141414/e50914?text=Movie+4",
    category: "Family",
    year: 2024,
    rating: 4.7,
    language: "Persian",
    duration: "1h 45m"
  },
  {
    id: 5,
    title: "Comedy Night",
    posterUrl: "https://placehold.co/300x450/141414/e50914?text=Movie+5",
    category: "Comedy",
    year: 2024,
    rating: 4.2,
    language: "Persian",
    duration: "1h 30m"
  },
  {
    id: 6,
    title: "Mystery Tale",
    posterUrl: "https://placehold.co/300x450/141414/e50914?text=Movie+6",
    category: "Mystery",
    isNew: true,
    year: 2025,
    rating: 4.6,
    language: "English",
    duration: "2h 05m"
  }
];

export const DEVICES: Device[] = [
  {
    icon: "laptop",
    title: "Computer & Laptop",
    description: "Windows PC - MacOS - Chrome OS",
    imageUrl: "https://placehold.co/200x200/141414/e50914?text=Laptop"
  },
  {
    icon: "mobile",
    title: "Mobile & Tablet",
    description: "Android Phone & Tablets - iPhone and iPad - Amazon Fire Tablets",
    imageUrl: "https://placehold.co/200x200/141414/e50914?text=Mobile"
  },
  {
    icon: "tv",
    title: "Smart TVs",
    description: "Samsung TV - LG TV - Android TV - Apple TV",
    imageUrl: "https://placehold.co/200x200/141414/e50914?text=TV"
  }
];

export const NAVIGATION_LINKS: Link[] = [
  { href: '/movies', label: 'Movies' },
  { href: '/series', label: 'Series' },
  { href: '/kids', label: 'Kids' },
  { href: '/subscribe', label: 'Subscribe' }
];

export const FOOTER_LINKS: FooterLinks = {
  navigation: [
    { href: '/movies', label: 'Movies' },
    { href: '/series', label: 'Series' },
    { href: '/kids', label: 'Kids' }
  ],
  support: [
    { href: '/contact', label: 'Contact & Support' },
    { href: '/faq', label: 'FAQ' },
    { href: '/devices', label: 'Supported Devices' }
  ],
  legal: [
    { href: '/terms', label: 'Terms of Service' },
    { href: '/privacy', label: 'Privacy Policy' }
  ],
  social: [
    { 
      href: 'https://instagram.com/filimocom', 
      label: 'Instagram',
      icon: createElement('svg', {
        viewBox: '0 0 24 24',
        className: 'w-6 h-6',
        fill: 'currentColor',
        children: createElement('path', {
          d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
        })
      })
    },
    {
      href: 'https://twitter.com/filimocom',
      label: 'Twitter',
      icon: createElement('svg', {
        viewBox: '0 0 24 24',
        className: 'w-6 h-6',
        fill: 'currentColor',
        children: createElement('path', {
          d: 'M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z'
        })
      })
    }
  ]
};