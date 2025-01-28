import React, { createContext, useContext, useState, ReactNode } from "react";

// 상태 타입 정의
interface TabContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

// 기본 값 정의
const TabContext = createContext<TabContextType | undefined>(undefined);

// Provider 컴포넌트
export const TabProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string>("맛집");

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

// Context 사용 훅
export const useTabContext = (): TabContextType => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTabContext must be used within a TabProvider");
  }
  return context;
};
