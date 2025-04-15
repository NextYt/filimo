import { useUISelector, useContentSelector } from '../../../../context';

interface CategorySwitcherProps {
  categories: string[];
  categoryId?: string;
  onSwitch?: (index: number) => void;
}

const CategorySwitcher = ({
  categories,
  categoryId = 'main',
  onSwitch
}: CategorySwitcherProps) => {
  // Get active category from UI context
  const { state: uiState, dispatch: uiDispatch } = useUISelector(context => context);
  const activeIndex = uiState.activeCategories?.[categoryId] || 0;
  
  // Get content context to update movie/series state
  const { dispatch: contentDispatch } = useContentSelector(context => context);

  const handleSwitch = (index: number) => {
    // Update active category in UI context
    uiDispatch({ 
      type: 'SET_ACTIVE_CATEGORY', 
      payload: { categoryId, index } 
    });
    
    // Update content context with the selected category
    contentDispatch({
      type: 'SET_CATEGORY',
      payload: categories[index] as "Movie" | "Series"
    });
    
    if (onSwitch) {
      onSwitch(index);
    }
  };

  return (
    <div className="switch-cat">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`switch-cat-item ${activeIndex === index ? 'item-series' : 'item-movie'}`}
          onClick={() => handleSwitch(index)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategorySwitcher;