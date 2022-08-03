import ReactPaginate from 'react-paginate';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

const Paginator = () => {
    return (
        <ReactPaginate
        previousLabel={<FaAngleDoubleLeft/>}
        nextLabel={<FaAngleDoubleRight/>}
        // pageCount={pageCount}
        pageRange={2}
        marginPagesDisplayed={3}
        // onPageChange={handlePageChange}
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