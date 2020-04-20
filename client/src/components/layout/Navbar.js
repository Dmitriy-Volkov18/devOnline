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
            <li><Link to="/dashboard"><i className="fas fa-user"></i> {' '}<span className='hide-sm'>Профиль</span></Link></li>
            <li><a onClick={logout} href="#!"><i className="fas fa-sign-out-alt"></i> {' '}
            <span className='hide-sm'>Выйти</span></a></li>
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
                <Link to="/"><img src={icon} style={{width: 20 + 'px', height: 20 + 'px'}}/> DevOnline</Link>
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