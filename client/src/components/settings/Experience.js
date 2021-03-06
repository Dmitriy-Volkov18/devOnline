import React, { Fragment } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import {deleteExperience} from '../../actions/profile'

const Experience = ({experience, deleteExperience}) => {
    const experiences = experience.map(exp => (
        <tr key={exp._id}>
            <td>{exp.company}</td>
            <td className="hide-sm">{exp.title}</td>
            <td>
                <Moment format="DD/MM/YYYY">{exp.from}</Moment> - {' '}
                {
                    exp.to === null ? ('Сейчас') : (<Moment format="DD/MM/YYYY">{exp.to}</Moment>)
                }
            </td>
            <td>
                <button className="btn btn-primary" onClick={() => deleteExperience(exp._id)}>Удалить</button>
            </td>
        </tr>
    ))
    return (
        <Fragment>
            <h2 className="m2-2">Опыт работы</h2>
            <div className="table-container1">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Компания</th>
                            <th>Должность</th>
                            <th>Года</th>
                            <th>Удаление</th>
                        </tr>
                    </thead>
                    <tbody>{experiences}</tbody>
                </table>
            </div>
        </Fragment>
    )
}

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired
}

export default connect(null, {deleteExperience})(Experience)
