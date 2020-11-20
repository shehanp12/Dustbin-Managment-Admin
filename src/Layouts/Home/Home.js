import React from "react";
import DriverDetails from "../../Components/Grid/DriverDetails";
import SmartDetails from "../../Components/Grid/SmartDetails";
import {AppBar} from "@material-ui/core";



const Home = () =>{

    return (

         <>
             <AppBar/>
        <DriverDetails/>

        <SmartDetails/>
        </>




    )

}

export default  Home
