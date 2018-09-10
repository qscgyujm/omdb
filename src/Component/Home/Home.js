import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './home.scss';

class Home extends Component {

  render() {
    const { title, year, type, options } = this.props;
    const { changeTitleHandler, changeYearHandler, changeSelectHander, submitHandler } = this.props;

    return (
      <div className='home' >
        <h1 className='title' >
          Let's find out...
        </h1>
        <div>
          <label htmlFor="">Title</label>
          <input name='title' type="text" onChange={changeTitleHandler} value={title} />
          {' '}
          <label htmlFor="">Year</label>
          <input name='year' type="text" onChange={changeYearHandler} value={year} />
          {' '}
          <select onChange={changeSelectHander} value={type} >
            <option disabled>Type</option>
            {
              options.map((el, i) => {
                return <option value={ el.toLowerCase() } key={i}>{el}</option>
              })
            }
          </select>
          {' '}
          {/* <input type="button" value="Click" onClick={ submitHandler }/> */}
          <Link to='/result' onClick={submitHandler}>
            <input type="button" value="Click" />
          </Link>

        </div>
      </div>
    );
  }
}

export default Home;