import React, { memo, useEffect, useState } from "react";
import { useMovieFilters } from "../../../../context/hooks";
import "./FilterTags.css";
import Image from "../../../../components/ImageComponent/Image";
import Button from "../../../../components/Button/Button";
import { assets } from "../../../../assets/assets";
import { useNavigate } from "react-router-dom";

/**
 * Component for displaying active filter tags that can be removed
 */
const FilterTags: React.FC = () => {
  const {
    filters,
    setAge,
    setLanguage,
    setCountry,
    setGenre,
    setHD,
    setContentType,
  } = useMovieFilters();

  // Generate tags from current filter state
  const activeTags = [];
  const navigate = useNavigate();

  const [showHomeTag, setShowHomeTag] = useState(true);

  // Reset showHomeTag when leaving the foreign page
  useEffect(() => {
    if (location.pathname === "/foreign") {
      setShowHomeTag(true);
    }
  }, [location.pathname]);

  // Handle home tag click
  const handleHomeTagClick = () => {
    setShowHomeTag(false);
    navigate("/");
  };

  if (filters.hd) {
    activeTags.push({
      key: "hd",
      label: "HD",
      onRemove: () => setHD(false),
    });
  }

  if (filters.age !== "All") {
    activeTags.push({
      key: "age",
      label: `Age: ${filters.age}`,
      onRemove: () => setAge("All"),
    });
  }

  if (filters.language !== "All") {
    activeTags.push({
      key: "language",
      label: `Language: ${filters.language}`,
      onRemove: () => setLanguage("All"),
    });
  }

  if (filters.country !== "All") {
    activeTags.push({
      key: "country",
      label: `Country: ${filters.country}`,
      onRemove: () => setCountry("All"),
    });
  }

  if (filters.genre !== "All") {
    activeTags.push({
      key: "genre",
      label: `Genre: ${filters.genre}`,
      onRemove: () => setGenre("All"),
    });
  }

  // Add ContentType filter tag
  if (filters.contentType !== "All") {
    activeTags.push({
      key: "contentType",
      label: `Type: ${filters.contentType}`,
      onRemove: () => setContentType("All"),
    });
  }

  // Don't render if no active tags
  if (activeTags.length === 0) {
    return null;
  }

  return (
    <div className="filter-tags">
      {activeTags.map((tag) => (
        <div key={tag.key} className="filter-tag">
          <span>{tag.label}</span>
          {tag.key !== "home" && (
            <Button
              className="filter-tag-close"
              onClick={tag.onRemove}
              aria-label={`Remove ${tag.label} filter`}
            >
              <Image src={assets.times} alt="close" />
            </Button>
          )}
          {/* Custom filter tag for home navigation on foreign page */}
          {location.pathname === "/foreign" && showHomeTag && (
            <Button className="filter-tag-close" onClick={handleHomeTagClick}>
              <Image src={assets.times} alt="close" />
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};

export default memo(FilterTags);
