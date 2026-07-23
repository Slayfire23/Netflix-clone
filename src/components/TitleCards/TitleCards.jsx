import { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom';

const TitleCards = ({title, category}) => {

const [apiData, setApiData] = useState([]);
const cardsRef = useRef ();

useEffect (() => {
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDcxZmQyNmFhYTg4ZTQyMTIzZWQ4ZjJmM2QwNGRjZiIsIm5iZiI6MTc3NzE1MDQwMS42MzgsInN1YiI6IjY5ZWQyOWMxZDI2ZDk2Yjg2YzAyOTFmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nWQEZcODhRof90yIR54dQIYer1y-kM5rjspfEmwzv3E'
  }
};

const handleWheel = (event) => {
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}
const cardsElement = cardsRef.current;

fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

  cardsElement.addEventListener('wheel', handleWheel)

  return () => cardsElement.removeEventListener('wheel', handleWheel)
}, [category])

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
