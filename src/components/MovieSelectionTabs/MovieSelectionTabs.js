import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './MovieSelectionTabs.css'

const MovieSelectionTabs = () => {
  const location = useLocation()
  const [selectedButtonId, setSelectedButtonId] = useState('diverButton')
  const currentPath = location.pathname

  return (
    <div>
      <ul className="MovieSelectionTabs">
        <button
          id="diverButton"
          onClick={() => setSelectedButtonId('diverButton')}
          className={selectedButtonId === 'diverButton' ? 'selected' : ''}
        >
          <Link to={`${currentPath}?movie=diver`}>Ныряльщик</Link>
        </button>
        <button
          id="drunkNotesButton"
          onClick={() => setSelectedButtonId('drunkNotesButton')}
          className={selectedButtonId === 'drunkNotesButton' ? 'selected' : ''}
        >
          <Link to={`${currentPath}?movie=drunk_notes`}>Записки по пьяни</Link>
        </button>
      </ul>
    </div>
  )
}

export default MovieSelectionTabs
