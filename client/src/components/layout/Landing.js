import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

const Landing = ({isAuthenticated}) => {
    if(isAuthenticated){
        return <Redirect to='/currentProfile' />
    }
    
    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                <h1 className="x-large">DevOnline</h1>
                <p className="lead">
                    Создай свой профиль разработчика, задавай вопросы и получи помощь от более опытных разработчиков
                </p>
                <div className="buttons">
                    <Link to="/register" className="btn btn-primary">Регистрация</Link>
                    <Link to="/login" className="btn btn-light">Логин</Link>
                </div>
                </div>
            </div>
        </section>
    )
}

Landing.propTypes = {
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing)