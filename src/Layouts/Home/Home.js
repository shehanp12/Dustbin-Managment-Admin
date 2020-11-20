import React from "react";
import DriverDetails from "../../Components/Grid/DriverDetails";
import SmartDetails from "../../Components/Grid/SmartDetails";
import {AppBar} from "@material-ui/core";
import TruckDetails from "../../Components/Grid/TrucksDetails";



const Home = () =>{

    return (

         <>
             <AppBar/>
        <DriverDetails/>
         <TruckDetails/>
        <SmartDetails/>
        </>




    )

}

export default  Home
