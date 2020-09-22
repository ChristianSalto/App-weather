import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super();

    this.state = {
      activo: false,
    };
  }

  setActivo = () => {
    return this.state.activo ? ' Activo' : ' No Activo';
  };

  render() {
    return (
      <h1>
        ErrorBoundary {this.props.saludo}
        {this.setActivo()}
      </h1>
    );
  }
}

export default ErrorBoundary;
