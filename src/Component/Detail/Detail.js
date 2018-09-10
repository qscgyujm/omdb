import React from 'react';
import './detail.scss';

const Detail = (props) => {
  console.log('props', props);
  const { Actors, Awards, BoxOffice, Country, DVD, Director, Genre, Language, Metascore,
    Plot, Poster, Production, Rated, Ratings, Released, Response, Runtime, Title,
    Type, Website, Writer, Year, imdbID, imdbRating, imdbVotes } = props;

    console.log(typeof Ratings);
  return (
    <div className='row detail' >
      <div className='col-6 left'>
        <img src={Poster} alt="" />
      </div>
      <div className='col-6 right'>
        <p>Actors:{Actors}</p>
        <p>Awards:{Awards}</p>
        <p>BoxOffice:{BoxOffice}</p>
        <p>Country:{Country}</p>
        <p>DVD:{DVD}</p>
        <p>Director:{Director}</p>
        <p>Genre:{Genre}</p>
        <p>Language:{Language}</p>
        <p>Metascore:{Metascore}</p>
        <p>Plot:{Plot}</p>
        <p>Production:{Production}</p>
        <p>Rated:{Rated}</p>
        <p>Released:{Released}</p>
        <p>Response:{Response}</p>
        <p>Runtime:{Runtime}</p>
        <p>Title:{Title}</p>
        <p>Type:{Type}</p>
        <p>Website:{Website}</p>
        <p>Writer:{Writer}</p>
        <p>Year:{Year}</p>
        <p>imdbID:{imdbID}</p>
        <p>imdbRating:{imdbRating}</p>
        <p>imdbVotes:{imdbVotes}</p>
      </div>
    </div>
  );
};

export default Detail;