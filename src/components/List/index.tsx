import { useContext, useEffect } from "react";
import useCharacters, { CharacterProps } from "../../hooks/useCharacters";
import usePagination from "../../hooks/usePagination";
import { ListContainer } from './styles'
import { CardActions, IconButton } from "@mui/material";
import { FavoriteRounded } from "@mui/icons-material";
import { FavoriteContext } from "../../contexts/FavoriteContext";

export function List() {
    const { characters, fetchCharacters } = useCharacters()
    const { actualPage, setActualPage } = usePagination()
    
    useEffect(() => {
        fetchCharacters(actualPage)
    }, [actualPage])


    const { favorites, setFavorites } = useContext(FavoriteContext)

    function addCharacterToFavorites(character: CharacterProps) {
        setFavorites([...favorites, character])
    }

    function removeCharacterToFavorites(character: CharacterProps) {
        setFavorites(favorites.filter((interCharacter) => interCharacter.id !== character.id))
    }

    const isFavorite = (character: CharacterProps) => favorites.some((interCharacter) => interCharacter.id === character.id)
    

    return (
        <ListContainer>
            <div className="list">
                <div className="characters">
                    {characters.map((character) => (
                        <div key={character.id} className="character">
                            <img src={character.image} alt={character.name} />
                            <div className="infosCharacter">
                                <p>Nome: {character.name}</p>
                                <p>Espécie: {character.species}</p>
                                <p>Gênero: {character.gender}</p>
                                <p>Origem: {character.origin.name}</p>
                            </div>
                            <CardActions disableSpacing className="favButton">
                                <IconButton onClick={() => isFavorite(character) ? removeCharacterToFavorites(character) : addCharacterToFavorites(character)} aria-label="add to favorites">
                                    <FavoriteRounded color={isFavorite(character) ? 'error' : 'action'} />
                                </IconButton>
                            </CardActions>
                        </div>

                        
                    ))}
                </div>
            </div>
            <div className="buttons">
                <button onClick={() => setActualPage(actualPage - 1)} disabled={actualPage <= 1}>Prev</button>
                <button onClick={() => setActualPage(actualPage + 1)} disabled={actualPage >= 42}>Next</button>
            </div>
        </ListContainer>
    )
}