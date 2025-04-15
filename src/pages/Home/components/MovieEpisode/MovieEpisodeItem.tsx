import { MovieEpisode } from "../../../../types/mockdata";
import { assets } from "../../../../assets/assets";
import Image from "../../../../components/ImageComponent/Image";

interface MovieEpisodeItemProps {
  episode: MovieEpisode;
}

const MovieEpisodeItem = ({ episode }: MovieEpisodeItemProps) => {
  const { title, posterSrc, isFree, duration, isLocked } = episode;

  return (
    <div className="movie-wrapper-list-item">
      <a className="list-item-link">
        <div className="movie-item-poster">
          <Image src={posterSrc} alt={title} />
          {isLocked ? (
            <div className="back-log">
              <div className="back-g-LOCK">
                <Image src={assets.iconLockFill} alt="Locked Content" />
              </div>
            </div>
          ) : (
            <>
              <div className="movie-truck">
                {isFree && (
                  <div className="movie-truck-item free">
                    <Image src={assets.iconPlay} alt="Play" />
                    <span>Free</span>
                  </div>
                )}
                {duration && (
                  <div className="movie-truck-item clock">{duration}</div>
                )}
              </div>
            </>
          )}
        </div>
        <div className="movie-section-name">{title}</div>
      </a>
    </div>
  );
};

export default MovieEpisodeItem;
