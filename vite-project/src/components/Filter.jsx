// TODO: Make this a controlled component. On each stroke of the key, it should filter the displayed pokemon

const Filter = () => {
    return (
        <div className="ui search">
            <div className="ui icon input">
                <input className="prompt" placeholder="Search by Name..." />
                <i className="search icon" />
            </div>
        </div>
    )
}

export default Filter