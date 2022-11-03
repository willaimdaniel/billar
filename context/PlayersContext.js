import React, { createContext, useState } from "react";

export const PlayersContext = createContext();

export function PlyersProvider({ children }) {
    const [players, setplayers] = useState([])
    
    const data = { players, setplayers }

    return (
        <PlayersContext.Provider value={data}>
            {children}
        </PlayersContext.Provider>
    )
}
