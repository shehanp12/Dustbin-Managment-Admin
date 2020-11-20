import React from "react";
import useFirestore from "../../Hooks/useFirestore";


const SmartDetails = () =>{
    const {docs} = useFirestore('Bins');

    console.log(docs)

    return(
        <div>
            <h1>SmartBin Details</h1>
            {
                docs.map(doc => {
                    return (
                        <div>
                           <p>{doc.id}</p>
                            <p>{doc.BinLocation.latitude}</p>


                        </div>
                    )
                })
            }
        </div>
    )



}

export default SmartDetails
