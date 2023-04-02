import { useState } from "react";

export type CharacterProps = {
    id: number;
    name: string;
    species: string;
    gender: string;
    image: string;
    origin: any;

}

export default function useCharacters() {
    const [characters, setCharacters] = useState<CharacterProps[]>([])

    function fetchCharacters(page: number) {
        const virtualPage = page <= 0 ? 1 : page

        fetch(`https://rickandmortyapi.com/api/character?page=${virtualPage}`)
            .then(
                (res) => res.json(),
            )
            .then(data => setCharacters(data.results))
   
    }

    return {
        fetchCharacters,
        characters
    }
}