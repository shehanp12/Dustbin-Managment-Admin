import React from "react";
import ButtonAppBar from "../../Components/AppBar/AppBar";
import  {GoogleMap,withGoogleMap,withScriptjs} from "react-google-maps";


const GoogleMaps = () =>{

    return(
        <GoogleMap defaultZoom={10}
                   defaultCenter={{lat:45.23,lng:-75}}/>
    );

}

const WrappedMap= withScriptjs(withGoogleMap(Map));



export default  GoogleMaps
