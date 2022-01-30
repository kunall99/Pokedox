import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useStyles } from './statStyle';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    background: props => props.value <= 50
      ? '#F59C32' : props.value <= 75 ? 
      '#F5C538 ' : '#6FA856'
  },
}))(LinearProgress);

export default function CustomizedProgressBars(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      {
        props.stats.map((el, key) => (
          <div className={classes.spec} key={key}>
            <span className={classes.spec_name}>{el.name}</span>
            <span className={classes.spec_value}>{el.value*2}</span>
            <BorderLinearProgress variant="determinate" value={el.value} className={classes.bar} />
          </div>
        ))
      }

    </div>
  );
}
