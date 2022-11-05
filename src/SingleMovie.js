import React, { useEffect, useState } from "react";
import {NavLink, useParams } from "react-router-dom";
import { API_URL } from "./context";

const SingleMovie = () => {
    const {id} =useParams();
    console.log(id);
    const [isLoading,setIsLoading] = useState(true);
    // const [isError,setIsError]=useState({show: "false", msg:""});
     const [movie, setMovie] =useState("");
    
    const getMovies =async(url)=>{
      setIsLoading(true);

      try{
        const res =await fetch(url);
        const data =await res.json();
        console.log(data);
        if(data.Response === "True"){
          setIsLoading(false);
          setMovie(data);
          console.log(data);
        }
        // else{
        //   setIsError({
        //     show: true,
        //     msg:data.error,
        //   });
        // }
      }catch(error){
        console.log(error);
      }
    };
    useEffect(()=>{
      // getMovies(`${API_URL}&i=${id}`);
      let timeout=setTimeout(() => {
        getMovies(`${API_URL}&i=${id}`);
      }, 500);

      return () => clearTimeout(timeout);
    },[id]);

    if(isLoading){
    return(
      <div className="movie-section">
        <div className="loading">Loading...</div>
      </div>
    );
  } 

  return (
     <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
         <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating}</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/" className="back-btn">Go Back</NavLink>
         </div>
      </div>
     </section>
  );
};

export default SingleMovie