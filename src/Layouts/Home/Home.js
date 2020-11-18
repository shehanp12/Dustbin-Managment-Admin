import React,{useState,useEffect,Component} from "react";
import ButtonAppBar from "../../Components/AppBar/AppBar";
import SpacingGrid from "../../Components/Grid/GridLayout";
import GridLayout from "../../Components/Grid/GridLayout";
import styles from  "../layouts.module.css"
import useFirestore  from '../../Hooks/useFirestore'
import SimpleCard from "../../Components/Grid/GridLayout";


const Home = () =>{
    const {docs} = useFirestore('Bins');
    console.log(docs)

    return (
        <>
       <ButtonAppBar/>
       <div className={styles.center}>
           <SimpleCard/>
       </div>

       </>
    )

}

export default  Home
