import Cards from "./Cards/Cards"

let Content = (props) => {

    let filteredObj = props.pokemon.filter((el) => {
        if(props.selected_type == "normal" || props.selected_type == "")
            return el;
        else if(el.types.includes(props.selected_type)){
            return el;
        }
    })

    filteredObj = filteredObj.filter((el) => {
        let tempname = el.name;
        tempname = tempname.toLowerCase();
        let tempid = el.id;
        let matchData = props.searchValue.toLowerCase();
        return (tempname.includes(matchData)) || (tempid.includes(matchData));
    })
    
    return (
        <div className="content">

            {
                filteredObj.map((obj, key) => (
                    <Cards 
                        key={key}
                        name={obj.name}     
                        id={obj.id} 
                        types={obj.types} 
                        image={obj.image} 
                        stats={obj.stats}
                    />
                ))
            }
        </div>
    )
}

export default Content;