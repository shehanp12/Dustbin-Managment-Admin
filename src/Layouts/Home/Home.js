import React from "react";
import DriverDetails from "../../Components/Grid/DriverDetails";
import SmartDetails from "../../Components/Grid/SmartDetails";
import {AppBar} from "@material-ui/core";
import TruckDetails from "../../Components/Grid/TrucksDetails";
import ButtonAppBar from "../../Components/AppBar/AppBar";



const Home = () =>{

    return (
        <div>
            <ButtonAppBar/>
            <AppBar/>
            <DriverDetails/>
            <TruckDetails/>
            <SmartDetails/>
        </div>





    )

}

export default  Home
