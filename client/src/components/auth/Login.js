import React, {Fragment, useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {login} from '../../actions/auth'

export const Login = ({login, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = formData

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    const onSubmit = async e => {
        e.preventDefault()  
        
        login(email, password)
    }

    if(isAuthenticated){
        return <Redirect to="/currentProfile" />
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Вход</h1>
            
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required/>
                    <small className="form-text">Этот сайт использует Gravatar, если вы хотите загрузить фото профиля, используйте Gravatar email</small>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password} 
                        onChange={e => onChange(e)}
                        minLength="6"
                    />
                </div>
        
                <input type="submit" className="btn btn-light" value="Войти" />
            </form>

            <p className="my-1">
                Всё ещё нет аккаунта? <Link to="/register" className="text-primary">Регистрация</Link>
            </p>
        </Fragment>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login})(Login)