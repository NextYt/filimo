import React from "react";
import { KidsContent } from "../../../types/kids";
import MediaCard from "../../../components/MediaCard/MediaCard";

interface KidsCardProps {
  item: KidsContent;
}

const KidsCard: React.FC<KidsCardProps> = ({ item }) => {
  return (
    <MediaCard 
      id={parseInt(item.id.replace('new', ''))}
      title={item.title}
      posterSrc={item.posterUrl}
      isExclusive={item.isFree}
      type={item.type}
      className="movie-item"
      rating={item.rating}
      showRating={false}
    />
  );
};

export default KidsCard; 