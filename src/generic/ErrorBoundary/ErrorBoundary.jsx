import React, { PureComponent } from 'react';

class ErrorBoundary extends PureComponent {
  // El componente "PureComponent" es similar a lo que hace useMemo
  constructor(props) {
    super();

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('ErrorInfo', errorInfo);
  }

  render() {
    return this.state.hasError ? <h1>Hubo un error</h1> : this.props.children;
  }
}

export default ErrorBoundary;
