import { assets } from '../../../assets/assets';
import Button from '../../../components/Button/Button';
import '../../../style/Home/section-main.css';
import Image from '../../../components/ImageComponent/Image';
import { MOVIE_POSTERS } from '../../../data/mockData';
import MoviePoster from '../../../components/MoviePoster/MoviePoster';

const Main = () => {

  return (
    <section className="section-main">
      <div className="section-main-top">
        <div className="section-main-top-title">
          <div className="section-main-top-title-span">
            Popular Filimo
          </div>
          <div className="switch-cat">
            <div className="switch-cat-item item-series">Series</div>
            <div className="switch-cat-item item-movie">Movie</div>
          </div>
        </div>
        <div className="section-main-top-wrapper">
          <ul className="section-main-top-wrapper-list">
            {MOVIE_POSTERS.map((movie) => (
              <MoviePoster key={movie.href} moviePoster={movie.poster} href={movie.href} isActive={movie.isActive} />
            ))}
          </ul>
        </div>
      </div>
      <div className="section-main-bottom">
        <div className="section-bottom-bg">
          <div className="gradient-section-1"></div>
          <div className="gradient-section-2"></div>
          <div className="section-movie-detail">
            <div className="section-movie-cast">
              <div className="section-movie-cast-details">
                <Button ButtonElement="a" className="movie-cast-title">Sedato</Button>
                <div className="movie-en">Sedato S01E09</div>
                <div className="movie-en movie-director">
                  Director: Hamid Javidzadeh
                </div>
                <div className="movie-data">
                  <span className="movie-data-item data-like">
                    <img src="./assets/Images/icon-like_fill.webp" alt="" />
                    <span>98%</span>
                  </span>
                  <span className="movie-data-item">Relity Show</span>
                  <span className="movie-data-item">Game Show</span>
                </div>
                <div className="movie-describtion">
                  <span>
                    "Sedato" is a mystery and exciting game show that is hosted by Mahsen Kiaei.
                  </span>
                </div>
              </div>
            </div>
            <div className="section-bootom-movie-wrapper">
              <ul className="section-bootom-movie-wrapper-list">
                <li className="movie-wrapper-list-item">
                  <a className="list-item-link">
                    <div className="movie-item-poster">
                      <Image
                        src={assets.moviePart1}
                        alt=""
                        srcSet=""
                      />
                      <div className="movie-truck">
                        <div className="movie-truck-item free">
                          <Image
                            src={assets.iconPlay}
                            alt=""
                          />
                          <span>Free</span>
                        </div>
                        <div className="movie-truck-item clock">1:21:29</div>
                      </div>
                    </div>
                    <div className="movie-section-name">Part 1: Iran Dukht</div>
                  </a>
                </li>
                <li className="movie-wrapper-list-item">
                  <a className="list-item-link">
                    <div className="movie-item-poster">
                      <div className="circle-lock">
                        <Image
                          src={assets.moviePart2}
                          alt=""
                          srcSet=""
                        />
                      </div>
                      <div className="back-log">
                        <div className="back-g-LOCK">
                          <Image
                            src={assets.iconLockFill}
                            alt=""
                            srcSet=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="movie-section-name">Part 2: Kaka Vah</div>
                  </a>
                </li>
                <li className="movie-wrapper-list-item">
                  <a className="list-item-link">
                    <div className="movie-item-poster">
                      <div className="circle-lock">
                        <Image
                          className="move-part-poster-img"
                          src={assets.moviePart3}
                          alt=""
                          srcSet=""
                        />
                      </div>
                      <div className="back-log">
                        <div className="back-g-LOCK">
                          <Image
                            src={assets.iconLockFill}
                            alt=""
                            srcSet=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="movie-section-name">Part 3: Hello Cinema</div>
                  </a>
                </li>
                <li className="movie-wrapper-list-item">
                  <a className="list-item-link">
                    <div className="movie-item-poster">
                      <div className="circle-lock">
                        <Image
                          src={assets.moviePart4}
                          alt=""
                          srcSet=""
                        />
                      </div>
                      <div className="back-log">
                        <div className="back-g-LOCK">
                          <Image
                            src={assets.iconLockFill}
                            alt=""
                            srcSet=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="movie-section-name">Part 4: Friendship</div>
                  </a>
                </li>
                <li className="movie-wrapper-list-item">
                  <a className="list-item-link">
                    <div className="movie-item-poster">
                      <div className="circle-lock">
                        <Image
                          src={assets.moviePart5}
                          alt=""
                          srcSet=""
                        />
                      </div>
                      <div className="back-log">
                        <div className="back-g-LOCK">
                          <Image
                            src={assets.iconLockFill}
                            alt=""
                            srcSet=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="movie-section-name">
                      Part 5: Children of Iran
                    </div>
                  </a>
                </li>
                <li className="movie-wrapper-list-item">
                  <Button ButtonElement="a" className="list-item-link">
                    <div className="movie-item-poster">
                      <div className="circle-lock">
                        <Image
                          src={assets.moviePart6}
                          alt=""
                          srcSet=""
                        />
                      </div>
                      <div className="back-log">
                        <div className="back-g-LOCK">
                          <Image
                            src={assets.iconLockFill}
                            alt=""
                            srcSet=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="movie-section-name">
                      Part 6: My Mom is Like Me
                    </div>
                  </Button>
                </li>
                <li className="movie-wrapper-list-item">
                  <Button ButtonElement="a" className="list-item-link">
                    <div className="movie-item-poster">
                      <div className="circle-lock">
                        <Image
                          src={assets.moviePart7}
                          alt=""
                          srcSet=""
                        />
                      </div>
                      <div className="back-log">
                        <div className="back-g-LOCK">
                          <Image
                            src={assets.iconLockFill}
                            alt=""
                            srcSet=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="movie-section-name">
                      Part 7: A Child Named Shadi
                    </div>
                  </Button>
                </li>
                <li className="movie-wrapper-list-item">
                  <Button ButtonElement="a" className="list-item-link">
                    <div className="movie-item-poster">
                      <div className="circle-lock">
                        <Image
                          src={assets.moviePart8}
                          alt=""
                          srcSet=""
                        />
                      </div>
                      <div className="back-log">
                        <div className="back-g-LOCK">
                          <Image
                            src={assets.iconLockFill}
                            alt=""
                            srcSet=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="movie-section-name">Part 8: For the Future</div>
                  </Button>
                </li>
              </ul>
              <div className="swiper-icon before-icon section-main-swiper-icon">
                <Image
                  src={assets.arrowLeft}
                  alt=""
                />
              </div>
              <div className="swiper-icon next-icon section-main-swiper-icon">
                <Image
                  src={assets.arrowRight}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
