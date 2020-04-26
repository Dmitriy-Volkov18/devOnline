import React, { Fragment } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import {deleteEducation} from '../../actions/profile'

const Education = ({education, deleteEducation}) => {
    const educations = education.map(edu => (
        <tr key={edu._id}>
            <td>{edu.school}</td>
            <td className="hide-sm">{edu.degree}</td>
            <td>
                <Moment format="YYYY/MM/DD">{edu.from}</Moment> - {' '}
                {
                    edu.to === null ? ('Now') : (<Moment format="YYYY/MM/DD">{edu.to}</Moment>)
                }
            </td>
            <td>
                <button className="btn btn-primary" onClick={() => deleteEducation(edu._id)}>Удалить</button>
            </td>
        </tr>
    ))
    return (
        <Fragment>
            <h2 className="m2-2">Образование</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Школа</th>
                        <th className="hide-sm">Степень</th>
                        <th className="hide-sm">Года</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{educations}</tbody>
            </table>
        </Fragment>
    )
}

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired
}

export default connect(null, {deleteEducation})(Education)
