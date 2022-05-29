import React, { useState } from 'react'
import { Table, Nav } from 'react-bootstrap'
import { menu } from '../data/menu'
import { useDispatch, useSelector } from 'react-redux'

import '../style/menu.css'
import { ArrowLeft, ArrowRight } from '../icons/icons'
import { aumentarItem, disminuirItem } from '../redux/reducers/pedidosReducer'

export const Pedidos = () => {
    const dispatch = useDispatch()
    const [menuFood, setMenuFood] = useState(menu)
    const { pedidosItems } = useSelector((store) => store.pedidos)

    const filterFood = (filt) => {
        setMenuFood(menu.filter((menuFilter) => menuFilter.categoria === filt))
    }

    return (
        <div className='mt-5 pt-3' >
            <div className='w-75 m-auto'>
                <Nav variant="tabs" className='navFilter   bg-warning text-light'>
                    <Nav.Item>
                        <Nav.Link onClick={() => { setMenuFood(menu) }}>
                            Todos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => { filterFood('bebidas') }}>
                            Bebidas
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => { filterFood('carnes') }}>
                            Carne
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => { filterFood('postres') }}>
                            Postres
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => { filterFood('comidas_rapidas') }}>
                            Comidas Rapidas
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <div className='d-flex  justify-content-around'>

                <Table className='w-50 mx-5 my-5' striped bordered hover variant="success">
                    <thead>
                        <tr className='text-center'>
                            <th>Imagen</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menuFood.map((food) => (
                                <tr key={food.id} className='text-center'>
                                    <td><div className='imgFood'><img className='imgF' src={food.img} alt={food.nombre} /></div></td>
                                    <td className='w-25'>$ {food.precio}</td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
                <div className='w-50 mx-5 my-5'>

                    <Table className='tablePedidos ' striped bordered hover variant="secondary">
                        <thead>
                            <tr className='text-center'>
                                <th>Pedidos</th>
                            </tr>
                        </thead>
                        <tbody className=' w-100'>
                            {
                                pedidosItems.map((food) => (
                                    <tr className='bg-info d-flex text-center' key={food.id}>
                                        <td className='w-50'><div className='imgFoodP w-50'><img className='imgF' src={food.img} alt={food.nombre} /></div></td>
                                        <td className='w-25'><span>${food.precio}</span></td>
                                        <td className='w-25'>
                                        <span><ArrowLeft onClick={()=>dispatch(disminuirItem(food.id))}/></span>
                                        <span className='mx-3'>{food.id}</span>
                                        <span><ArrowRight onClick={()=>dispatch(aumentarItem(food.id))}/></span>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
