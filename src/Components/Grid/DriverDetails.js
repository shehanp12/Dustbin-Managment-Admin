import React from "react";
import useFirestore from "../../Hooks/useFirestore";


const DriverDetails = () =>{
    const {docs} = useFirestore('Drivers');

    console.log(docs)

    return(
        <div>
            <h1>Driver Details</h1>
            {
                docs.map(doc => {
                    return (
                        <div>
                            <p style={{fontWeight:'bold'}}>{doc.id}</p>
                           <p>Email:{doc.email}</p>
                            <p>{doc.address}</p>
                            <p>{doc.fullName}</p>
                            <p>{doc.nicNumber}</p>
                            <p>{doc.phoneNumber}</p>

                        </div>
                    )
                })
            }
        </div>
    )



}

export default  DriverDetails
