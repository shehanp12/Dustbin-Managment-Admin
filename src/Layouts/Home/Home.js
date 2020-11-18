import React,{Component} from "react";
import ButtonAppBar from "../../Components/AppBar/AppBar";
import SpacingGrid from "../../Components/Grid/GridLayout";
import GridLayout from "../../Components/Grid/GridLayout";
import styles from  "../layouts.module.css"
import firestore from  "../../firebaseConfig"
class Home extends Component{

  state = {Bins:null}

componentDidMount() {
      console.log('mountend')
    let db = firestore.firestore()
    db.collection('Drivers').get().then(
        snapshot => {
          //   const Bins = []
          // snapshot.forEach(
          //     doc =>{
          //         const data = doc.data()
          //         Bins.push(data)
          //     })
          //   this.setState({ Bins:Bins})
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
              <div>
                  {
                    this.state.Bins &&   this.state.Bins.map(Bin=> <div>{Bin.BinLocation}</div>)
                  }
              </div>




            </>
        )
    }

}

export default Home
