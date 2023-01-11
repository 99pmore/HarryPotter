import { useNavigate  } from "react-router-dom";

export const CharacterCard = ({ character }) => {

    const navigate = useNavigate();
    const toCharacter = () => {
        navigate(`/characters/${character.name}`, 
        { 
            state: { character } 
        })
    }

    return (
        <>
            <div className="character-card" onClick={ toCharacter }>
                <div className="card-img">
                    <img src={ character.image } alt={ character.name + ' image' } />
                </div>
                <div className="card-info">
                    <h2>{ character.name }</h2>
                </div>
            </div>
        </>
    )
}