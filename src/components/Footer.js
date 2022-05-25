import React from 'react'
import { ListGroup } from 'react-bootstrap'

export const Footer = () => {
  return (
    <div className='list'>
      <ListGroup >
        <h2 className='text-danger footerHead'>Contactanos</h2>
        <ListGroup.Item ><a href='https://goo.gl/maps/Ln9TmviCcGYLydQU9' target='_blanck'>Como llegar</a></ListGroup.Item>
        <ListGroup.Item ><a href='https://chat.whatsapp.com' target='_blanck'>whatsapp</a></ListGroup.Item>
      </ListGroup>
      <ListGroup >
        <h2 className='text-warning footerHead'>Redes Sociales</h2>
        <ListGroup.Item ><a href='https://www.facebook.com/parrillaeljardin' target='_blanck'>Facebook</a></ListGroup.Item>
        <ListGroup.Item ><a href='https://www.instagram.com/parrillacampestreeljardin/?fbclid=IwAR2_UpeAQIGmZr54XOjGoOquV32JkWXjyJsLZ3YUI6K5VPfn8rnSCDY9TQ4' target='_blanck'>Instagram</a></ListGroup.Item>
      </ListGroup>
    </div>
  )
}
