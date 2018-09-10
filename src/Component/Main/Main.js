import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from '../Home/Home';
import Axios from '../../Config/Axios';
import Items from '../Items/Items';
import Detail from '../Detail/Detail';

class Main extends Component {
  state = {
    title: '',
    year: '',
    type: 'Type',
    options: ['Movie', 'Series', 'Epidode'],
    totalPage: 0,
    currentPage: 1,
    hasData: false,
    hasError: false,
    hasDetail: false,
    data: null,
    detailData: null
  }

  changeTitleHandler = e => {
    const title = e.target.value;
    this.setState({ title })
  }

  changeYearHandler = e => {
    const year = e.target.value;
    this.setState({ year })
  }

  changeSelectHander = (e) => {
    const type = e.target.value;
    this.setState({ type })
  }

  getDetailHandler = id => {
    // const query = `?apikey=54abb0a5&tt=${title}`
    // const query http://www.omdbapi.com/?i=tt3013528&apikey=54abb0a5
    console.log(id);
    const query = `?apikey=54abb0a5&i=${id}`
    this.getDetailData(query)
  }

  submitHandler = () => {
    const { title, year, type, currentPage } = this.state;
    // let query = `?apikey=54abb0a5&s=${title}`
    let query = `?apikey=54abb0a5`
    if (title !== '') query += `&s=${title}`;
    if (year !== '') query += `&y=${year}`;
    if (type !== 'Type') query += `&type=${type}`;
    query += `&page=${currentPage}`

    console.log(query);
    this.getData(query);
  }

  getData = (query) => {
    Axios.get(query)
      .then(res => {
        console.log(res);
        return res.data
      })
      .then(data => {
        if (data.Response === 'False') throw Error
        this.setState({
          data: data.Search,
          hasData: true,
          hasError: false,
          totalPage: parseInt(data.totalResults / 10 )
        })
      })
      .catch(e => {
        console.log('ERROR');
        this.setState({
          hasData: true,
          hasError: true
        })
      });
  }

  getDetailData = (query) => {
    console.log(query);
    Axios.get(query)
      .then(res => {
        console.log(res);
        return res.data
      })
      .then(detailData => {
        this.setState({ 
          hasDetail: true,
          detailData 
        })
      })
      .catch(e => {
        console.log('ERROR');
      });
  }

  changeCurrentPage = (currentPage) => {
    const { title, year, type } = this.state;
    let query = `?apikey=54abb0a5`
    if (title !== '') query += `&s=${title}`;
    if (year !== '') query += `&y=${year}`;
    if (type !== 'Type') query += `&type=${type}`;
    query += `&page=${currentPage}`
    console.log(currentPage, query);

    this.setState({
      currentPage,
      hasData: false
    }, () => {
      this.getData(query)
    });
  }

  render() {
    const { title, year, type, options, hasData, hasDetail, hasError, data, detailData, totalPage, currentPage } = this.state;
    const { changeTitleHandler, changeYearHandler, changeSelectHander, submitHandler, getDetailHandler, changeCurrentPage } = this;

    return (
      <div className='main' >
        <Switch>
          <Route exact path='/' render={() => {
            return <Home
              title={title}
              year={year}
              type={type}
              options={options}
              changeTitleHandler={changeTitleHandler}
              changeYearHandler={changeYearHandler}
              changeSelectHander={changeSelectHander}
              submitHandler={submitHandler}
            />
          }} />
          <Route path='/result' render={() => {
            return <Items
              title={title}
              year={year}
              type={type}
              hasError={hasError}
              hasData={hasData}
              datas={data}
              totalPage={totalPage}
              currentPage={currentPage}
              getDetailHandler={getDetailHandler}
              changeCurrentPage={changeCurrentPage}
            />
          }} />
          <Route path='/detail' render={() => {
            return <Detail {...detailData} 
              hasDetail={hasDetail}
            />
          }} />
        </Switch>
      </div>
    );
  }
}

export default Main;