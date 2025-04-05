import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constents/constents'
import axios from '../../axios'
import './Banner.css'

function Banner() {
  const[movie,setMovie] = useState()
  useEffect(() => {
    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data.results[0])
        const results= response.data.results;
        const randomIndex=Math.floor(Math.random() * results.length);
        setMovie(response.data.results[randomIndex])
      })
      .catch((error) => {
        console.error("Error fetching trending movies:", error);
      });
  }, [])
  return (
    <div
  style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}} 
    className="Banner">
        <div className="content">
            <h1 className="title">{movie? movie.title : ""}</h1>
            <div className="banner_buttons">
                <button className="button" >play</button>
                <button className="button">mylist</button>
            </div>
            <h1 className="description">{movie?.overview}</h1>
        </div>
        <div className="fade">
          
        </div>
      
    </div>
  )
}

export default Banner

