import React from 'react'
import PropTypes from 'prop-types'

const Pagination = ({profilesPerPage, totalProfiles, paginate}) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalProfiles / profilesPerPage); i++)
        pageNumbers.push(i)
    return (
        <div class="paginate">
            <ul class="pagination">
                {pageNumbers.map(number => (
                    <li key={number}><a href="#" onClick={() => paginate(number)}>{number}</a></li>
                ))}
                
            </ul>
        </div>
    )
}

Pagination.propTypes = {
    profilesPerPage: PropTypes.number.isRequired,
    totalProfiles: PropTypes.number.isRequired,
    paginate: PropTypes.func.isRequired
}

export default Pagination
