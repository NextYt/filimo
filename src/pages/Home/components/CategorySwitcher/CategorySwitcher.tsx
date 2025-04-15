import { useUISelector } from '../../../../context';

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
  const { state, dispatch } = useUISelector(context => context);
  const activeIndex = state.activeCategories?.[categoryId] || 0;

  const handleSwitch = (index: number) => {
    // Update active category in context
    dispatch({ 
      type: 'SET_ACTIVE_CATEGORY', 
      payload: { categoryId, index } 
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