import React,{useState, useEffect} from "react";
import { AnimeContext } from "./AnimeContext";

export const AnimeProvider = ({ children }) => {
 const [animes, setAnimes] = useState([]);
 const [query, setQuery] = useState([])
 


 useEffect(() => {
  const fetchAnimes = async () => {
    try {
      const URL = `https://api.jikan.moe/v4/anime?&limit=20`;
      const res = await fetch(URL);
        const data = await res.json();
        setAnimes(data.data)

   

    } catch (error) {
      console.error(error);
      setAnimes([])

    }
  }


  fetchAnimes();
}, []);

useEffect(() => {
  const searchAnime = async () =>{
    try {
      const url = `https://api.jikan.moe/v4/anime?q=${query}&limit=20`
      const res = await fetch(url);
      const data = await res.json()
      setAnimes(data.data)

  
    }
    catch(error){
      console.error(error)
    }
  }
  
  searchAnime()
  },[query])



  return (
    <AnimeContext.Provider value={{ animes, query, setQuery }}>
      {children}
    </AnimeContext.Provider>
  );
};





