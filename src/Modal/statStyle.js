import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: '160px',
    borderRadius: 5,
    width: 380,
    margin: '10px 0 0 0'
  },
  bar: {
    borderRadius: 5,
    height: '15px',
    marginTop: '6px',
    width: '70%'
  },
  spec: {
    display: 'flex',
    marginTop: '5px'
  },
  spec_value: {
    display: 'flex',
    alignItems: 'center',
    width: '30px',
    fontSize: '13px'
  },
  spec_name: {
    display: 'flex',
    alignItems: 'center',
    width: '100px',
    fontSize: '13px'
  }

});