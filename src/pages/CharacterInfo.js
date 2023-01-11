import { useLocation } from 'react-router-dom';
import { CharacterDataLabels } from '../components/CharacterDataLabels'
import { WandDataLabels } from '../components/WandDataLabels';

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
                        <CharacterDataLabels character={ character } />
                        <WandDataLabels wand={ character.wand } />
                    </div>

                </div>

            </div>
        </main>
    )
}