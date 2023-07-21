import React, { useState, useEffect } from 'react';
import PokemonCard from "../cards/PokemonCard";

const PokedexPage = () => {
    const [pokemons, setPokemons] = useState([]);
    const [generation, setGeneration] = useState('1');
    const [limit, setLimit] = useState(0);


    useEffect(() => {
        handleGenerationChange(generation);
    }, []);

    const handleGenerationChange = async (selectedGeneration) => {
        setGeneration(selectedGeneration);

        try {
            let offset;
            switch (selectedGeneration) {
                case '1':
                    offset = 0;
                    setLimit(151);
                    break;
                case '2':
                    offset = 151;
                    setLimit(100);
                    break;
                case '3':
                    offset = 251;
                    setLimit(135);
                    break;
                case '4':
                    offset = 386;
                    setLimit(107);
                    break;
                case '5':
                    offset = 493;
                    setLimit(156);
                    break;
                case '6':
                    offset = 649;
                    setLimit(72);
                    break;
                case '7':
                    offset = 721;
                    setLimit(88);
                    break;
                case '8':
                    offset = 809;
                    setLimit(96);
                    break;
                case '9':
                    offset = 905;
                    setLimit(105);
                    break;

            }

            //limit=100000&offset=0.
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=' + limit + '&offset=' + offset);
            if (!response.ok) {
                console.error('Error al obtener los datos de los Pokémon.');
            } else {
                const data = await response.json();
                const pokemons = data.results.map(async (pokemon) => {
                    const pokemonResponse = await fetch(pokemon.url);
                    if (!pokemonResponse.ok) {
                        console.error('Error al obtener la información del Pokémon.');
                    }
                    return pokemonResponse.json();
                });

                setPokemons(await Promise.all(pokemons));
            }
        } catch (error) {
            console.error(error);
        }
    };

    const margin = {
        marginTop: 200,
        marginRight: 100,
        position: "sticky",
        top: 200,
        height: "calc(100vh - 20vh)",
        width: "calc(100vh - 85vh)",
        overflowY: "auto",
        padding: 30
    }

    return (
        <div className="container" >
            <div className="row">
                <div className="col-1" style={margin}>
                    <h4 className="mb-4">Generation</h4>
                        <button type="button"
                                className={`btn btn-outline-info mb-3
                                ${generation === '1' ? 'active' : ''}`}
                                onClick={() => handleGenerationChange('1')} > First
                        </button>
                        <button type="button"
                                className={`btn btn-outline-info mb-3
                                ${generation === '2' ? 'active' : ''}`}
                                onClick={() => handleGenerationChange('2')} > Second
                        </button>
                        <button type="button"
                                className={`btn btn-outline-info mb-3
                                ${generation === '3' ? 'active' : ''}`}
                                onClick={() => handleGenerationChange('3')} > Third
                        </button>
                        <button type="button"
                                className={`btn btn-outline-info mb-3
                                    ${generation === '4' ? 'active' : ''}`}
                                onClick={() => handleGenerationChange('4')} > Forth
                        </button>
                        <button type="button"
                                className={`btn btn-outline-info mb-3
                                    ${generation === '5' ? 'active' : ''}`}
                                onClick={() => handleGenerationChange('5')} > Fifth
                        </button>
                        <button type="button"
                                className={`btn btn-outline-info mb-3
                                    ${generation === '6' ? 'active' : ''}`}
                                onClick={() => handleGenerationChange('6')} > Sixth
                        </button>
                        <button type="button"
                                className={`btn btn-outline-info mb-3
                                    ${generation === '7' ? 'active' : ''}`}
                                onClick={() => handleGenerationChange('7')} > Seventh
                        </button>
                        <button type="button"
                                className={`btn btn-outline-info mb-3
                                    ${generation === '8' ? 'active' : ''}`}
                                onClick={() => handleGenerationChange('8')} > Eighth
                        </button>
                        <button type="button"
                                className={`btn btn-outline-info mb-3
                                    ${generation === '9' ? 'active' : ''}`}
                                onClick={() => handleGenerationChange('9')} > Ninth
                        </button>
                </div>
                <div className="col m-5">
                    <h1>Pokédex</h1>
                        <PokemonCard
                            pokemons={pokemons}
                        />
                </div>
            </div>
        </div>
    );
};

export default PokedexPage;