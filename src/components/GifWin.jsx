import React from 'react'

const GifWin=(props)=>{
    return <div>
        <a target="_blank" href={props.gif} alt={props.id}>Gif {props.num}</a>
    </div>
    }
export default GifWin