import React from "react";
import { useState } from "react";
function Gif()
{
    const api="bgAmQSX9YTgqnWaPITDEpRQ4lfjlM88a"
    const[gif,setgif]=useState('')
    const[search,setsear]=useState('')
    const url=`https://api.giphy.com/v1/gifs/random?api_key=${api}&tag=${search}`
    const clickhandler=()=>{
        fetch(url)
          .then(response=>response.json())
          .then(data=>{setgif(data.data.images.downsized_large.url)})
    }

    const clicksearch=(event)=>{
        setsear(event.target.value)
    }
    return(
        <div className="con">
                <h2 className="head">A Random Gif</h2>
                <img src={gif} className="im"alt=""></img>
                <input
                type="text"
                id="one"
                className="in"
                placeholder="enter the gif category"
                value={search}
                onChange={clicksearch}
                />
                <button className="bt" onClick={clickhandler}><strong>Generate</strong></button> 
        </div>
      
    )
}
export default Gif