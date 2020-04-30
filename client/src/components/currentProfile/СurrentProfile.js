import React, {Fragment, useEffect} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Spinner from '../layout/Spinner'
import {getCurrentProfile} from '../../actions/profile'
import ProfileTop from '../profile/ProfileTop'
import ProfileAbout from '../profile/ProfileAbout'
import ProfileExperience from '../profile/ProfileExperience'
import ProfileEducation from '../profile/ProfileEducation'
import ProfileGithub from '../profile/ProfileGithub'

const CurrentProfile = ({getCurrentProfile, profile: {profile, loading}, auth}) => {
    useEffect(() => {
        getCurrentProfile()
    }, [getCurrentProfile])
    return (
        <Fragment>
            {profile === null || loading ? <Spinner /> : 
                <Fragment>
                    <div class="profile-grid my-1">
                        <ProfileTop profile={profile} />
                        <ProfileAbout profile={profile} />
                        <div class="profile-exp bg-white p-2">
                            <h2 className="text-primary">Опыт</h2>
                            {
                                profile.experience.length > 0 ? (
                                <Fragment>
                                    {
                                        profile.experience.map(experience => (
                                            <ProfileExperience key={experience._id} experience={experience} />
                                        ))
                                    }
                                </Fragment>) : (<h4>Нет опыта работы</h4>)
                            }
                        </div>
                        
                        <div class="profile-edu bg-white p-2">
                            <h2 className="text-primary">Образование</h2>
                            {
                                profile.education.length > 0 ? (
                                <Fragment>
                                    {
                                        profile.education.map(education => (
                                            <ProfileEducation key={education._id} education={education} />
                                        ))
                                    }
                                </Fragment>) : (<h4>Нет образования</h4>)
                            }
                        </div>
                        {
                            profile.githubusername && (
                                <ProfileGithub username={profile.githubusername} />
                            )
                        }
                    </div>

                    <div className="edit-profile-btn-cont">
                        {auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id && (<Link to='/edit-profile' className='editbtn btn btn-light'>Редактировать профиль</Link>)}
                    </div>
                </Fragment>
            }
        </Fragment>
    )
}

CurrentProfile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, {getCurrentProfile})(CurrentProfile)
