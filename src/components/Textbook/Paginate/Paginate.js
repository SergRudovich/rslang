import './Paginate.css';
import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from "react-redux";
import { setWordsPage } from '../../../store/actions';

function Paginate() {

  const dispatch = useDispatch();

  const wordsPage = useSelector(state => state.wordsPage); 

  const handlePageChange = (event) => {
    localStorage.setItem('wordsPage', event.selected);
    dispatch(setWordsPage(event.selected));
  };

  return (
    <div className='paginate-wrapper'>
      <ReactPaginate
        forcePage={wordsPage}
        previousLabel="Previous"
        nextLabel="Next"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={30}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
}

export default Paginate;
