import React, {useState} from 'react';
import { GetInfoButton } from "../buttons/GetInfoButton";
import PopupModal from "../modals/PopupModal";

const CardTemplate = ({ pokemons }) => {
    const [showPopupModal, setShowPopupModal] = useState(false);
    const [currentPokemon, setCurrentPokemon] = useState(null);
    const openInformationPopup = (pokemon) => {
        setShowPopupModal(true);
        setCurrentPokemon(pokemon);
    }

    const handleBack = () => {
        setShowPopupModal(false);
    }

    return (
        <div className="container mt-4">
            <div className="row">
                {pokemons.map((pokemon, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card">
                            <img
                                src={pokemon.sprites.front_default}
                                className="card-img-top"
                                alt={pokemon.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{pokemon.name} - #{pokemon.id.toString().padStart(3, '0')}</h5>
                                <p className="card-text">{pokemon.id}</p>
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

export default CardTemplate;
