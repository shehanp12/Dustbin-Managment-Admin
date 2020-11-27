import {useState, useEffect} from 'react';
import {projectDatabase} from "../firebaseConfig";
import useFirestore from "./useFirestore";


const useDatabase = (database) =>{

    const [mins,setMins] = useState([]);

    useEffect(() => {
        const minRef = projectDatabase.ref(database);
        minRef.on('value',(snapshot) =>{
            const min = snapshot.val();
            const mins = [];
            for(let id in min){
                mins.push(min[id]);
            }
            setMins(mins);

            })

        return () => minRef()
    },[database])


    return {mins}




}





export default useDatabase

