import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    // maxHeight: 200
  },
});

const ImgMediaCard = props => {


  const classes = useStyles();

  return (
      
   
    <Card className={classes.root}>

        <CardContent style={{backgroundColor: props.color1}} >
          <Typography gutterBottom variant="h2" component="h2" style={{color: "white", fontSize:"64px"} }>
            0  {props.icon}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color: "white", fontSize:"20px"}}>
            {props.type}
          </Typography>
        </CardContent>

      <CardActions  style={{backgroundColor: props.color2, display:"flex", justifyContent:"center"}}>
        <Button size="small" style={{color: "white"}} >
          View More <i class="fas fa-angle-double-right" style={{marginLeft: "10px"}}></i>
        </Button>
      </CardActions>
    </Card>

  );
}

export default ImgMediaCard