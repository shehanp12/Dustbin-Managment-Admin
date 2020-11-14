import React,{Component} from "react";
import LoadingScreen from "../Loading/Loading";


//from material ui
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import Field from './../common/Field'
import {withStyles} from '@material-ui/core/styles'

const fields = [
    {name:"email", type: "email" , placeholder:"Email", width:1, required:true},
    {name:"password", type: "password" , placeholder:"Password" , width:1, required:true},
]

const styles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    textField: {
        width:'100%'
    },
    logo:{
        width:'200px',
        height:'auto'
    }
})
