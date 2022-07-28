import '../style/searchbar.css'

export const SearchBar = (props) => {
    return (
        <div className="search-div">
            <input className="search-bar" onChange={(e)=>props.setSearchValue(e.target.value)}/>
        </div>
    )
}