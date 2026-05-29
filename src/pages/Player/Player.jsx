import React, { useEffect, useState } from 'react'
import './Player.css'
import BackArrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();

  const navigate = useNavigate();

const [apiData, setApiData] = useState ({
  name: "",
  key: "",
  published_at: "",
  typeof: ""
})
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDcxZmQyNmFhYTg4ZTQyMTIzZWQ4ZjJmM2QwNGRjZiIsIm5iZiI6MTc3NzE1MDQwMS42MzgsInN1YiI6IjY5ZWQyOWMxZDI2ZDk2Yjg2YzAyOTFmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nWQEZcODhRof90yIR54dQIYer1y-kM5rjspfEmwzv3E'
  }
};

useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));

},[])

  return (
    <div className='player'>
      <img 
      src={BackArrow} 
      alt=""
      onClick={() => {
        navigate(-1)
      }} />
      <iframe 
      src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer'
      frameborder="0"
      allowFullScreen 
      width='90%'
      height='90%'
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player