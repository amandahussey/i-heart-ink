import { createContext, type RefObject } from "react";

export const NavContext = createContext({
  activeTab: 0,
  setActiveTab: (index: number) => {},
  startOfWorkRef: null as RefObject<HTMLElement | null> | null,
});
