import React,{Component} from "react";
import ButtonAppBar from "../../Components/AppBar/ButtonAppBar";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DriverDetails from "../../Components/Grid/DriverDetails";
import NotificationDetails from "../../Components/Grid/NotificationDetails";

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

const Notification = () =>{
    const classes = useStyles()

    return(
        <div className={classes.root}>
            <ButtonAppBar/>
            <div style={{marginLeft:'20px'}}>


                <div style={{padding:'15px'}}>

                </div>

                <Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper} style={{fontWeight:'bold'}}>Notification Details</Paper>

                    </Grid>
                    <div style={{padding:'15px'}}>

                    </div>

                </Grid>

                            <NotificationDetails />



            </div>
                </div>

    )
}

export default Notification
