import {
  createContext,
  type Dispatch,
  type RefObject,
  type SetStateAction,
} from "react";

type NavContextType = {
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
  startOfWorkRef: RefObject<HTMLElement | null> | null;
};

export const NavContext = createContext<NavContextType>({
  activeTab: 0,
  setActiveTab: () => {},
  startOfWorkRef: null as RefObject<HTMLElement | null> | null,
});
