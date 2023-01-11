import { useLocation } from 'react-router-dom';

export const CharacterInfo = () => {

    const location = useLocation()
    const character = location.state.character

    return (
        <main className="character-info">
            <div className="wrapper">
                <div className="img-container">
                    <img src={ character.image } alt={ character.name + ' image' } />
                </div>
                <div className="info-container">
                    <h2>{ character.name }</h2>
                    <div className="info">
                        { character.house ? <p>House: { character.house }</p> : null }
                        { character.dateOfBirth ? <p>Birthday: { character.dateOfBirth }</p> : null }
                        { character.gender ? <p>Gender: { character.gender }</p> : null }
                        { character.species ? <p>Species: { character.species }</p> : null }
                        { character.ancestry ? <p>Ancestry: { character.ancestry }</p> : null }
                    </div>
                </div>
                { character.wand.wood || character.wand.core || character.wand.length ?
                            <div className="wand">
                                <h2>Wand: </h2>
                                <div className="wand-info">
                                    { character.wand.wood ? <p>Wood: { character.wand.wood }</p> : null }
                                    { character.wand.core ? <p>Core: { character.wand.core }</p> : null }
                                    { character.wand.length ? <p>Length: { character.wand.length }</p> : null }
                                </div>
                            </div> 
                : null }
            </div>
        </main>
    )
}