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
            color: theme.palette.text.secondary,
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
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>
                            <NotificationDetails />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
                </div>

    )
}

export default Notification
