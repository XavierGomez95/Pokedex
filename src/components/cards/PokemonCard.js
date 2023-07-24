import React, {useState} from 'react';
import { GetInfoButton } from "../buttons/GetInfoButton";
import PopupModal from "../modals/PopupModal";

const PokemonCard = ({ pokemons }) => {
    const [showPopupModal, setShowPopupModal] = useState(false);
    const [currentPokemon, setCurrentPokemon] = useState(null);

    /*const staticPokemonTypes = [
        "normal", "fire", "water", "electric", "grass", "ice", "fighting", "poison", "ground",
        "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy",
    ];*/

    const typeColors = {
        normal: '#A8A77A', fire: '#EE8130',  water: '#6390F0', electric: '#F7D02C',
        grass: '#7AC74C', ice: '#96D9D6', fighting: '#C22E28', poison: '#A33EA1',
        ground: '#E2BF65',  flying: '#A98FF3', psychic: '#F95587', bug: '#A6B91A',
        rock: '#B6A136', ghost: '#735797', dragon: '#6F35FC', dark: '#705746',
        steel: '#B7B7CE', fairy: '#D685AD',
    };

    const openInformationPopup = (pokemon) => {
        setShowPopupModal(true);
        setCurrentPokemon(pokemon);
    }

    const handleBack = () => {
        setShowPopupModal(false);
    }

    return (
        <div className="container mt-sm-3">
            <div className="row" >
                {pokemons.map((pokemon, index) => (
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
                        <div className="card">
                            <img
                                src={pokemon.sprites.front_default}
                                className="card-img-top"
                                alt={pokemon.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{pokemon.name} - #{pokemon.id.toString().padStart(4, '0')}</h5>
                                {pokemon.types.map((type, index) => {
                                    console.log(type.type.name);
                                    return (
                                        <p key={index} style={{ backgroundColor: typeColors[type.type.name], padding: '5px',
                                            color: 'white', borderRadius: '5px', display: 'inline-block', marginRight: '5px',
                                        }} >
                                            {type.type.name}
                                        </p>
                                    )
                                })}
                                <p>
                                    <GetInfoButton onClick={() => {
                                        openInformationPopup(pokemon);
                                    }}/>
                                </p>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {showPopupModal && (
                <PopupModal
                    pokemon={currentPokemon}
                    onBack={handleBack}
                />
            )}
        </div>
    );
};

export default PokemonCard;
