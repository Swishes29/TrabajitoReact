import React, { Component } from 'react';

class Reloj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hora: new Date(),
    };
  }

  componentDidMount() {
    // Actualiza el estado cada segundo
    this.intervalId = setInterval(() => {
      this.setState({ hora: new Date() });
    }, 1000);
  }


  render() {
    // Obtiene la hora actual en formato de 24 horas
    const { hora } = this.state;
    const horas = hora.getHours().toString().padStart(2, '0');
    const minutos = hora.getMinutes().toString().padStart(2, '0');
    const segundos = hora.getSeconds().toString().padStart(2, '0');

    return (
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">
          {horas}:{minutos}:{segundos}
        </h1>
      </div>
    );
  }
}

export default Reloj;
