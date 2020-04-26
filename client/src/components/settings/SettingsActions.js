import React from 'react'
import {Link} from 'react-router-dom'

const SettingsdActions = props => {
    return (
        <div className="dash-buttons">
          <Link to="/edit-profile" class="btn btn-light">Редактировать профиль</Link>
          <Link to="/add-experience" class="btn btn-light">Добавить Опыт работы</Link>
          <Link to="/add-education" class="btn btn-light">Добавить Образование</Link>
      </div>
    )
}



export default SettingsdActions
