import React from 'react';
import {Modal, Button, Container, ModalHeader, ModalBody, ModalFooter, CardImg} from  'reactstrap';
import './FichaProducto.css'
import {listaCarrito} from '../listaCarrito.json';

class FichaProfucto extends React.Component{
    constructor(props){
        super();
        this.state = {
            modal:false,
            listaCarrito,
            stock: props.props.stock
        };

        this.toggle = this.toggle.bind(this);
        this.agregarCarrito = this.agregarCarrito.bind(this);
    }

    toggle(){
            this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    agregarCarrito(){
        listaCarrito.push({
            "titulo": this.props.props.titulo,
            "precio": this.props.props.precio,
        });
        this.setState(prevState => ({
            modal: !prevState.modal,
        }));
        if(this.state.stock > 0){
            this.setState(prevState => ({
                stock: prevState.stock -1
            }));
        }else{
            alert('STOCK AGOTADO')
        };
    }

    render(){
        return(
            <Container>
                <Button onClick={this.toggle} color='info'>Ver ficha</Button>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>{this.props.props.titulo}</ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.imagen}/>
                        <p>Detalles del producto seleccionado:</p>{this.props.props.descripcion}
                        <p>Este producto tiene un valor de:</p><b>{this.props.props.precio}</b>
                        <p>tenemos <b>{this.state.stock}</b> disponibles es stock</p>
                    </ModalBody>
                    <ModalFooter className= 'ModalFooter'>
                        <Button color= 'primary' onClick={this.agregarCarrito}>Agregar al carritio</Button>
                        <Button color= 'secondary' onClick={this.toggle}>Volver atrás</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        )
    }
}

export default FichaProfucto