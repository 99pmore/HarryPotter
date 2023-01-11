export const CharacterDataLabels = ({ character }) => {

    return (
        <div className="data">
            { character.house ? <p><h3>House:</h3> { character.house }</p> : null }
            { character.dateOfBirth ? <p><h3>Birthday:</h3> { character.dateOfBirth }</p> : null }
            { character.gender ? <p><h3>Gender:</h3> { character.gender }</p> : null }
            { character.species ? <p><h3>Species:</h3> { character.species }</p> : null }
            { character.ancestry ? <p><h3>Ancestry:</h3> { character.ancestry }</p> : null }
        </div>
    )
}