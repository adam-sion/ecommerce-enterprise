import { useState } from "react";

const useTabs = (initialTab) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const switchTab = (tab) => setActiveTab(tab);

  return { activeTab, switchTab };
};

export default useTabs;
