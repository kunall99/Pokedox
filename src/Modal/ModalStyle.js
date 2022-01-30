import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    content:{
        display:'flex',
        flexDirection:'row',
        height:'80%'
    },
    heading:{
        height:'20%',
        display:'flex',
        justifyContent:'center',
        alignContent:'center'
    },
    left:{
        width:'25%',
        padding:'6px'
    },
    right:{
        width:'75%',
        padding:' 0 20px 0 20px'
    },
    click:{
        borderRadius:'0 0 20px 20px',
        border:'none',
        color:'white',
        fontSize:'12px',
        '&:hover':{
            border:'none'
        }
    }
}));