import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <div className="page-container py-16 text-center">
          <p className="text-red-400 font-mono text-sm">{this.state.error.message}</p>
        </div>
      )
    }
    return this.props.children
  }
}
