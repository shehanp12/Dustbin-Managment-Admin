import React from "react";
import ButtonAppBar from "../../Components/AppBar/AppBar";
import  {GoogleMap,withGoogleMap,withScriptjs} from "react-google-maps";


const Map = () =>{

    return(
        <GoogleMap defaultZoom={10}
                   defaultCenter={{lat:45.23,lng:-75}}/>
    );

}
export default  Map

export const WrappedMap= withScriptjs(withGoogleMap(Map));



