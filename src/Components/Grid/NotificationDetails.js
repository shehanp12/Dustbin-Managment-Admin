import React from "react";
import useFirestore from "../../Hooks/useFirestore";


const DriverDetails = () =>{
    const {docs} = useFirestore('notification');

    console.log(docs)

    return(
        <div style={{color:'Black'}}>
            <div >
                <h1  >Notification Details</h1>
                {
                    docs.map(doc => {
                        return (
                            <div>
                                <p style={{fontWeight:'bold'}}>Driver Id :{doc.id}</p>
                                <p>Email :{doc.FullName}</p>
                                <p>Notification:{doc.Notification}</p>


                            </div>
                        )
                    })
                }
            </div>
        </div>
    )



}

export default  DriverDetails
