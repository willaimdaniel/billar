import React, { createContext, useState } from "react";

export const NavContext = createContext();

export function NavProvider({ children }) {
    const [page, setpage] = useState('players')

    const data = { page, setpage }

    return (
        <NavContext.Provider value={data}>
            {children}
        </NavContext.Provider>
    )
}
