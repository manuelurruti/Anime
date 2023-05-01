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
     <h2 className="p-3">Anime!</h2>

   
     <input className="input" type="text" onChange={event => setQuery(event.target.value)} value={query} placeholder="Search your favourite anime!" />
    </div>
      <Outlet />
    </div>
  );
};
