import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { useStyles } from './SearchBarStyle';

export default function CustomizedInputBase(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={(e) => {
          props.setSearchValue(e.target.value)
        }}
      />
    </div>
  );
}
