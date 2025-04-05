import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import './Rowcost.css'
import {imageUrl,API_KEY} from '../../constents/constents'
import axios from '../../axios'

function Rowcost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,setUrlId] = useState('')
   
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    })
    .catch(error=>{
      console.error("Error fetching data:", error.response ? error.response.data : error.message);

    })
  },[props.url])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }
    })
    .catch((error) => {
      console.error("Error fetching movie videos:", error.message);
    });


  }
  return (
    <div className="row" >
        <h1>{props.title}</h1>
        <div className="posters">
          {movies.map((obj,index)=> 
         <img onClick={()=>handleMovie(obj.id)} className={`${props.isSmall ? 'smallposter':"poster"} ${props.horrposter ? 'horrposter' :""}`} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />

          )}
           
        </div>
    { urlId && <Youtube videoId={urlId.key} opts={opts}/> }
    </div>
  )
}

export default Rowcost
