import React,{Component} from "react";
import ButtonAppBar from "../../Components/AppBar/AppBar";
import SpacingGrid from "../../Components/Grid/GridLayout";
import GridLayout from "../../Components/Grid/GridLayout";
import styles from  "../layouts.module.css"
import firestore from  "../../firebaseConfig"
class Home extends Component{

  state = {students:null}

componentDidMount() {
      console.log('mountend')
    let db = firestore.firestore()
    db.collection('Bins').get().then(
        snapshot => {
            console.log(snapshot)
        }).catch(
            error => console.log(error)
    )

}

    render() {
        return(

            <>
                <div>
                    <ButtonAppBar/>
                </div>

            <div className={styles.center}>
                <GridLayout/>
            </div>





            </>
        )
    }

}

export default Home
