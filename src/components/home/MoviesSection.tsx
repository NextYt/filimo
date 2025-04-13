import { useState } from 'react'
import { FEATURED_MOVIES } from '../../data/mockData'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from '../Image'

const MoviesSection = () => {
  const [activeTab, setActiveTab] = useState<'movies' | 'series'>('movies')

  return (
    <section className="section-padding bg-background-dark">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl font-bold text-white">Most Popular on Filimo</h2>
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('movies')}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'movies' 
                  ? 'bg-primary text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Movies
            </button>
            <button
              onClick={() => setActiveTab('series')}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'series' 
                  ? 'bg-primary text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Series
            </button>
          </div>
        </div>

        <div className="movie-carousel-container">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={16}
            slidesPerView="auto"
            navigation={true}
            pagination={{ 
              clickable: true,
              dynamicBullets: true
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              1300: {
                slidesPerView: 6,
                spaceBetween: 24,
              },
            }}
            className="movie-carousel !pb-12"
          >
            {FEATURED_MOVIES.map((movie) => (
              <SwiperSlide key={movie.id}>
                <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                  <div className="relative aspect-[2/3]">
                    <Image
                      src={movie.posterUrl}
                      alt={movie.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 p-4 w-full">
                      <h3 className="text-white font-semibold mb-1 truncate text-sm sm:text-base">
                        {movie.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                        <span className="text-gray-300">{movie.category}</span>
                        {movie.rating && (
                          <span className="flex items-center text-yellow-400">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            {movie.rating}
                          </span>
                        )}
                        {movie.duration && (
                          <span className="text-gray-400">{movie.duration}</span>
                        )}
                        {movie.isNew && (
                          <span className="bg-primary px-2 py-0.5 text-xs rounded">
                            NEW
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default MoviesSection