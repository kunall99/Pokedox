import React,{useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chips from "./Chips";
import CustomizedDialogs from "../Modal/Modal";
import { useStyles } from './CardsStyle';

export default function Cards(props) {
    let randomColor = ['#50CFB1', '#F96D6F', '#639FB4', '#c8cf7c', '#d676a8','#d68876'];
    let bColor = '';
    bColor = randomColor[Math.floor(Math.random() * randomColor.length)];
    const classes = useStyles();
    return (
        
        <div className={classes.main}>
            <Card 
                className={classes.car} 
                style={{background: bColor, boxShadow: `0.5px 0.5px 15px 1px ${bColor}`}}
            >
                <div className={classes.box1}>
                    <CardContent className={classes.content}>
                        <Typography className={classes.heading} component="h4" variant="h4">
                            {props.name}
                        </Typography>
                        <Chips types={props.types}/>
                    </CardContent>
                </div>
                <div className={classes.box2}>
                    <Typography className={classes.id} variant="subtitle1" color="textSecondary">
                        {
                            (props.id < 10) ? 
                                <>#00{props.id}</> : 
                                (props.id < 100) ? 
                                <>#0{props.id}</> :
                                <>#{props.id}</>
                        }
                    </Typography>
                    <CardMedia
                        className={classes.img}
                        image={props.image}
                        title={props.name}
                    />
                </div>
            </Card>
            <CustomizedDialogs 
                image={props.image}
                name={props.name}
                stats={props.stats}
                bColor={bColor}
            />
        </div>
    );
}
