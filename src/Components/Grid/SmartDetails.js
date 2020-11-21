import React from "react";
import useFirestore from "../../Hooks/useFirestore";


const SmartDetails = () =>{
    const {docs} = useFirestore('Bins');

    console.log(docs)

    return(
        <div style={{color:'Black'}}>
            <h1>SmartBin Details</h1>
            {
                docs.map(doc => {
                    return (
                        <div>
                           <p style={{fontWeight:'bold'}}>Smart Id :{doc.id}</p>



                        </div>
                    )
                })
            }
        </div>
    )



}

export default SmartDetails
