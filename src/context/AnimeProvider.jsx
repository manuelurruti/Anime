import React,{useState, useEffect} from "react";
import { AnimeContext } from "./AnimeContext";

export const AnimeProvider = ({ children }) => {
 const [animes, setAnimes] = useState([]);
 const [query, setQuery] = useState('')
 


 useEffect(() => {
  const fetchAnimes = async (limit = 10) => {
    try {
      const URL = `https://api.jikan.moe/v4/anime?&limit`;
      const res = await fetch(`${URL}=${limit}`);
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
  let timeoutId;
  const searchAnime = async (limit = 10) =>{
    try {
      const url = `https://api.jikan.moe/v4/anime?q=${query}&limit=${limit}`
      const res = await fetch(url);
      const data = await res.json()
      setAnimes(data.data)
  
    }
    catch(error){
      console.error(error)
    }
  }
  
  const handleSearch = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      searchAnime();
    }, 500);
  };

  handleSearch();
  

  return () => {
    clearTimeout(timeoutId);
  }
},[query])


  return (
    <AnimeContext.Provider value={{ animes, query, setQuery }}>
      {children}
    </AnimeContext.Provider>
  );
};





