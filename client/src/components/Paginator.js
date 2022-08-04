import ReactPaginate from 'react-paginate';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

import { searchRepo } from '../services';
import { AppContext } from "../context/appContext";
import { useContext } from "react";

const Paginator = (props) => {
    const { pageCount } = props;
    console.log(pageCount,"pageCount");
    const { state, setState } = useContext(AppContext);

    const handlePageChange = (data) => {
      const page = data.selected + 1;
      const query = state.query;
      const sort = state.sort;
      if(query){
        searchRepo(query,page,sort).then(res => {
          console.log(res)
          setState({
            ...state,
            isLoaded: true,
            data: res.items
          })
        }).catch(err => {
          setState({
            ...state,
            error: err,
            isLoaded: false
          })
        }
        )
      }
    }

    return (
        <ReactPaginate
        previousLabel={<FaAngleDoubleLeft/>}
        nextLabel={<FaAngleDoubleRight/>}
        pageCount={pageCount}
        pageRange={2}
        marginPagesDisplayed={3}
        onPageChange={handlePageChange}
        containerClassName={'pagination mt-3 justify-content-md-center'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        pageClassName={'page-item'}
        disabledClassName={'disabled'}
        activeClassName={'active'}
      />
    )
}

export default Paginator