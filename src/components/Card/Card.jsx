import React,{useContext} from 'react'
import Card from "@mui/material/Card"
import { AnimeContext } from '../../context/AnimeContext'
import "./Card.css"


export const Cardx = () => {
  const { animes } = useContext(AnimeContext);

  return (
    <div className="grid">
      {animes?.map((anime) => (
        <div key={anime.mal_id}>
          <img src={anime.images.jpg.image_url} alt={anime.canonicalTitle} />
          <h2>{anime.title}</h2>
        </div>
      ))}
    </div>
  );
};

