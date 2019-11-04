import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function ModalGeneral(props){
    const [show, setShow] = React.useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return(
        <>
            <Button className={props.clases} onClick={ handleShow }>
                {props.title}
            </Button>

            <Modal 
                show={show} 
                onHide={handleClose} 
                animation={false}
                size="lg" 
                aria-labelledby="contained-modal-title-vcenter" 
                centered 
                >
                <Modal.Header closeButton>
                    <Modal.Title>
                        { props.cabecera }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.contenido}
                </Modal.Body>
                <Modal.Footer>
                    { props.footer }
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalGeneral;