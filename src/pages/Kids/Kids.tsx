import { useContent } from "../../context/ContentContext";
import "./Kids.css";
import { KidsSection } from "./components";

// Import required Swiper styles
import KidsEpsode from "./components/KidsEpsode";
import NightStories from "./components/nightStories";

const Kids: React.FC = () => {
  const { state } = useContent();
  const { kidsData } = state;
  return (
    <div className="kids-page">
      <div className="kids-sections">
        {/* What's New Section */}
        <KidsSection category="What's New" items={kidsData.whatisNew} />

        <KidsEpsode items={kidsData.episodes} />
        <KidsSection
          category="Watch for Free"
          key={kidsData.categories.watchForFree[0].id}
          items={kidsData.categories.watchForFree}
        />
        <NightStories
          key={kidsData.categories.NightStories[0].id}
          items={kidsData.categories.NightStories}
          category="Night Stories"
        />
      </div>
    </div>
  );
};

export default Kids;
