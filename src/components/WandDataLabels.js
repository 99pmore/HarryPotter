export const WandDataLabels = ({ wand }) => {

    return (
        <>
            { wand.wood || wand.core || wand.length ?
                <div className="wand">
                    <h3>Wand: </h3>
                    <div className="wand-info">
                        { wand.wood ? <p><h4>Wood:</h4> { wand.wood }</p> : null }
                        { wand.core ? <p><h4>Core:</h4> { wand.core }</p> : null }
                        { wand.length ? <p><h4>Length:</h4> { wand.length }</p> : null }
                    </div>
                </div> 
            : null }
        </>
    )
}