import { createContext, useContext, useState } from "react";

const MenuToggleContext = createContext();

export const MenuToggleLayout = ({children}) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleclick = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <MenuToggleContext.Provider value={{ handleclick, toggleMenu }}>
      {children}
    </MenuToggleContext.Provider>
  );
};

export const useMenuToggle = () => useContext(MenuToggleContext);
