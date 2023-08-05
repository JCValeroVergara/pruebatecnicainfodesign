import React, { useState } from 'react';

function useTooltip() {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const handleTooltipEnter = () => {
    setIsTooltipOpen(true);
  };

  const handleTooltipLeave = () => {
    setIsTooltipOpen(false);
  };

  const Tooltip = ({ children, tooltipText }) => {
  return (
    <div className="relative inline-block">
      <div onMouseEnter={handleTooltipEnter} onMouseLeave={handleTooltipLeave}>
        {children}
      </div>
      {isTooltipOpen && (
        <div className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
          {tooltipText}
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      )}
    </div>
  );
};

  return { Tooltip };
}

export default useTooltip;