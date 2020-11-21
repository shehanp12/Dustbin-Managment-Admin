import React from "react";
import DriverDetails from "../../Components/Grid/DriverDetails";
import SmartDetails from "../../Components/Grid/SmartDetails";
import {AppBar} from "@material-ui/core";
import TruckDetails from "../../Components/Grid/TrucksDetails";
import ButtonAppBar from "../../Components/AppBar/AppBar";
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
            color: theme.palette.text.secondary,
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
            <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>
                    <DriverDetails />
                </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>
                    <TruckDetails/>
                </Paper>
            </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>
                        <SmartDetails/>
                    </Paper>
                </Grid>
            </Grid>


            <div style={{textAlign:'center'}}>

            </div>
            </div>


        </div>





    )

}

export default  Home
