// TODO: This component should render a single pokemon's stats and image.

const PokemonCard = () => {
    return (
        <div className="ui card">
            <div>
                <div className="image">
                    <img alt="pokemon name" src="" />
                </div>
                <div className="content">
                    <div className="header">Pokemon name</div>
                </div>
                <div className="extra content">
                    <span>
                        <i className="icon heartbeat red" />
                        Pokemon HP
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard