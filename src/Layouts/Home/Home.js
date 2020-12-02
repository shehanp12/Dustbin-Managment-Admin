import React from "react";
import DriverDetails from "../../Components/Grid/DriverDetails";
import SmartDetails from "../../Components/Grid/SmartDetails";
import TruckDetails from "../../Components/Grid/TrucksDetails";
import ButtonAppBar from "../../Components/AppBar/ButtonAppBar";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.primary,

        },
    }),
);

const Home = () =>{
    const  classes = useStyles()

    return (

        <div className={classes.root} >
            <ButtonAppBar/>
            <div style={{marginLeft:'20px'}}>
            <div style={{padding:'15px'}}>
            </div>
            <Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper} style={{fontWeight:'bold'}}>Driver Details</Paper>
                </Grid>
                <div style={{padding:'15px'}}>
                </div>
                    <DriverDetails/>
                <div style={{padding:'15px'}}>
                </div>
                <Grid item xs={3}>
                    <Paper className={classes.paper} style={{fontWeight:'bold'}}>SmartBin Details</Paper>
                </Grid>
                <div style={{padding:'15px'}}>
                </div>
                 <SmartDetails/>
                <div style={{padding:'15px'}}>
                </div>
                <Grid item xs={3}>
                    <Paper className={classes.paper} style={{fontWeight:'bold'}}>Truck Details</Paper>
                </Grid>
                <div style={{padding:'15px'}}>
                </div>
                <TruckDetails/>
            </Grid>




            </div>


        </div>





    )

}

export default  Home
