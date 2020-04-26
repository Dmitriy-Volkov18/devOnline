import React, {useEffect, Fragment} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getCurrentProfile, deleteAccount} from '../../actions/profile'
import Spinner from '../layout/Spinner'
import SettingsActions from './SettingsActions'
import Experience from './Experience'
import Education from './Education'


const Settings = ({getCurrentProfile, deleteAccount, auth: {user}, profile: {profile, loading}}) => {
    useEffect(() => {
        getCurrentProfile()
    }, [getCurrentProfile])

    return loading && profile === null ? <Spinner /> : <Fragment>
        <h1 className="large text-primary">Настройки профиля</h1>
        <p className="lead"><i className="fas fa-user">Добро пожаловать, {user && user.name}</i></p>
        {profile !== null ? 
            (<Fragment>
                <SettingsActions />
                <Experience experience={profile.experience}/>
                <Education education={profile.education}/>

                <div className="my-2">
                    <button className="btn btn-primary" onClick={() => deleteAccount()}>
                        <i className="fas fa-user-minus"> Удалить мой аккаунт</i>
                    </button>
                </div>
            </Fragment>) : 
            (<Fragment>
                <p>У тебя всё ещё нет профиля, создай его</p>
                <Link to='/create-profile' className='btn btn-primary my-1'>Создать профиль</Link>
            </Fragment>)
        }
    </Fragment>
}

Settings.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, {getCurrentProfile, deleteAccount})(Settings)
