import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '450px',
        height: '40px',
        boxShadow:'0px 0px 10px 0.5px black',
        borderRadius:'10px'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
}));