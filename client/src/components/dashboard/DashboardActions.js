import React from 'react'
import {Link} from 'react-router-dom'

const DashboardActions = props => {
    return (
        <div class="dash-buttons">
        <Link to="/edit-profile" class="btn btn-light"
          ><i class="fas fa-user-circle text-primary"></i> Редактировать профиль</Link
        >
        <Link to="/add-experience" class="btn btn-light"
          ><i class="fab fa-black-tie text-primary"></i> Добавить Опыт работы</Link
        >
        <Link to="/add-education" class="btn btn-light"
          ><i class="fas fa-graduation-cap text-primary"></i> Добавить Образование</Link
        >
      </div>
    )
}



export default DashboardActions
