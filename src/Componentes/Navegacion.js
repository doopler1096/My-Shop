import React from 'react'
import {Navbar, NavItem, NavLink, Nav, NavbarBrand} from 'reactstrap'
import Carro from './Carro'

class Navegacion extends React.Component {
    render(){
        return(
            <Navbar color= 'light' light expand='sm'>
                <NavbarBrand href='/'>{this.props.titulo}</NavbarBrand>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                     <Carro/>
                    </NavItem>
                </Nav>
            </Navbar>
        );

    }
}
export default Navegacion;