import {useState, useEffect} from 'react';
import {projectFirestore} from "../firebaseConfig";


const useFire = (collection) => {
    const [eagle,setDocs] = useState([]);

    useEffect(() => {
        const  unsub=   projectFirestore.collection(collection)
            .onSnapshot((snapshot => {
                let documents = [];
                snapshot.forEach(
                    eagle =>{
                        documents.push({...eagle.data(),id:eagle.id});
                    });

                setDocs(documents);
            }));




        return () => unsub()
    },[collection])

    return {eagle};
}

export default useFire
