import React, { Component } from 'react';
// import Pagination from "react-js-pagination";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './pagination.scss';

class pagination extends Component {
  state = {
    totalPage: 20,
    currentPage: 19,
  }

  render() {
    // const { currentPage, totalPage } = this.state;
    const { currentPage, totalPage, changeCurrentPage } = this.props;

    var list = [];

    let beg;
    currentPage < 5 ? beg = currentPage : beg = currentPage - 3;
    let end;
    currentPage + 5 < totalPage ? end = currentPage + 3 : end = totalPage;

    for (let i = beg; i <= end; i++) {
      list.push(
        <PaginationItem key={i}
          active={currentPage === i ? true : false}
        >
          <PaginationLink onClick={() => changeCurrentPage(i)}  >
            {i}
          </PaginationLink>
        </PaginationItem>
      )
    }

    return (
      <div className='page'>
        <Pagination aria-label="Page navigation example">
          <PaginationItem disabled={currentPage === 1 ? true : false} >
            <PaginationLink previous onClick={() => changeCurrentPage(1)} />
          </PaginationItem>
          <PaginationItem disabled={currentPage === 1 ? true : false}  >
            <PaginationLink onClick={() => changeCurrentPage(currentPage - 1)} >
              {'<'}
            </PaginationLink>
          </PaginationItem>
          {list}
          <PaginationItem disabled={currentPage === totalPage ? true : false}  >
            <PaginationLink onClick={() => changeCurrentPage(currentPage + 1)} >
              {'>'}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem disabled={currentPage === totalPage ? true : false} >
            <PaginationLink next onClick={() => changeCurrentPage(totalPage)} />
          </PaginationItem>
        </Pagination>
      </div>
    );
  }
}

export default pagination;