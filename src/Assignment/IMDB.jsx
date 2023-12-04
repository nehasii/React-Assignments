import axios from "axios";
import React, { useEffect, useState } from "react";

function MovieList(){
    let [movies, setMovies] = useState([]);
    let [search, setSearch] = useState('');
    let [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetchMovies();
  }, [search]);

  async function fetchMovies(){
    try {
      let Mdata = await axios.get(`http://www.omdbapi.com/?s=${search}&apikey=a076f0c7`);
      setMovies(Mdata.data.Search || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data from OMDB:', error);
      setLoading(false);
    }
}

  let searchvalue=({target:{value}}) => {
    setSearch(value)
}

  return (
    <div className="container">
      <h1 style={{textAlign:"center"}}>Movie List</h1>
      <input type="text" placeholder="Search for a movie..." onChange={searchvalue}/>
      {loading && <p>Loading...</p>}
      <section>
        {movies.map(({imdbID,Title,Poster,Year}) => (
          <div key={imdbID}>
            <img src={Poster} alt={Title} />
            <h3>{Title}</h3>
            <p>Year: {Year}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MovieList;