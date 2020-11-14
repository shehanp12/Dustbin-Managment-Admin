import React, {Component} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

class LoadingScreen extends Component {
    constructor(props) {
        super(props)
        this.state={
            progress:0,
            width:this.props.width,
            height:this.props.height,
            translateY:this.props.translateY
        }
    }
    //Loading screen timer
    progress = 0;

    showLoadingScreen = () => {
        this.progress = setInterval(() => {
            console.log('ticking')
            this.setState({progress:this.state.progress===100 ? 0 : this.state.progress +1})
        },50)
    }

    hideLoadingScreen = () => {
        this.setState({loading:false})
        clearInterval(this.progress)
    }

    componentDidMount(){
        this.showLoadingScreen()

    }

    componentWillUnmount(){
        this.hideLoadingScreen()
    }

    render(){
        return(
            <div
                className="bg-light"
                style={{
                    position:'absolute',
                    width:this.state.width,
                    height:this.state.height,
                    opacity:'90%',
                    top:'0',
                    zIndex:'20',
                    textAlign:'center'
                }}
            >
                <div style={{transform:'translateY('+this.state.translateY+')'}} >
                    <CircularProgress size={50} variant="determinate" value={this.state.progress} />
                    <br></br>
                    {this.props.message!=null?
                        this.props.message
                        :null
                    }
                </div>
            </div>
        )
    }
}

export default LoadingScreen
