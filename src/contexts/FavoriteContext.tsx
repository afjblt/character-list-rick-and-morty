import { ReactNode, createContext, useState } from "react";
import { CharacterProps } from "../hooks/useCharacters";

type FavoriteContextProps = {
    favorites: CharacterProps[]
    setFavorites: React.Dispatch<React.SetStateAction<CharacterProps[]>>;
}

type Props = {
    children?: ReactNode
}

const INITIAL_FAVORITES_VALUE: CharacterProps[] = []

export const FavoriteContext = createContext<FavoriteContextProps>({
    favorites: INITIAL_FAVORITES_VALUE,
    setFavorites: () => console.warn(`setFavorites is not ready`)
})

export function FavoriteProvider({ children }: Props) {
    const [favorites, setFavorites] = useState<CharacterProps[]>(INITIAL_FAVORITES_VALUE)

    return (
        <FavoriteContext.Provider value={{
            favorites,
            setFavorites
        }}>

        {children}

        </FavoriteContext.Provider>
    )

}