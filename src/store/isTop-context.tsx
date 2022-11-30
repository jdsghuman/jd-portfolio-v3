import { createContext, useState } from "react";

interface ContextProp {
  isTop: boolean;
  resetIsTop: () => void;
  setIsTopFalse: () => void;
}
const IsTopContext = createContext<ContextProp>({} as ContextProp);

export function IsTopContextProvider(props: any) {
  const [isTop, setIsTop] = useState(true);

  function resetIsTop() {
    setIsTop(true);
  }

  function setIsTopFalse() {
    setIsTop(false);
  }

  const context = {
    isTop,
    resetIsTop,
    setIsTopFalse,
  };
  return (
    <IsTopContext.Provider value={context}>
      {props.children}
    </IsTopContext.Provider>
  );
}

export default IsTopContext;
