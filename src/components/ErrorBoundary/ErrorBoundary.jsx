import { Component } from 'react'
import './ErrorBoundary.css'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Что-то пошло не так</h2>
          <p>
            {this.props.fallbackMessage ||
              'Не удалось загрузить этот компонент. Пожалуйста, обновите страницу.'}
          </p>
          <button onClick={() => window.location.reload()} className="error-reload-btn">
            Обновить страницу
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
