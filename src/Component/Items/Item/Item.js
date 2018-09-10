import React from 'react';
import { Link } from 'react-router-dom'


const Item = (props) => {
  const { Title, Year, imdbID, Type, Poster, getDetailHandler } = props;

  return (
    <div className='col-2 item'>
      <Link to='/detail' onClick={() => getDetailHandler(imdbID)} >
        <img src={Poster} alt="" />
        <p>{Title}</p>
      </Link>
    </div>
  );
};

export default Item;