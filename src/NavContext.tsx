import { createContext } from "react";

export const NavContext = createContext({
  activeTab: 0,
  setActiveTab: (index: number) => {},
});
