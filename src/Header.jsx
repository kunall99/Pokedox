import Dropdown from "./DropDown/Dropdown";
import Searchbar from "./SearchBar/Searchbar";

let Header = (props) => {
    return (
        <div className="header">
            <Searchbar
                setSearchValue={props.setSearchValue}
                searchValue={props.searchValue}
                setPokemonSearchName={props.setPokemonSearchName}
            />

            <Dropdown
                types={props.types}
                setSelectedType={props.setSelectedType}
            />
        </div>
    )
}

export default Header;