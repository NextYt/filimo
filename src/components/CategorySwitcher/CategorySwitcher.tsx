import { useState } from 'react';

interface CategorySwitcherProps {
  categories: string[];
  activeIndex?: number;
  onSwitch?: (index: number) => void;
}

const CategorySwitcher = ({
  categories,
  activeIndex = 0,
  onSwitch
}: CategorySwitcherProps) => {
  const [active, setActive] = useState(activeIndex);

  const handleSwitch = (index: number) => {
    setActive(index);
    if (onSwitch) {
      onSwitch(index);
    }
  };

  return (
    <div className="switch-cat">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`switch-cat-item ${active === index ? 'item-series' : 'item-movie'}`}
          onClick={() => handleSwitch(index)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategorySwitcher;