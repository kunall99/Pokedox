import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection:'column',
        '& > *': {
            margin: theme.spacing(0.2),
        },
    },
    spec: {
        fontSize: '7px',
        color: 'white',
        height: '18px',
        width: 'fit-content',
        fontSize:'10px',
        background:'lightgrey'
    },
}));