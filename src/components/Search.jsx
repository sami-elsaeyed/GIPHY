import {Component} from 'react'

import GifDisplay from './GifDisplay'

class Search extends Component{
    handleParam=(event)=>{
        <GifDisplay param={event.target.value}/>
        
    }
        render(){
                return(
                    <input type="text" name="param" onChange={this.handleParam} />

                )

        }

}
export default Search