import React, {useState, Fragment} from 'react'
import {Link, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createProfile} from '../../actions/profile'

const CreateProfile = ({createProfile, history}) => {
    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: ''
    })

    const [displaySocialInputs, toggleSocialInputs] = useState(false)

    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
    } = formData

    const onChange = e => setFormData({ 
        ...formData, [e.target.name]: e.target.value
    })

    const onSubmit = e => {
        e.preventDefault()
        createProfile(formData, history)
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Создай профиль</h1>

            <p className="lead">Предоставьте информацию о вас</p>

            <small>* - обязательное поле</small>

            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                <select name="status" value={status} onChange={(e) => onChange(e)} >
                        <option value="0">* Выбрать статус</option>
                        <option value="Junior Developer">Junior разработчик</option>
                        <option value="Middle Developer">Middle разработчик</option>
                        <option value="Senior Developer">Senior разрабтчик</option>
                        <option value="Manager">Менеджер</option>
                        <option value="Student or Learning">Студент</option>
                        <option value="Instructor">Инструктор</option>
                        <option value="Intern">Интерн</option>
                        <option value="Other">Другое</option>
                    </select>
                </div>

                <div className="form-group">
                    <input type="text" placeholder="Название компании" name="company" value={company} onChange={e => onChange(e)} />
                </div>

                <div className="form-group">
                    <input type="text" placeholder="Веб-сайт" name="website" value={website} onChange={e => onChange(e)} />
                </div>

                <div className="form-group">
                    <input type="text" placeholder="Местоположение" name="location" value={location} onChange={e => onChange(e)} />
                </div>

                <div className="form-group">
                    <input type="text" placeholder="* Навыки" name="skills" value={skills} onChange={e => onChange(e)} />
                    <small className="form-text">Пожалуйста, используйте запятую для разделения слов (eg.HTML,CSS,JavaScript,PHP)</small>
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Github Имя"
                        name="githubusername"
                        value={githubusername} onChange={e => onChange(e)}
                    />
                    <small className="form-text">Если вы хотите добавить свои репозитории из Github, добавьте имя пользователя Github</small>
                </div>

                <div className="form-group">
                    <textarea placeholder="Коротко о себе" name="bio" value={bio} onChange={e => onChange(e)}></textarea>
                </div>

                <div className="my-2">
                    <button onClick={() => toggleSocialInputs(!displaySocialInputs)} type="button" className="btn btn-light">
                    Добавить ссылки на соц. сети
                    </button>
                    <span>Не обязательно</span>
                </div>

                {displaySocialInputs && <Fragment>
                    <div className="form-group social-input">
                        <i className="fab fa-twitter fa-2x"></i>
                        <input type="text" placeholder="twitter url" name="twitter" value={twitter} onChange={e => onChange(e)} />
                        </div>

                        <div className="form-group social-input">
                        <i className="fab fa-facebook fa-2x"></i>
                        <input type="text" placeholder="facebook url" name="facebook" value={facebook} onChange={e => onChange(e)} />
                        </div>

                        <div className="form-group social-input">
                        <i className="fab fa-youtube fa-2x"></i>
                        <input type="text" placeholder="youtube url" name="youtube" value={youtube} onChange={e => onChange(e)} />
                        </div>

                        <div className="form-group social-input">
                        <i className="fab fa-linkedin fa-2x"></i>
                        <input type="text" placeholder="linkedin url" name="linkedin" value={linkedin} onChange={e => onChange(e)} />
                        </div>

                        <div className="form-group social-input">
                        <i className="fab fa-instagram fa-2x"></i>
                        <input type="text" placeholder="instagram url" name="instagram" value={instagram} onChange={e => onChange(e)} />
                    </div>
                    </Fragment>}

                
                <input type="submit" className="btn btn-primary my-1" value="Создать профиль" />
                <Link className="btn btn-light my-1" to="/settings">Назад</Link>
            </form>
        </Fragment>
    )
}

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired
}



export default connect(null, {createProfile})(withRouter(CreateProfile))
