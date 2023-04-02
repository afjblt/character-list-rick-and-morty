import { useContext } from "react";
import { FavoriteContext } from "../../contexts/FavoriteContext";
import { CharacterProps } from "../../hooks/useCharacters";
import { ListContainer } from "../List/styles";
import { CardActions, IconButton } from "@mui/material";
import { FavoriteRounded } from "@mui/icons-material";

export function Favorites() {
    const { favorites, setFavorites } = useContext(FavoriteContext)

    function addCharacterToFavorites(character: CharacterProps) {
        setFavorites([...favorites, character])
    }

    function removeCharacterToFavorites(character: CharacterProps) {
        setFavorites(favorites.filter((interCharacter) => interCharacter.id !== character.id))
    }

    const isFavorite = (character: CharacterProps) => favorites.some((interCharacter) => interCharacter.id === character.id)

    return(
        <ListContainer>
            <div className="list">
                {
                    favorites.length <= 0 ? <h3 style={{color: '#222'}}>Você não adicionou nenhum personagem aos favoritos</h3> :
                    <div className="characters">
                        {favorites.map((character) => (
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
                }
            </div>
        </ListContainer>
    )
}