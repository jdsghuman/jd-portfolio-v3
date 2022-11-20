import { createContext, useState } from "react";

interface ContextProp {
  activeLink: string;
  updateActiveLink: (activeLink: string) => void;
}
const ActiveLinkContext = createContext<ContextProp>({} as ContextProp);

const initialState = "home";

export function ActiveLinkContextProvider(props) {
  const [activeLink, setActiveLink] = useState(initialState);

  function resetActiveLink() {
    setActiveLink(initialState);
  }

  function updateActiveLink(activeLink: string) {
    setActiveLink(activeLink);
  }

  const context = {
    activeLink,
    reset: resetActiveLink,
    updateActiveLink,
  };
  return (
    <ActiveLinkContext.Provider value={context}>
      {props.children}
    </ActiveLinkContext.Provider>
  );
}

export default ActiveLinkContext;
