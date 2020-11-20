import React from "react";
import useFirestore from "../../Hooks/useFirestore";


const TruckDetails = () =>{
    const {docs} = useFirestore('Trucks');

    console.log(docs)

    return(
        <div>
            <h1>Truck Details</h1>
            {
                docs.map(doc => {
                    return (
                        <div>
                            <p style={{fontWeight:'bold'}}>{doc.id}</p>
                            <p>{doc.Capacity}</p>

                        </div>
                    )
                })
            }
        </div>
    )



}

export default  TruckDetails
