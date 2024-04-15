import { createContext, useState } from "react";

export const Allcontext = createContext();

export function ContextProvider({ children }) {
  const [wishListLength, setWishListLength] = useState(0);
  const [token, setToken] = useState(null);
  return (
    <Allcontext.Provider
      value={{ wishListLength, setWishListLength, token, setToken }}
    >
      {children}
    </Allcontext.Provider>
  );
}
