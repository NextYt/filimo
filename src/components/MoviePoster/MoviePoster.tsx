import Button from "../Button/Button";
import Image from "../ImageComponent/Image";

const MoviePoster = ({ moviePoster, href, isActive }: { moviePoster: string, href: string, isActive: boolean }) => {
  return (
    <Button ButtonElement="a" href={href} className="section-main-top-wrapper-item">
      <div className={`section-movie-poster ${isActive ? "item-active" : ""}`}>
        <Image src={moviePoster} alt="movie poster" />
      </div>
    </Button>
  );
};

export default MoviePoster;
