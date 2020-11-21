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
                            <p style={{fontWeight:'bold'}}>Driver Id :{doc.id}</p>
                           <p>Email :{doc.email}</p>
                            <p>Address :{doc.address}</p>
                            <p>Full Name:{doc.fullName}</p>
                            <p>NIC Number:{doc.nicNumber}</p>
                            <p>Phone Number:{doc.phoneNumber}</p>

                        </div>
                    )
                })
            }
        </div>
    )



}

export default  DriverDetails
