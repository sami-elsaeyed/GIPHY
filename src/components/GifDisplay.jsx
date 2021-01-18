import {Component} from 'react'
import axios from 'axios'

import GifWin from './GifWin'

class GifDisplay extends Component{
    constructor(props){
        super(props)
        this.state={
            gifs:[],
            search: "",
            toggle:false
        }
    }
    
    async componentDidMount(){
         try {
             let gifs= await axios.get('https://api.giphy.com/v1/gifs/trending?api_key=1o8AUBomZfFiFgSW97q1LQgqOf0CZdYR&limit=25&rating=g')
             console.log(gifs)
             this.setState({gifs:gifs.data.data })
         } catch (error) {
         console.error(error)
         }
     }
     search=()=>{
       fetch('https://api.giphy.com/v1/gifs/trending?api_key=1o8AUBomZfFiFgSW97q1LQgqOf0CZdYR&limit=25&rating=g')
       .then((response) => {return response.json()})
       .then((response) => {
         this.setState({ gif: response.data });
       })
       .catch((error) => console.error(error));
   }

    handleParam=(event)=>{
        this.setState({search:event.target.value})}
    render(){
        return <div>
            <input type="text" name="param" onChange={this.handleParam} />
            <button onClick={this.search} >Search</button>
            <button onClick={this.componentDidMount}>Trending</button>
            
            {this.state.gifs.map((gif, index)=>{
                console.log(gif.url)
                return (
                <GifWin key={index} num={index+1} id ={gif.id} gif={gif.url}/>
            )
            })}
        </div>
            }
    

}

export default GifDisplay