import React, {Fragment, useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Spinner from '../layout/Spinner'
import ProfileItem from './ProfilesItem'
import {getProfiles} from '../../actions/profile'
import Pagination from '../pagination/Pagination'

const Profiles = ({getProfiles, profile: {profiles, loading}}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [profilesPerPage] = useState(8)


    useEffect(() => {
        getProfiles()
    }, [getProfiles])

    const indexOfLastProfile = currentPage * profilesPerPage
    const indexOfFirstProfile = indexOfLastProfile - profilesPerPage
    const currentProfiles = profiles.slice(indexOfFirstProfile, indexOfLastProfile)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <Fragment>
            {loading ? <Spinner /> : 
                <Fragment>
                    <h1 className="large text-primary">Разработчики</h1>
                    <div className="profiles">
                        {currentProfiles.length > 0 ? (currentProfiles.map(profile => (
                            <ProfileItem key={profile._id} profile={profile} />
                        ))) : <h4>Профили не найдены</h4>}
                    </div>   
                    <Pagination profilesPerPage={profilesPerPage} totalProfiles={profiles.length} paginate={paginate} />
                </Fragment>
            }
        </Fragment>
    )
}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, {getProfiles})(Profiles)
