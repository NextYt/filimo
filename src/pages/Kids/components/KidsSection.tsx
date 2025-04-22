import React from "react";
import { KidsContent } from "../../../types/kids";
import useScreenItems from "../../../context/useScreenItems";
import Asset from "../../../components/ImageComponent/Image";
import { assets } from "../../../assets/assets";
import KidsCard from "./KidsCard";

interface KidsSectionProps {
  category: string;
  items: KidsContent[];
}

const KidsSection: React.FC<KidsSectionProps> = ({ category, items }) => {
  const itemCount = useScreenItems();

  return (
    <div className="movie-section">
      <div className="movie-section-header">
        <h2 className="movie-section-title">{category}</h2>
        <span className="view-all-btn">
          View all
          <Asset
            src={assets.angleRight}
            alt="arrow-right"
            className="arrow-right"
          />
        </span>
      </div>
      <div className="movie-grid">
        {items.slice(0, itemCount).map((item) => (
          <KidsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default KidsSection;
