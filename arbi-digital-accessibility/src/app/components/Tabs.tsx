"use client";

import React, {
  useState,
  useRef,
  useEffect,
  KeyboardEvent,
  ReactElement,
  ReactNode,
} from "react";
import styles from "../styles/components/Tabs.module.scss";

interface TabProps {
  label: string;
  children: ReactNode;
}

interface TabsContainerProps {
  children: ReactElement<TabProps>[];
}

export const Tab = ({ children }: TabProps) => children;

export const Tabs: React.FC<TabsContainerProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const hasUserInteracted = useRef(false); // Track user interaction

  // Restore tab index if saved in localStorage
  useEffect(() => {
    const savedIndex = localStorage.getItem("activeTabIndex");
    if (savedIndex !== null) {
      setActiveIndex(parseInt(savedIndex, 10));
    }
  }, []);

  // Save active tab index when it changes
  useEffect(() => {
    localStorage.setItem("activeTabIndex", activeIndex.toString());
    // Only focus if the user has interacted (avoid scroll on page load/refresh)
    if (hasUserInteracted.current) {
      tabRefs.current[activeIndex]?.focus({ preventScroll: true });
    }
  }, [activeIndex]);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    hasUserInteracted.current = true;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % children.length);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActiveIndex((prev) => (prev === 0 ? children.length - 1 : prev - 1));
    }
  };

  const handleClick = (index: number) => {
    hasUserInteracted.current = true;
    setActiveIndex(index);
  };

  return (
    <div
      className={styles.tabsContainer}
      onKeyDown={handleKeyDown}
      role="tablist"
      aria-label="Tabs"
    >
      <div className={styles.tabsLinks}>
        {children.map((child, index) => (
          <button
            key={index}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            onClick={() => handleClick(index)}
            className={`py-2 px-4 text-sm font-medium outline-none ${
              index === activeIndex
                ? "text-white bg-color"
                : "bg-white text-black hover:text-white"
            }`}
            role="tab"
            aria-selected={index === activeIndex}
            tabIndex={index === activeIndex ? 0 : -1}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="p-4" role="tabpanel">
        {children[activeIndex]}
      </div>
    </div>
  );
};


// use of tabs

// <Tabs>
//   <Tab label="Perceivable">
//     <Perceivable />
//   </Tab>
//   <Tab label="Operable">
//     <Operable />
//   </Tab>
//   <Tab label="Understandable">
//     <Understandable />
//   </Tab>
//   <Tab label="Robust">
//     <Robust />
//   </Tab>
// </Tabs>
