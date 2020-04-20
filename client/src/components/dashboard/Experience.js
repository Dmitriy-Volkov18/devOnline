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
                <Moment format="YYYY/MM/DD">{exp.from}</Moment> - {' '}
                {
                    exp.to === null ? ('Now') : (<Moment format="YYYY/MM/DD">{exp.to}</Moment>)
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
            <table className="table">
                <thead>
                    <tr>
                        <th>Компания</th>
                        <th className="hide-sm">Название</th>
                        <th className="hide-sm">Года</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{experiences}</tbody>
            </table>
        </Fragment>
    )
}

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired
}

export default connect(null, {deleteExperience})(Experience)
