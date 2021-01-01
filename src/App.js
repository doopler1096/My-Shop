import React from 'react';
import Producto from './Componentes/Producto.js';
import './App.css';
import {Container, Row} from 'reactstrap';
import Navegacion from './Componentes/Navegacion';
import {ListaProducto} from './Componentes/ListaProducto.json';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      ListaProducto
    }
  }

  render(){
    const arregloComponentes = this.state.ListaProducto.map(
      (ListaProducto, i) => {
        return(
          <Producto
          key={i}
          titulo={ListaProducto.titulo}
          imagen={ListaProducto.imagen}
          descripcion={ListaProducto.descripcion}
          precio={ListaProducto.precio}
          stock={ListaProducto.stock}
          />
        )
      }
    )
    return (
      <Container>
        <Navegacion titulo= 'Compre con Doop'/>
        <Row>
        {arregloComponentes}
        </Row>
      </Container>
    );
  }
}

export default App;
