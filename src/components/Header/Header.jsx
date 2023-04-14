import React, {useContext} from "react";
import { Outlet } from "react-router-dom";
import { AnimeContext } from '../../context/AnimeContext'

import "./header.css"
export const Header = () => {
  const {query, setQuery} = useContext(AnimeContext)
  const capitalizedQuery = typeof query === "string" ? query.charAt(0).toUpperCase() + query.slice(1) : "";

 
  return (
    <div> 
    <div className="asd">
     <h2>Anime!</h2>
     <input type="text" onChange={event => setQuery(event.target.value)} value={query} placeholder="Search your favourite anime!" />

     <p>Buscando: {capitalizedQuery}</p>
    </div>
      <Outlet />
    </div>
  );
};
