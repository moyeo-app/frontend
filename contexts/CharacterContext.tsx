import React, { createContext, ReactNode, useContext, useState } from "react";

type CharacterContextType = {
  selectedCharacter: number;
  setSelectedCharacter: (index: number) => void;
};

const CharacterContext = createContext<CharacterContextType | undefined>(
  undefined
);

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(0);

  return (
    <CharacterContext.Provider
      value={{ selectedCharacter, setSelectedCharacter }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacter = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error("useCharacter must be used within a CharacterProvider");
  }
  return context;
};
