import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';

const Pagination = (props)=>{

    const {page , totalPages, handlepaginationClick}=props;

    return(
            <div className='Pagination'>
                <button className='Pagination-button'
                onClick={()=> handlepaginationClick('prev')}
                    disabled={page <= 1}
                >
                    &larr;
                </button>

                    <span className='Pagination-info'>
                        page <b>{page}</b> of <b>{totalPages}</b>
                    </span>
                    
                <button className='Pagination-button'
                onClick={()=> handlepaginationClick('next')}
                disabled={page >= totalPages}
                >
                  &rarr;  
                </button>
            </div>
            
    )
}

Pagination.prototype = {
    totalpages: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    handlepaginationClick: PropTypes.func.isRequired,
};

export default Pagination;