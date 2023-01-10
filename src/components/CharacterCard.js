export const CharacterCard = ({ character }) => {

    return (
        <div className="character-card">
            <div className="card-img">
                <img src={ character.image } alt={ character.name + ' image' } />
            </div>
            <div className="card-info">
                <h2>{ character.name }</h2>
            </div>
        </div>
    )
}