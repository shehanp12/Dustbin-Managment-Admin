import React from "react";
import ButtonAppBar from "../../Components/AppBar/AppBar";
import styles from  "../layouts.module.css"
import useFirestore  from '../../Hooks/useFirestore'
import DriverDetails from "../../Components/Grid/DriverDetails";



const Home = () =>{
    const {docs} = useFirestore('Bins');
    console.log(docs)
    return (


<>

    <DriverDetails/>

    <div>
        <h1>Smart Bin Details</h1>
    </div>
           { docs.map(doc => {
                return(
                    <div >

                     <p >Bin Id</p>
                        <p>{doc.BinId}</p>
                    </div>
                )})}


                </>



    )

}

export default  Home
