import React from 'react';
import Item from './Item/Item';
import Pagination from './pagination/pagination';
import Errors from '../Exception/Error';
import Load from '../Exception/Load';
import './Items.scss'

const Items = (props) => {
  const { title, year, type, hasData, hasError, datas, totalPage, currentPage, getDetailHandler, changeCurrentPage } = props;
  

  return (
    <div className='items'>
      {
        hasData
          ? hasError
            ? <Errors />
            : <div>
              <h1 className='header'>
                # of { type } "{title}" found in {year}
              </h1>
              <div className='row list'>
                <div className='col-1'></div>
                <div className='col-10'>
                  <div className='row'>
                    {
                      datas.map((data, i) => {
                        return <Item
                          key={i}
                          {...data}
                          getDetailHandler={getDetailHandler}
                        />
                      })
                    }
                  </div>
                </div>
                <div className='col-1'></div>
              </div>
              <Pagination
                currentPage={currentPage}
                totalPage={totalPage}
                changeCurrentPage={changeCurrentPage}
              />
            </div>
          : <Load />
      }
    </div>
  );
};

export default Items;