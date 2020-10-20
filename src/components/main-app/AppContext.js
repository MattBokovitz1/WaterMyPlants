import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [plantList, setPlantList] = useState([]);
  const [userId, setUserId] = useState([]);

  return (
    <AppContext.Provider value={[plantList, setPlantList, userId, setUserId]}>
      {props.children}
    </AppContext.Provider>
  );
};
