import React, {Fragment, useState} from 'react'
//import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {setAlert} from '../../actions/alert'
import {register} from '../../actions/auth'
import PropTypes from 'prop-types'


export const Register = ({setAlert, register, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const {name, email, password, password2} = formData

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    const onSubmit = async e => {
        e.preventDefault()
        if(password !== password2){
            setAlert("Passwords do not match", 'danger')
        }else{
            register({name, email, password})
        }
    }

    if(isAuthenticated){
        return <Redirect to="/currentProfile" />
    }

    return (
        <Fragment>
            <h1 className="large text-light">Регистрация</h1>

            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="Имя Фамилия" name="name" value={name} onChange={e => onChange(e)}  />
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Email" name="email" value={email} onChange={e => onChange(e)} />
                    <small className="form-text">Этот сайт использует Gravatar, если вы хотите загрузить фото профиля, используйте Gravatar email</small>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Пароль"
                        name="password"
                        value={password} 
                        onChange={e => onChange(e)}
                    
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Подтвердите пароль"
                        name="password2"
                        value={password2} 
                        onChange={e => onChange(e)}
                    
                    />
                </div>

                <input type="submit" className="btn btn-primary" value="Регистрация" />
            </form>

            <p className="my-1">
                Уже есть аккаунт? <Link to="/login">Войти</Link>
            </p>
        </Fragment>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {setAlert, register})(Register)