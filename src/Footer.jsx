import Buttons from "./Buttons"

let Footer = (props) => {

    function handleClick(e){
        if(e.target.textContent == "previous"){
            props.setIcount(props.Icount - 20)
            props.setCount(props.count - 20)
        }else{
            props.setIcount(props.count + 1)
            props.setCount(props.count+20)
        }
    }

    return (
        <div className="footer">

            <Buttons 
                value="previous"
                handleClick = {handleClick} 
                Icount = {props.Icount}
            />
            <Buttons 
                value="next"
                handleClick = {handleClick}
                Icount = {props.Icount}
            />

        </div>
    )
}

export default Footer;