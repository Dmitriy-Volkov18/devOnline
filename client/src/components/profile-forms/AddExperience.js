import React, { Fragment, useState} from 'react'
import {Link, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addExperience} from '../../actions/profile'


const AddExperience = ({addExperience, history}) => {
    const [formData, setFormData] = useState({
        company: '',
        title: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: '',
    })

    const [toDateDisabled, toggleDisabled] = useState(false)

    const {company, title, location, from, to, current, description} = formData

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    return (
        <Fragment>
            <h1 class="large text-primary">Добавить опыт работы</h1>
            <p class="lead">Добавьте информацию о том, какие позиции как программист вы занимали</p>
            <small>* - обязательное поле</small>

            <form class="form" onSubmit={e => {
                e.preventDefault()
                addExperience(formData, history)
            }}>
                <div class="form-group">
                    <input type="text" placeholder="* Должность" name="title" value={title} onChange={e => onChange(e)} required />
                </div>
                <div class="form-group">
                    <input type="text" placeholder="* Компания" name="company" value={company} onChange={e => onChange(e)} required />
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Местонахождение" name="location" value={location} onChange={e => onChange(e)} />
                </div>
                <div class="form-group">
                    <h4>От</h4>
                    <input type="date" name="from" value={from} onChange={e => onChange(e)} />
                </div>
                <div class="form-group">
                    <p><input type="checkbox" name="current" checked={current} value={current} onChange={e => {
                        setFormData({...formData, current: !current})
                        toggleDisabled(!toDateDisabled)
                    }} /> {' '}Настоящее время</p>
                </div>
                <div class="form-group">
                    <h4>До</h4>
                    <input type="date" name="to" value={to} onChange={e => onChange(e)} disabled={toDateDisabled ? 'disabled' : ''}/>
                </div>
                <div class="form-group">
                    <textarea
                        name="description"
                        cols="30"
                        rows="5"
                        placeholder="Описание работы"
                        value={description} onChange={e => onChange(e)}
                    ></textarea>
                </div>
                <input type="submit" class="btn btn-primary my-1" value="Добавить" />
                <Link class="btn btn-light my-1" to="/settings">Назад</Link>
            </form>
        </Fragment>
    )
}

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired
}

export default connect(null, {addExperience})(withRouter(AddExperience))
