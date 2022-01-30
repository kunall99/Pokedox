import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Buttons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      {
        (props.value == "next") ?
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              props.handleClick(e)
            }}
          >
            {props.value}
          </Button> :
          (props.Icount == 1) ?
            <Button
              variant="contained"
              color="primary"
              disabled
            >
              {props.value}
            </Button> :
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                props.handleClick(e)
              }}
            >
              {props.value}
            </Button>
      }
    </div>
  );
}

