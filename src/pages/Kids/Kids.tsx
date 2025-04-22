// import React, { useState } from "react";
// import { Navigation, Pagination } from "swiper/modules";
import { useContent } from "../../context/ContentContext";
// import { KidsContent, KidsEpisode } from "../../types/kids";
// import CustomSwiper from "../../components/CustomSwiper/CustomSwiper";
import "./Kids.css";
import { KidsSection } from "./components";

// Import required Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import KidsEpsode from "./components/KidsEpsode";

const Kids: React.FC = () => {
  const { state } = useContent();
  const { kidsData } = state;
  return (
    <div className="kids-page">
      <div className="kids-sections">
        {/* What's New Section */}
        <KidsSection
          category="What's New"
          items={kidsData.whatisNew}
        />
        
        <KidsEpsode/>
      </div>
    </div>
  );
};

export default Kids;
