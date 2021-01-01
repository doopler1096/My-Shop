import React from 'react'
import {Popover, PopoverHeader, PopoverBody, Table, Badge, Button} from 'reactstrap'
import {listaCarrito} from '../listaCarrito.json'

class Carro extends React.Component{
    constructor(props){
        super();
        this.state = {
            PopoverOpen:false,
            listaCarrito
        };

        this.toggle = this.toggle.bind(this);
        console.log(props.props);
    }
    toggle(){
            this.setState(prevState => ({
            PopoverOpen: !prevState.PopoverOpen
        }));
    }

    precioTotal(){
        let total = 0;
        let precioTotal = this.state.listaCarrito.map(
            (listaCarrito) => {
                total += parseInt (listaCarrito.precio)* 1000;
            }
        )
        return(total)
    }

    render(){
        const arregloCarrito = this.state.listaCarrito.map(
            (listaCarrito, i) => {
              return(
                <tr>
                  <td>{(i += 1)}</td>
                  <td>{listaCarrito.titulo}</td>
                  <td>{listaCarrito.precio}</td>
                </tr>
              );
            }
          )
        return(
            <div>
                <Button id='Popover1' color= 'info'>
                    <span class="material-icons">shopping_cart</span>
                    <Badge color='success'>{arregloCarrito.length}</Badge>
                </Button>
                <Popover target='Popover1' placement='bottom' isOpen={this.state.PopoverOpen} toggle={this.toggle}>
                    <PopoverHeader>Productos agregaros al carrito</PopoverHeader>
                    <PopoverBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Producto</th>
                                    <th>precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                 {arregloCarrito}
                            </tbody>
                            <tfoot>
                                <th>Totál:</th>
                                <th></th>
                                <th>{this.precioTotal()}</th>
                            </tfoot>
                        </Table>
                    </PopoverBody>
                </Popover>
            </div>
        )
    }
}
export default Carro;