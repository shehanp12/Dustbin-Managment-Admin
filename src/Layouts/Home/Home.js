import React,{useState,useEffect,Component} from "react";
import ButtonAppBar from "../../Components/AppBar/AppBar";
import SpacingGrid from "../../Components/Grid/GridLayout";
import GridLayout from "../../Components/Grid/GridLayout";
import styles from  "../layouts.module.css"
import useFirestore  from '../../Hooks/useFirestore'


const Home = () =>{
    const {docs} = useFirestore('Bins');
    console.log(docs)

    return (
        <div>
            hello
        </div>
    )

}

export default  Home
