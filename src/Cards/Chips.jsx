import React from 'react';
import Chip from '@material-ui/core/Chip';
import { useStyles } from './ChipsStyle';

export default function Chips(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {
                props.types.map((el, key) => (
                    <Chip className={classes.spec} label={el} key={key}/>
                ))
            }
        </div>
    );
}