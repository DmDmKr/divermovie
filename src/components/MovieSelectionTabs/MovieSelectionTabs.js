import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './MovieSelectionTabs.css'

const MovieSelectionTabs = () => {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <div>
      <ul className="MovieSelectionTabs">
        <li>
          <Link to={`${currentPath}?movie=diver`}>Ныряльщик</Link>
        </li>
        <li>
          <Link to={`${currentPath}?movie=drunk_notes`}>Записки по пьяни</Link>
        </li>
      </ul>
    </div>
  )
}

export default MovieSelectionTabs
