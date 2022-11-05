import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

const Movies = () => {
  const {movie, isLoading} = useGlobalContext();

  if(isLoading){
    return(
      <div className="  ">
        <div className="classname">Loading...</div>
      </div>
    );
  }

  return (
   <section className="">
    <div className="container grid grid-4-col">
        {movie.map((curmovie)=>{
          const {imdbID,Title,Poster} =curmovie;
          const moviename =Title.substring(0,15);
          return <NavLink to={`movie/${imdbID}`}>
               <div className="card">
                <div className="card_info">
                  <h2>{moviename.length >= 15 ? `${moviename}...` : moviename}</h2>
                  <img src={Poster} alt={imdbID} />
                </div>
               </div>
          </NavLink>
        })
        }
    </div>
   </section>
  );
};
export default Movies;