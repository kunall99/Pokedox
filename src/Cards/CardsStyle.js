import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    car: {
        display: 'flex',
        width: '250px',
        height: '160px',
        borderRadius: '20px 20px 0 0',
    },
    box1: {
        display: 'flex',
        flexDirection: 'column',
        width: '60%'
    },
    box2: {
        width: '40%'
    },
    content: {
        flex: '1 0 auto',
        width: '150px',
        paddingBottom: '24px',
        paddingTop: '30px',
        paddingLeft: '24px'
    },
    heading: {
        fontSize: '25px',
        marginBottom: '10px',
        color: 'white'
    },
    spec: {
        fontSize: '7px',
        color: 'white',
        height: '20px',
        width: 'fit-content'
    },
    img: {
        height: '70%',
        zIndex: '3',
        width: '90px',
        backgroundSize: 'contain',
        position: 'relative',
        bottom: '4px',
        right: '7px'
    },
    id: {
        height: '40px',
        fontSize: '25px',
        position: 'relative',
        top: '12px',
        right: '-22px',
        color: 'black',
        fontWeight: '100',
        zIndex: '1'
    },
    main:{
        display:'flex',
        flexDirection:'column',
        margin:'20px'
    }
}));