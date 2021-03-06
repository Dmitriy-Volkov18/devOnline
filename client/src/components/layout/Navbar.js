import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logout} from '../../actions/auth'
import icon from '../../icon/icon.png'

export const Navbar = ({auth: {isAuthenticated, loading}, logout}) => {
    const authLinks = (
        <ul>
            <li><Link to="/profiles">Разработчики</Link></li>
            <li><Link to="/posts">Посты</Link></li>
            <li><Link to="/currentProfile">Профиль</Link></li>
            <li><Link to="/settings">Настройки профиля</Link></li>
            <li><a onClick={logout} href="#!">Выйти</a></li>
        </ul>
    )

    const guestLinks = (
        <ul>
            <li><Link to="/profiles">Разработчики</Link></li>
            <li><Link to="/register">Регистрация</Link></li>
            <li><Link to="/login">Логин</Link></li>
        </ul>
    )

    return (
        <nav className="navbar bg-dark">
            <h3>
                <Link to="/"><img src={icon} style={{width: 20 + 'px', height: 20 + 'px'}} alt="DevOnline"/> DevOnline</Link>
            </h3>
            {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
        </nav>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logout})(Navbar)