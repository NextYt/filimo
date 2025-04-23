import { useContent } from "../../context/ContentContext";
import "./Kids.css";
import { KidsSection } from "./components";
import KidsEpsode from "./components/KidsEpsode";
import NightStories from "./components/nightStories";

const Kids: React.FC = () => {
  const { state } = useContent();
  const { kidsData } = state;
  
  // Categories that have special handling
  const excludedCategories = ['watchForFree', 'NightStories'];
  
  // Get remaining categories for mapping
  const remainingCategories = Object.entries(kidsData.categories)
    .filter(([key]) => !excludedCategories.includes(key));

  return (
    <div className="kids-page">
      <div className="kids-sections">
        <KidsSection category="What's New" items={kidsData.whatisNew} />
        <KidsEpsode items={kidsData.episodes} />
        
        <KidsSection
          category="Watch for Free"
          items={kidsData.categories.watchForFree}
        />
        
        <NightStories
          items={kidsData.categories.NightStories}
          category="Night Stories"
        />

        {remainingCategories.map(([key, items]) => (
          <KidsSection
            key={key}
            category={key.replace(/([A-Z])/g, ' $1').trim()} // Convert camelCase to spaces
            items={items}
          />
        ))}
      </div>
    </div>
  );
};

export default Kids;
